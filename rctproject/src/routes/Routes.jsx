import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesPage from "./../components/CategoriesPageMain/categoriesPage/CategoriesPage";
import Dashboard from "./../components/dashboard/Dashboard";
import FreshFast from "../components/dashboard/TopNavBar/FreshFast/FreshFast";
import Cart from "../components/cartPage/Cart";
import Checkout from "../components/checkout/Checkout";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import Store from "./../components/storeLocator/Store";
import Razorpay from "./../components/payments/Razorpay";
// import SearchCategory from "../components/CategoriesPageMain/searchCategory/CategoryPage";
import PastPurchases from "../components/dashboard/PastPurchases";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Dashboard />} />
      <Route
        path="/home/:category/:sub_category"
        render={() => <CategoriesPage />}
      />
      <Route path="/product/:id" render={() => <SingleProduct />} />
      <Route path="/home/:categories" render={() => <CategoriesPage />} />
      <Route path="/freshFast" render={() => <FreshFast />} />
      <Route path="/store-locator" render={() => <Store />} />
      {/* <Route path="/search-page" render={() => <SearchCategory />} /> */}
      <Route path="/cart" render={(props) => <Cart {...props} />} />
      <Route path="/checkout" render={() => <Checkout />} />
      <Route path="/payments" render={() => <Razorpay />} />
      <Route path="/past-purchases" render={() => <PastPurchases />} />
      <Route path="/brand/:name" render={() => <CategoriesPage />} />
    </Switch>
  );
};

export default Routes;
