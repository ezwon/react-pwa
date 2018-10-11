import React, {Component} from "react";
import {createStructuredSelector} from "reselect";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {Spin} from "antd";

import {customerTicketDetailGetRequest} from "../actions";
import {makeSelectProducts} from "../selectors";
import {CustomerProductDetailsWrapper} from "../styles";

import { Link } from 'react-router-dom';

import {makeSelectUser} from "@modules/session/selectors";

import EventProductDetails from "./products/event/EventProductDetails";

class CustomerTicketDetail extends Component {
  componentWillMount() {
    const {productId} = this.props;
    this.props.customerTicketDetailGetRequest({product_id: productId});
  }

  render() {
    const {isLoading, productId, customerTicketDetailGetRequest, products} = this.props;

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
            <EventProductDetails
              productId={productId}
              products={products}
              customerTicketDetailGetRequest={customerTicketDetailGetRequest}
            />
          </div>
        </Spin>
      </CustomerProductDetailsWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: state => state.isLoading,
  products: makeSelectProducts,
  user: makeSelectUser,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      customerTicketDetailGetRequest,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CustomerTicketDetail);
