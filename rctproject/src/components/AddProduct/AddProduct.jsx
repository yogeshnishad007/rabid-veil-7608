import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import styles from "./AddProduct.module.css";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubcategoryProduct,
  getCategoryProduct,
  getByBrand,
} from "./../Redux/product/action";
import { addProd, subProd } from "./../Redux/cart/actions";
import { useParams } from "react-router-dom";

function AddProduct(props) {
  const [counter, setCounter] = React.useState(0);
  const [hideFlag, setHideFlag] = React.useState(false);
  const dataArr = useSelector((state) => state.product.subCategoryData);
  const dataArrCategory = useSelector((state) => state.product.categoryData);
  const dataArrBrand = useSelector((state) => state.product.subCategoryData);
  const dispatch = useDispatch();
  const params = useParams();
  // console.log(params, "ADD PRODUCT PARAMS");
  // console.log(dataArr, "DATA ARR ADD PRODUCTS SUB CATEGORY");
  // console.log(dataArrCategory, "DATA ARR ADD PRODUCTS CATEGORY");

  useEffect(() => {
    if (props.subCategory) {
      dispatch(getSubcategoryProduct(props.subCategory));
    }
    if (params.category) {
      dispatch(getCategoryProduct(params.category));
    }
    if (params.name) {
      dispatch(getByBrand(params.name));
    }
  }, [dispatch, props.subCategory, params.category, params.name]);

  let prodId = props.id;

  let itemFromLocalStorage =
    JSON.parse(localStorage.getItem(`${prodId}`)) || "";

  const handleAddClick = () => {
    setCounter((counter) => counter + 1);

    setHideFlag(true);
    // console.log(prodId);

    let reqitem = {};
    if (dataArr.length !== 0 && props.subCategory) {
      reqitem = dataArr.find((item) => prodId === item._id);
    } else if (dataArrCategory.length !== 0 && params.category) {
      reqitem = dataArrCategory.find((item) => prodId === item._id);
    } else if (dataArrBrand.length !== 0 && params.name) {
      reqitem = dataArrBrand.find((item) => prodId === item._id);
    }
    // console.log(dataArr)

    // console.log(reqitem, "REQ");

    let reqProd = {};
    if (reqitem !== undefined) {
      reqProd = {
        id: reqitem._id || prodId,
        title: reqitem.product.title,
        imageLink: reqitem.product.image,
        category: reqitem.category,
        sub_ctg: reqitem.sub_category,
        price: reqitem.product.price,
        inCartQty: 0,
        presentInCart: false,
      };
      reqProd.presentInCart = true;
      reqProd.inCartQty = 1;
    }

    dispatch(addProd(reqProd.inCartQty));
    if (reqProd.presentInCart === true) {
      localStorage.setItem(`${reqProd.id}`, JSON.stringify(reqProd));
    }
  };

  const handleCounterAdd = () => {
    let reqProdToAdd = JSON.parse(localStorage.getItem(`${prodId}`));

    setCounter((counter) => counter + 1);

    reqProdToAdd.inCartQty = reqProdToAdd.inCartQty + 1;

    dispatch(addProd(reqProdToAdd.inCartQty));
    localStorage.setItem(`${prodId}`, JSON.stringify(reqProdToAdd));
  };

  const handleCounterDec = () => {
    let reqProdToDec = JSON.parse(localStorage.getItem(`${prodId}`));

    setCounter((counter) => counter - 1);

    reqProdToDec.inCartQty = reqProdToDec.inCartQty - 1;

    dispatch(subProd(reqProdToDec.inCartQty));

    if (reqProdToDec.inCartQty === 0) {
      reqProdToDec = JSON.parse(localStorage.getItem(`${prodId}`));

      reqProdToDec.presentInCart = false;

      localStorage.setItem(`${prodId}`, JSON.stringify(reqProdToDec));
      localStorage.removeItem(`${prodId}`);
      return;
    }
    localStorage.setItem(`${prodId}`, JSON.stringify(reqProdToDec));
  };

  return (
    <>
      <Box>
        <div style={{ clear: "both" }}></div>
        {itemFromLocalStorage.inCartQty > 0 ? (
          <Grid container>
            <span className={styles.AddDecBtn} onClick={handleCounterDec}>
              -
            </span>
            <span className={styles.AddDecBtn}>
              {itemFromLocalStorage.inCartQty}
            </span>
            <span className={styles.AddDecBtn} onClick={handleCounterAdd}>
              +
            </span>
          </Grid>
        ) : (
          <Box
            className={styles.AddBtn}
            onClick={handleAddClick}
            style={{ background: "#92BE4B", color: "white" }}
          >
            <TiShoppingCart
              style={{
                color: "white",
                marginRight: "2px",
                marginTop: "-2px",
              }}
            />{" "}
            <span style={{ color: "white" }}>ADD </span>
          </Box>
        )}
      </Box>
    </>
  );
}
export default AddProduct;
