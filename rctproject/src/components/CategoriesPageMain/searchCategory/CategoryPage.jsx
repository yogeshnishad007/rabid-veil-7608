import React from "react";
import styles from "../categoriesPage/CategoriesPage.module.css";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Footer from "../../Footer/Footer";
import CardPage from "./CardPage";

const checkBoxInputsArr = [
  "Fruits and Vegetables",
  "Nature's Best",
  "Nature's Basket",
  "Raw Pressery",
  "Jain Farm Fresh",
  "American Garden",
  "Tomato Cherry",
  "Yummiez",
];

const listHeading = "Brands";

const SubCategoryItemsArr = [
  "Fruits",
  "Exotic Fruits",
  "Daily Vegetables",
  "Exotic Vegetables",
  "Baby tender Vegetables",
  "Canned & Frozen",
  "Cold Press Fresh",
];

const dietaryLifestyle = [
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
  "Vegetarian",
];
function SearchCategory() {
  const checkBoxChange = (e) => {
    if ([e.target.name] === e.target.value) {
      e.target.checked = !e.target.checked;
    }
  };
  const checkBoxClick = (e) => {
    if (e.target.checked === true) {
      alert(e.target.value);
    }
  };

  return (
    <>
      <div style={{ clear: "both" }}></div>
      <div>
        <div className={styles.FilterClearAll}>
          <p style={{ textAlign: "center" }}>FILTER</p>
          <p
            style={{
              textAlign: "right",
              fontSize: "10px",
              paddingTop: "10px",
              paddingRight: "5px",
              marginLeft: "6%",
            }}
          >
            CLEAR ALL
          </p>
        </div>
      </div>
      <Grid container>
        <div style={{ clear: "both" }}></div>
        <Hidden only={["sm", "xs"]}>
          <Grid className={styles.filtersContainer} item lg={2}></Grid>
        </Hidden>

        <Grid
          item
          style={{ paddingLeft: "20px", marginBottom: "20px" }}
          sm={12}
          md={12}
          lg={9}
        >
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
          </Breadcrumbs>

          <div style={{ fontSize: "20px", fontWeight: "600" }}>Explore</div>
          <div className={styles.productsDisplay}>{<CardPage />}</div>
        </Grid>

        <Grid
          style={{ paddingLeft: "10px", marginBottom: "20px" }}
          item
          lg={12}
          sm={12}
          md={12}
        >
          <Box>
            <h3>Online Grocery Store India </h3>
            <p>
              Nature’s Basket is a grocery store operating in Mumbai, Bangalore
              and Pune with deliveries to all cities across India including
              Hyderabad, Delhi, Kolkata, Chennai, Surat and more. We offer a
              wide range of food products for all your everyday needs and even
              offer grocery home delivery as well as a grocery shop online for
              you to purchase from. Our online grocery store has fresh fruits
              and vegetables, fresh and frozen meats and seafood, a wide range
              of breads and other packaged bakery products as well as a range of
              fresh cheeses from around the world. We even have a range of every
              staple and international cuisine product to meet your needs along
              with organic products for fresh and packaged food items. With our
              offerings, we have the best online food shop & online grocery
              shopping platform available for all your grocery products as well
              as physical grocery stores in select cities.{" "}
            </p>
            <h3>Best Online Grocery Supermarket India </h3>
            <p>
              With stores in Mumbai, Pune and Bangalore and online delivery
              services, you can now have all your grocery supermarket shopping
              done online. We have a wide range of grocery products to offer at
              our stores for you to buy groceries from a channel convenient to
              you. Choose from fresh produce to packaged goods, buy groceries
              online and get them delivered straight to your doorstep, thus
              making it a convenient and quick process. You can pay for the
              shopping using credit cards, cash, coupons or online banking
              facility. We are sure to have all the grocery products for your
              daily dietary needs from regular local Indian brands and products
              to exotic and international imported ones.{" "}
            </p>
            <h3>Online Grocery Supermarket Shopping India </h3>
            <p>
              With our wide range of groceries available, Nature’s Basket is a
              large online supermarket and grocery store for all your everyday
              food needs. We offer you the best quality grocery products which
              you can buy online and have them delivered to you conveniently. We
              have our grocery stores in Mumbai, Pune and Bangalore where you
              can buy groceries and food items. We also have the best online
              grocery store to shop for fruits and vegetables, meats and
              seafood, breads and other bakery items as well as cheese and
              dairy. Order groceries online from the best quality grocery store
              at best prices.{" "}
            </p>
            <small>
              Find a variety of Best Christmas gifts such as delightful Cakes,
              Chocolates, Cookies, Turkey, Stollen, Gourmet Gift Baskets, Sweets
              & Lots More{" "}
              <Link style={{ color: "red", textDecoration: "none" }} to="/">
                Here
              </Link>
            </small>
          </Box>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}
export default SearchCategory;
