import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../cardContainer/CardContainer.module.css";
import { Typography, Grid } from "@material-ui/core";
import AddProduct from "./../../AddProduct/AddProduct";

function CardPage(props) {
  const searchData = useSelector((state) => state.product.searchData);
  const history = useHistory();

  return (
    <>
      <Grid m={2} container>
        {searchData &&
          searchData.map((items, i) => {
            return (
              <>
                <Grid m={2} key={i} container item xs={12} lg={3} md={4} sm={6}>
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

export default CardPage;
