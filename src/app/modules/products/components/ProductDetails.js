import React, { Component } from "react";
import { bindActionCreators } from "redux";
import {createStructuredSelector} from "reselect";
import { connect } from "react-redux";
import { Tabs, Spin } from "antd";

import { productsGetRequest, productSaveCustomFields } from "../actions";
import { payment_cycles, interval_units, PRODUCT_TYPES } from "../constants";

import ProductGraphics from "./ProductGraphics";

import CourseCustomFields from "./CourseCustomFields";
import SubscriptionCustomFields from "./SubscriptionCustomFields";
import EventCustomFields from "./EventCustomFields";
import CustomFields from "./CustomFields";
import SampleCustomFields from "./SampleCustomFields";


const TabPane = Tabs.TabPane;

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.paymentCycles = Object.keys(payment_cycles).map(key => ({
      value: payment_cycles[key].id,
      label: payment_cycles[key].label,
    }));
    this.intervalUnits = Object.keys(interval_units).map(key => ({
      value: interval_units[key].id,
      label: interval_units[key].label,
    }));

    this.state = {
      loadingProduct: true,
    };
  }

  componentWillMount() {
    this.getProductDetails();
  }

  getProductDetails = () => {
    const { productId } = this.props;
    this.props.productsGetRequest({
      id: productId,
      onSuccess: result => {
        this.setState({
          loadingProduct: false,
          product: Object.assign({}, result),
        });
      },
    });
  };

  handleTabChange = e => {
    this.setState({ activeKey: e });
  };



  render() {
    const {loadingProduct, product } = this.state;
    const { productSaveCustomFields } = this.props;
    return (
      <div>
        <Spin spinning={loadingProduct}>
          <Tabs
            onChange={this.handleTabChange}
          >
            <TabPane tab="Information" key="additional">
              {
                {
                  [PRODUCT_TYPES.Course]:  <CourseCustomFields
                    productSaveCustomFields={productSaveCustomFields}
                    product={product}
                  />,
                  [PRODUCT_TYPES.Event]:  <EventCustomFields
                    productSaveCustomFields={productSaveCustomFields}
                    product={product}
                  />,
                  [PRODUCT_TYPES.Subscription]:  <SubscriptionCustomFields
                    productSaveCustomFields={productSaveCustomFields}
                    product={product}
                  />,
                }[product && product.type]
              }

            </TabPane>
            <TabPane tab="Custom Fields" key="custom-fields">
              <CustomFields
                product={product}
                productSaveCustomFields={productSaveCustomFields}
              />
            </TabPane>
            <TabPane tab="Graphics" key="graphics">
              <ProductGraphics
                product={product}
                productSaveCustomFields={productSaveCustomFields}
              />
            </TabPane>
            <TabPane tab="Sample Custom Fields" key="sample-custom-fields">
              <SampleCustomFields
                product={product}
                productSaveCustomFields={productSaveCustomFields}
              />
            </TabPane>
          </Tabs>
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      productsGetRequest,
      productSaveCustomFields,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetails);
