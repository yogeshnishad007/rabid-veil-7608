import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../Redux/product/action";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import styles from "./SingleProduct.module.css";
import Footer from "../Footer/Footer";
import AddProduct from "../AddProduct/AddProduct";

const singleProductSample = {
  name: "Apple Royal Gala - New Zealand",
  imageLink:
    "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b05894c9-bafd-45af-95bf-30fe304d242c_425x425.jpg",
  qty: "1kg",
  price: 280,
  description: `Harvested from mid February to late March, 
these tasty apples are developped and bred in New Zealand. Sweet, fragrant, crisp. A crunchy apple.
Red striped with creamy yellow background. 
This is an aromatically – sweet apple. Popular for eating and salads.
#Developed and Bred in New Zealand
#Natural Product`,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  marginLeftSide: {
    margin: 30,
  },
  blackFont: {
    color: "black",
  },
  borderBottomOnly: {
    borderBottom: "1px solid black",
  },
  headingText: {
    fontSize: "24px",
    textAlign: "left",
    fontFamily: "CeraPRO-Regular",
    color: "#011111",
    fontWeight: "lighter",
  },
}));

function SingleProduct() {
  const classes = useStyles();
  const data = useSelector((state) => state.product.singleProData);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, [dispatch, params.id]);

  if (data.length === 0) {
    return null;
  }
  return (
    <>
      <div style={{ marginTop: "30px", clear: "both" }}></div>
      <Box className={classes.marginLeftSide}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Home
          </Link>
          <Link
            color="inherit"
            to={`/home/${data.category}/${data.sub_category}`}
          >
            {data.category}
          </Link>
          <Typography color="inherit"> {data.product["title"]} </Typography>
        </Breadcrumbs>
        <Grid container>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <img src={data.product["image"]} alt={data.product["title"]} />
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
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <h1 className={classes.headingText}>{data.product["title"]}</h1>
            <small>Share </small>{" "}
            <span className={classes.blackFont}>
              <FaFacebookF />{" "}
            </span>{" "}
            <span className={classes.blackFont}>
              <FaTwitter />{" "}
            </span>
            <p>
              Product of: INDIA
              <br />
              {data.product["description"]}
            </p>
            <Box>
              <div style={{ display: "flex" }}>
                <span className={styles.mrpBorder}>
                  MRP ₹{data.product.price}{" "}
                </span>
                <AddProduct subCategory={data.sub_category} id={data._id} />
              </div>
            </Box>
            <Box className={classes.borderBottomOnly}>
              <small className={styles.inclusive}>
                {" "}
                Inclusive of all taxes){" "}
              </small>
            </Box>
            <p>Know More</p>
            <p>{singleProductSample.description} </p>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
export default SingleProduct;
