import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Container } from "@material-ui/core";
import styles from "./fresh.module.css";

function FreshFast() {
  const history = useHistory();
  return (
    <>
      <Container classes={{ root: styles.main }}>
        <Box classes={{ root: styles.heading }}>
          <Box className={styles.imgBox}>
            <img
              className={styles.photo}
              src="https://m.naturesbasket.co.in/Images/Fresh_n_fast_biker_black_transparent.png"
              alt="delivery"
            />

            <h2>
              {" "}
              GET FRESH AND FAST DELIVERY WITH NATURE’S BASKET AT YOUR DOORSTEP
              !
            </h2>
          </Box>
        </Box>
        <p>
          Aah, the joy of ordering your grocery and receiving it in a short span
          of time! Having a house party and short of ingredients or just can’t
          step out of your house while being on a time crunch? Well not to worry
          you can head on to Nature’s Basket app or website and get your grocery
          wish list delivered at your doorstep. We at Nature’s Basket have
          brought to you fresh and fast delivery in just 60 minutes! Isn’t that
          great? Read on below to know the details about our delivery service.
        </p>
        <p>
          Nature’s Basket does not guarantee the functions contained in the site
          will be uninterrupted or error-free, that this site or its server will
          be free of viruses or other harmful components, or defects will be
          corrected even if Nature’s Basket is aware of them.
        </p>
        <span>
          <strong>1. What is Fresh and Fast Delivery?</strong>
        </span>
        <p>
          Fresh and Fast Delivery is our service to deliver your order to you
          within 60 minutes of placing the order.
        </p>

        <span>2. What are the Operational hours?</span>
        <p>
          Fresh and Fast Delivery is available for ordering until 6pm during the
          day. Deliveries Commence from 11AM daily till 7PM. From 10AM onwards,
          orders will be delivered within 60mins of placing the order.
        </p>
        <span>3. What can I order in Fresh and Fast Delivery?</span>
        <p>
          We have included products which our customers need regularly as part
          of our Fresh and Fast Delivery Catalogue. This will cover most of your
          day to day requirements. You will also see an icon on the product that
          are eligible for Fresh and Fast delivery.
        </p>
        <span>4. Where do the products come from?</span>
        <p>
          All orders are processed from the nearest Nature’s Basket store and
          hence products with the same consistency and quality that you cherish
          will be delivered to you.
        </p>
        <span>
          5. Is Fresh and Fast Delivery available throughout the city?
        </span>
        <p>
          Fresh and Fast Delivery Orders can only be placed by customers
          residing in specific areas where we have launched this service. If
          your area is serviceable, you see Fresh and fast tab on the website
          homepage. Currently we are servicing Worli, Powai & Bandra in Mumbai
          and Sadashivanagar in Bangaloer. You can experience the joy of fresh
          and fast delivery from 11:00 am to 7:00 pm.
        </p>
        <span>6. Are there any charges to avail this service?</span>
        <p>We will be charging the customer same as normal delivery Rs 50.</p>
        <p>
          From your shopping cart to your doorstep super quick. Nature’s Basket
          has a variety of cuisines from around the world. We add new and
          wonderful flavours to our shelves every day, to equip you for a
          comprehensive cooking experience, whether you are making Mexican,
          Thai, Italian, French, or Japanese and to wash it all down, we carry
          wines from the finest vineyards as well as beers to satisfy both the
          curious and the connoisseur.
        </p>
        <p>
          We also have cold cuts, exotic spices, ingredients for your vegan food
          and different kinds of pasta or your daily grocery essentials, we have
          got your every need covered with Nature’s Basket.
          <br />
          You’ll be delighted to discover new ingredients to set your dishes
          apart. With a veritable treasure trove of the world’s best gourmet
          products, we understand that navigating our stores and choosing what
          to buy can be quite exhausting. So we are proud to have our online
          delivery service working in full force to make sure you get your
          groceries on time without any hassle.
        </p>
        <p>
          So do check in regularly for delicious updates from us on new
          offerings, tips on recipes and ideas for using the finest of exotic
          ingredients from around the world in fabulous new ways! Bon Appétit!
          What are you waiting for? Buy your groceries from Nature’s Basket
          today and receive it within 60 minutes!
        </p>

        <Box>
          <button onClick={() => history.goBack()} className={styles.last}>
            {" "}
            ❮❮ Shop Now{" "}
          </button>
        </Box>
      </Container>
    </>
  );
}
export default FreshFast;
