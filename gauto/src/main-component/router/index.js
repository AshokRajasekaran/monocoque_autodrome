import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import ServicePage from "../ServicePage";
import ServiceSingle from "../ServiceDetails";
import CarListingPage from "../CarListingPage";
import CarBookingPage from "../CarBookingPage";
import GalleryPage from "../GalleryPage";
import ProductPage from "../ProductPage";
import ProductSinglePage from "../ProductSingle";
import CartPage from "../CartPage";
import Checkout from "../Checkout";
import BlogPage from "../BlogPage";
import BlogSinglePage from "../BlogSinglePage";
import ErrorPage from "../ErrorPage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import ContactPage from "../ContactPage";

const AllRoute = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/service" component={ServicePage} />
          <Route path="/service-single" component={ServiceSingle} />
          <Route path="/car-listing" component={CarListingPage} />
          <Route path="/car-booking" component={CarBookingPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/product-single" component={ProductSinglePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/blog-single" component={BlogSinglePage} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default AllRoute;
