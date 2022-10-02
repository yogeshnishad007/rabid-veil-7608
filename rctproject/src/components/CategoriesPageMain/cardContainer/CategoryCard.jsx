import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct, getByBrand } from "../../Redux/product/action";
import styles from "./CardContainer.module.css";
import { Typography, Grid } from "@material-ui/core";
import AddProduct from "./../../AddProduct/AddProduct";

function CategoryCard(props) {
  const data = useSelector((state) => state.product.categoryData);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { categories } = params;
  // console.log(params);

  useEffect(() => {
    if (categories) {
      dispatch(getCategoryProduct(categories));
    }

    if (params.name) {
      dispatch(getByBrand(params.name));
    }
    window.scrollTo(0, 0);
  }, [dispatch, categories, params.name]);

  return (
    <>
      <Grid m={2} container>
        {data &&
          data.map((items, i) => {
            return (
              <>
                <Grid m={2} key={i} container item xs={12} lg={3} md={6} sm={6}>
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
                    <Typography noWrap="false" classes={{ root: styles.text }}>
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
                      <AddProduct
                        subCategory={items.sub_category}
                        id={items._id}
                      />
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

export default CategoryCard;
