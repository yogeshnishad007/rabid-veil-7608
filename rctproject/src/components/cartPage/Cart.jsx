import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import styles from "./cart.module.css";
import { styled } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import { useSelector } from "react-redux";

const MyButton1 = styled(Box)({
  background: "transparent",
  border: "2px solid #92be4d",
  borderRadius: "3px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  padding: "10px 30px",
  float: "left",
  fontSize: "16px",
  color: "#595959",
  marginRight: "10px",
  cursor: "pointer",
});

const MyButton2 = styled(Box)({
  background: "#578f1b",
  border: "none",
  borderRadius: "3px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  padding: "10px 30px",
  float: "left",
  fontSize: "16px",
  color: "white",
  cursor: "pointer",
});
function Cart() {
  const reqId = useSelector((state) => state.cart.cartChange);
  let cartData = [];
  let [cartArr, setCartArr] = React.useState([]);
  let [totalSum, setTotalSum] = React.useState(0);
  const history = useHistory();
  for (let i = 0; i < localStorage.length; i++) {
    if (Object.keys(localStorage)[i] !== "rzp_device_id") {
      if (
        localStorage.getItem(localStorage.key(i)) === "true" ||
        localStorage.getItem(localStorage.key(i)) === "false" ||
        Object.keys(localStorage)[i] === "user" ||
        Object.keys(localStorage)[i] === "mapbox.eventData:YWhtZWRyemFraGFu" ||
        Object.keys(localStorage)[i] ===
          "mapbox.eventData.uuid:YWhtZWRyemFraGFu" ||
        Object.keys(localStorage)[i] === "OrderSummary" ||
        Object.keys(localStorage)[i] === "mainCartDataLength"
      ) {
        continue;
      } else {
        // console.log(localStorage.getItem(localStorage.key(i)), "LOCAL STORAGE")
        let temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
        // console.log(temp, "TEMP")
        cartData.push(temp);
      }
    }
  }
  localStorage.setItem("mainCartDataLength", JSON.stringify(cartData.length));
  let sum = 0;
  let deliveryCharge = 50;
  for (let i = 0; i < cartData.length; i++) {
    sum = sum + cartData[i].inCartQty * cartData[i].price;
  }
  useEffect(() => {
    setCartArr(cartData);
    setTotalSum(sum);
  }, [reqId]);
  // localStorage.setItem("myCart", JSON.stringify(cartData))
  //  console.log(totalSum)
  // console.log(cartArr.length);
  // console.log(cartArr)
  const handleItemRemove = (id) => {
    alert("Item will be deleted");
    let reqProdToRemove = JSON.parse(localStorage.getItem(`${id}`));
    reqProdToRemove.presentInCart = false;
    localStorage.setItem(`${id}`, JSON.stringify(reqProdToRemove));
    localStorage.removeItem(`${id}`);
  };
  return (
    <>
      {cartArr.length > 0 ? (
        <Box classes={{ root: styles.main }}>
          <Box classes={{ root: styles.shopping }}>
            <Box classes={{ root: styles.head }}>
              {" "}
              MY CART <span>({cartData.length} ITEMS)</span>
            </Box>
            <Box>
              <MyButton1 onClick={() => history.push("/")}>
                CONTINUE SHOPPING
              </MyButton1>
              <MyButton2 onClick={() => history.push("/checkout")}>
                PROCEED TO CHECKOUT
              </MyButton2>
            </Box>
          </Box>
          <Box classes={{ root: styles.flex }}>
            <Box classes={{ root: styles.display }}>
              <Box classes={{ root: styles.name }}>Name</Box>
              <Box>Price</Box>
              <Box>Qty</Box>
              <Box>Sub-Total</Box>
            </Box>
          </Box>
          <Box classes={{ root: styles.newShopping }}>
            {cartArr.map((item, i) => (
              <Box key={i}>
                <Box classes={{ root: styles.subheading }}>
                  <h3>{item.category}</h3>
                </Box>
                <Box classes={{ root: styles.items }}>
                  <Box classes={{ root: styles.name1 }}>
                    <Box>
                      <img src={item.imageLink} height="100px" alt="food" />
                    </Box>
                    <Box onClick={() => history.push(`/product/${item.id}`)}>
                      {item.title}
                    </Box>
                  </Box>
                  <Box>₹{item.price}</Box>
                  {item.inCartQty > 0 ? (
                    <Box>
                      <AddProduct subCategory={item.sub_ctg} id={item.id} />
                    </Box>
                  ) : null}
                  <Box>
                    ₹{item.price * item.inCartQty}{" "}
                    <img
                      onClick={() => handleItemRemove(item.id)}
                      className={styles.close}
                      src="https://d1z88p83zuviay.cloudfront.net/Images/login-close.png"
                      alt="close"
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box classes={{ root: styles.total }}>
            <Box classes={{ root: styles.sub }}> Sub-Total: ₹ {totalSum} </Box>
            <Box classes={{ root: styles.del }}>
              {" "}
              Delivery Charges : ₹ {deliveryCharge}{" "}
            </Box>
            <Box classes={{ root: styles.tot }}>
              {" "}
              Total: ₹ {totalSum + deliveryCharge}
            </Box>
          </Box>
          <Box classes={{ root: styles.shopping }}>
            <Box classes={{ root: styles.head }}> </Box>
            <Box>
              <MyButton1 onClick={() => history.push("/")}>
                CONTINUE SHOPPING
              </MyButton1>
              <MyButton2 onClick={() => history.push("/checkout")} c>
                PROCEED TO CHECKOUT
              </MyButton2>
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box className={styles.emptyCart}>
            <img
              src="https://d1z88p83zuviay.cloudfront.net/Images/Icon-no-cart.png"
              alt="empty cart"
            />
            <p className={styles.emptyCartText}>
              No products added to your cart.{" "}
            </p>
            <Box className={styles.emptyCartContinueShopping}>
              <MyButton1 onClick={() => history.push("/")}>
                CONTINUE SHOPPING
              </MyButton1>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
export default Cart;
