import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSubcategoryProduct, getByBrand } from "../../Redux/product/action";
import styles from "./CardContainer.module.css";
import { Typography, Grid } from "@material-ui/core";
import AddProduct from "./../../AddProduct/AddProduct";

function CardContainer(props) {
  const data = useSelector((state) => state.product.subCategoryData);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { sub_category } = params;
  // console.log(params);

  useEffect(() => {
    if (sub_category) {
      dispatch(getSubcategoryProduct(sub_category));
    }

    if (params.name) {
      dispatch(getByBrand(params.name));
    }
  }, [dispatch, sub_category]);

  return (
    <>
      <Grid m={2} spacing={1} container>
        {data &&
          data.map((items, i) => {
            return (
              <>
                <Grid key={i} m={2} item xs={12} lg={3} md={4} sm={6}>
                  <div className={styles.productCard}>
                    <img
                      onClick={() => history.push(`/product/${items._id}`)}
                      height="230px"
                      src={items.product["image"]}
                      alt={items.product["title"]}
                    />{" "}
                    <div>
                      <img
                        height="20px"
                        src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/8ab57ed4-47e0-426a-8382-f4c89b11826a.png"
                        alt="delivery"
                      />{" "}
                      <span
                        style={{
                          color: "#880033",
                          fontSize: "15px",
                          fontWeight: "600",
                        }}
                      >
                        DELIVERY IN 60 MINUTES{" "}
                      </span>
                    </div>
                    <Typography noWrap={false} classes={{ root: styles.text }}>
                      {" "}
                      {items.product["title"]}{" "}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "5%",
                        marginTop: "5%",
                      }}
                    >
                      <span className={styles.mrpBorder}>
                        MRP ₹ {items.product.price}
                      </span>
                      <AddProduct id={items._id} />
                    </div>
                  </div>
                </Grid>
              </>
            );
          })}
      </Grid>
    </>
  );
}

export default CardContainer;
