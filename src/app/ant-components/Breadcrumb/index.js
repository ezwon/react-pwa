import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Breadcrumb } from "antd";
import styled from "styled-components";

const Crumb = styled(Breadcrumb)`
  padding: 20px 50px 0 !important;
  font-size: 15px !important;
  text-align: right;
  span {
    color: #95a6c1;
    font-size: 15px;
    margin: 0 2px;
  }
`;

const routes = {
  "/admin": "Admin",
  "/admin/dashboard": "Dashboard",
  "/admin/products": "Products",
  "/admin/discounts": "Discount",
  "/admin/customers": "Customers",
  "/admin/profile": "Profile",

  "/account": "My Account",
  "/account/dashboard": "Dashboard",
  "/account/products": "Products",
  "/account/product": "Product",
  "/account/billing": "Billing",
  "/account/customers": "Customers",
  "/account/profile": "Profile",
  "/account/payment-methods": "Payment Methods",
  "/account/payment-methods/add": "Add",
  "/account/payment-methods/edit": "Edit",
};

const findRouteName = url => {
  var editItem = url.substring(url.lastIndexOf("/") + 1, url.length);
  if (/^\d+$/.test(editItem)) {
    return "#" + editItem;
  } else {
    return routes[url];
  }
};

const getPaths = pathname => {
  const paths = ["/"];
  if (pathname === "/") return paths;

  pathname.split("/").reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });

  return paths;
};

const BreadcrumbsItem = ({ match }) => {
  const routeName = findRouteName(match.url);
  if (routeName) {
    return match.isExact ? (
      <Breadcrumb.Item active="true">{routeName}</Breadcrumb.Item>
    ) : (
      <Breadcrumb.Item>
        {/* <Link to={match.url || ''}> */}
        {routeName}
        {/* </Link> */}
      </Breadcrumb.Item>
    );
  }
  return null;
};

const Breadcrumbs = ({ location: { pathname } }) => {
  const paths = getPaths(pathname);
  return (
    <Crumb separator=">">
      {paths.map(p => <Route path={p} component={BreadcrumbsItem} key={p} />)}
    </Crumb>
  );
};

class BreadcrumbsInstance extends Component {
  render() {
    return (
      <div>
        <Route path="/:path" component={Breadcrumbs} {...this.props} />
      </div>
    );
  }
}

export default BreadcrumbsInstance;
