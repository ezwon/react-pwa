import React, { Component } from "react";
import { Row, Col, Icon, message } from "antd";
import QuickLinks from "../../common/QuickLinks";
import { CourseCard } from "../../../styles";
import NativeAdsLogo from "@resources/images/logo/nativeads.png";
import config from "@config";
import axios from "axios/index";

class CourseProductDetails extends Component {
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

  render() {
    const { generatingLink } = this.state;
    const { product } = this.props;
    const { product_details } = product;
    const { custom } = product_details;
    // eslint-disable-next-line no-console
    console.log("Course Product Details:", product);
    return (
      <Row>
        <Col lg={15} md={24}>
          <CourseCard>
            <Row>
              <Col xxl={6} xl={24} className="logo">
                <div className="logo-bg">
                  <img src={NativeAdsLogo} />
                </div>
              </Col>
              <Col xxl={{ span: 17, offset: 1 }} xl={24} className="details">
                <h1>{product_details.name}</h1>
                <p>{custom && custom.course_about}</p>

                <span>
                  Tags: Native, Affiliate, Funnel, Tracking, Ad Spying, Testing,
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
    );
  }
}

export default CourseProductDetails;
