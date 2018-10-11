import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Spin } from "antd";
import _ from "lodash";

import { customerProductsGetRequest } from "./actions";

import { makeSelectProducts} from "./selectors";

import { ProductsPageWrapper } from "./styles";
import CustomerProductsList from "./components/CustomerProductsList";
import Tabs from "@ant-components/Tabs";

import config from "@config";

class CustomerProducts extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.customerProductsGetRequest({ $limit: 100 });
  }

  getTabs = arr => {
    let tabArray = [];
    _.map(arr, (item, index) => {
      tabArray.push({
        key: index,
        tab: config.BRANCH_NAMES[index],
        content: <CustomerProductsList products={item} />,
      });
    });
    return tabArray;
  };

  render() {
    const { products, isLoading } = this.props;
    const grouped = _.groupBy(products && products.data || [], "branch_details._id");

    return (
      <ProductsPageWrapper>
        <h1>Products</h1>
        <Spin spinning={isLoading}>
          <div style={{ minHeight: 400 }}>
            <Tabs tabs={this.getTabs(grouped)} />
          </div>
        </Spin>
      </ProductsPageWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts,
  isLoading: state => state.isLoading,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      customerProductsGetRequest,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerProducts);
