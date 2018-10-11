import React, {Component} from "react";
import {createStructuredSelector} from "reselect";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Spin} from "antd";

import {PRODUCT_TYPES} from "../constants";
import {customerProductDetailGetRequest} from "../actions";
import {makeSelectProductDetails} from "../selectors";

import {CustomerProductDetailsWrapper} from "../styles";

import { Link } from 'react-router-dom';

import {makeSelectUser} from "@modules/session/selectors";

import CourseProductDetails from "./products/course/CourseProductDetails";
import BundledCoursesProductDetails from "./products/bundled-courses/BundledCoursesProductDetails";
import BundledProductsProductDetails from "./products/bundled-products/BundledProductsProductDetails";
import SubscriptionProductDetails from "./products/subscription/SubscriptionProductDetails";
import LiveStreamProductDetails from "./products/live-stream/LiveStreamProductDetails";

class CustomerProductDetail extends Component {
  componentWillMount() {
    const {productId} = this.props;
    this.props.customerProductDetailGetRequest({id: productId});
  }

  render() {
    const {isLoading, details, user} = this.props;
    return (
      <CustomerProductDetailsWrapper>
        <Spin spinning={isLoading}>
          <Link
            to="/account/products"

            className="link-back"
          >
            Back to My Products
          </Link>
          <div style={{minHeight: 400}}>
            {
              {
                [PRODUCT_TYPES.Course]: (
                  <CourseProductDetails product={details} user={user}/>
                ),
                [PRODUCT_TYPES.BundledProducts]: (
                  <BundledProductsProductDetails product={details} user={user}/>
                ),
                [PRODUCT_TYPES.BundledCourses]: (
                  <BundledCoursesProductDetails product={details} user={user}/>
                ),
                [PRODUCT_TYPES.Subscription]: (
                  <SubscriptionProductDetails product={details}/>
                ),
                [PRODUCT_TYPES.LiveStream]: (
                  <LiveStreamProductDetails product={details}/>
                ),
              }[details.product_details && details.product_details.type]
            }
          </div>
        </Spin>
      </CustomerProductDetailsWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: state => state.isLoading,
  details: makeSelectProductDetails,
  user: makeSelectUser,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      customerProductDetailGetRequest,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerProductDetail);
