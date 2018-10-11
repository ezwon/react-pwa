import React, { Component } from "react";
import { Row, Col, Icon, message } from "antd";
import QuickLinks from "../../common/QuickLinks";
import { CourseCard, StyledBundledProductDetails, ProductSideMenu, QuickLinksMobile } from "../../../styles";
import NativeAdsLogo from "@resources/images/logo/nativeads.png";
import config from "@config";
import axios from "axios/index";

import { Link } from 'react-router-dom';

class BundledProductsProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generatingLink: false,
    };
  }

  handleThinkificSSO = () => {
    const { user, product } = this.props;

    // console.log("Product:", product);

    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("access_token");

    this.setState({ generatingLink: true }, () => {
      axios
        .post(config.API_URL + "/thinkific-sso", {
          thinkificAccountId: config.THINKIFIC_ACCOUNT_ID,
          user: {
            email: user.customer.email,
            lastName: user.customer.last_name,
            firstName: user.customer.first_name,
          },
          returnToUrl: product.product_details.custom.course_link,
        })
        .then(res => {
          window.open(res.data.url, "_blank");
          this.setState({ generatingLink: false });
        })
        .catch(error => {
          message.error(error);
        });
    });
  };

  handleProductSideMenu = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { generatingLink } = this.state;
    const { product } = this.props;
    const { product_details } = product;
    const { custom } = product_details;
    // eslint-disable-next-line no-console
    console.log("Course Product Details:", product);
    return (
      <StyledBundledProductDetails>
        <ProductSideMenu className={this.state.open ? "product-side-menu open" : "product-side-menu"}>
          <div className="side-menu-close">
            <Icon onClick={this.handleProductSideMenu} type="right-circle" style={{ fontSize: 29, color: "#6592FA" }} />
          </div>
          <QuickLinksMobile>
            <h3>Quick Links</h3>
            <ul>
              {!generatingLink ? (
                <li>
                  <Icon onClick={this.handleThinkificSSO} type="eye-o" /> View
                  Course
                </li>
              ) : (
                <li>
                  <Icon type="loading" /> Generating Course Link...
                </li>
              )}
              <li>
                <Icon type="file-text" /> View Invoice
              </li>
            </ul>
          </QuickLinksMobile>
        </ProductSideMenu>
        <Row>
          <Col lg={15} md={24}>
            <CourseCard>
              <Row>
                <Col xxl={6} xl={24} className="logo">
                  <Link
                    to="/account/products"

                    className="link-back"
                  >
                    <Icon type="left" theme="outlined" style={{color: "#6592FA", fontSize: "16px"}} />
                  </Link>
                  <span className="product-side-menu-toggle">
                    <Icon onClick={this.handleProductSideMenu} type="setting" style={{ fontSize: 21, color: "#fff" }} />
                  </span>
                  <div className="logo-bg">
                    <img src={NativeAdsLogo} />
                  </div>
                </Col>
                <Col xxl={{ span: 17, offset: 1 }} xl={24} className="details">
                  <h1>{product_details.name}</h1>
                  {/*<p>{custom && custom.course_about}</p>*/}
                  <p>5 weeks of content that teaches you how to research, set up, optimize, and scale native advertising campaigns for lead gen or ecommerce.
                  After this class you’ll be ready to create profitable <br /> <a href="#">Read More</a></p>
                  <span>
                    <span>Tags:</span> Native, Affiliate, Funnel, Tracking, Ad Spying, Testing,
                    Scaling, Automation, Master Class
                  </span>
                </Col>
              </Row>
            </CourseCard>
          </Col>
          <Col lg={{ span: 8, offset: 1 }} md={24}>
            <QuickLinks>
              <ul>
                {!generatingLink ? (
                  <li>
                    <Icon onClick={this.handleThinkificSSO} type="eye-o" /> View
                    Course
                  </li>
                ) : (
                  <li>
                    <Icon type="loading" /> Generating Course Link...
                  </li>
                )}
                <li>
                  <Icon type="file-text" /> View Invoice
                </li>
              </ul>
            </QuickLinks>
          </Col>
        </Row>
      </StyledBundledProductDetails>
    );
  }
}

export default BundledProductsProductDetails;
