import React from "react";
import _ from "lodash";
import Billings from "../../modules/billings";
import Profile from "../../modules/profile";
import CustomerProducts from "../../modules/customer-products";
import CustomerProductDetails from "../../modules/customer-products/components/CustomerProductDetail";
import CustomerTicketDetail from "../../modules/customer-products/components/CustomerTicketDetail";
import PaymentMethods from "../../modules/payment-methods";

export default props => {
  "use strict";
  switch (_.get(props, "match.params.section", "")) {
    case "dashboard":
    default:
      return (
        <div>
          <h1 className="h2">Dashboard</h1>
        </div>
      );
    case "products":
      return <CustomerProducts/>;
    case "product":
      return <CustomerProductDetails productId={_.get(props, "match.params.subsection", "")}/>;
    case "ticket":
      return <CustomerTicketDetail productId={_.get(props, "match.params.subsection", "")}/>;
    case "profile":
      return <Profile/>;
    case "payment-methods":
      return <PaymentMethods/>;
    case "billing":
      return <Billings/>;
  }
};
