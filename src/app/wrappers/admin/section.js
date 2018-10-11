import React from "react";
import _ from "lodash";

import Dashboard from "@modules/dashboard";
import DiscountsModule from "@modules/discounts";
import Customers from "@modules/customers";
import CustomerDetail from "@modules/customers/component/CustomerDetail";
import Products from "@modules/products";
import ProductDetails from "@modules/products/components/ProductDetails";
import Profile from "@modules/profile";

export default props => {
  "use strict";

  switch (_.get(props, "match.params.section", "")) {
    case "dashboard":
    default:
      return <Dashboard />;
    case "customers":
      return <Customers />;
    case "customer":
      return  <CustomerDetail customerId={_.get(props, "match.params.subsection", "")}/>;
    case "products":
      return <Products />;
    case "product":
      return  <ProductDetails productId={_.get(props, "match.params.subsection", "")}/>;
    case "profile":
      return <Profile />;
    case "discounts":
      return <DiscountsModule />;
  }
};
