import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import {Row, message, Spin} from "antd";
import {shopProductsFindRequest, shopAddToCart} from "./actions";
import {ProductContainer} from "./styles";
import {makeProductsList, filteredProducts} from "./selectors";

import config from "@config";

import ProductCard from "./components/ProductCard";
import ShopBannerAll from "./components/Banners/All";
import ShopBannerSpecific from "./components/Banners/Specific";

const queryString = require("query-string");

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      processing: false,
    };
  }

  // Life cycle
  componentDidMount() {
    const {branch_id} = this.props;
    this.props.shopProductsFindRequest({
      branch_id,
      onSuccess: () => {
        this.setState({loading: false});
      },
    });

    const qs = queryString.parse(this.props.history.location.search);

    if (qs["discount"]) {
      localStorage.setItem("discountCode", qs["discount"]);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.branch_id !== nextProps.branch_id) {
      this.setState({loading: true});
      this.props.shopProductsFindRequest({
        branch_id: nextProps.branch_id,
        onSuccess: () => {
          this.setState({loading: false});
        },
      });
    }
  }

  // Handlers
  handleCheckout = product => {
    this.setState({processing: true});
    message.loading("Processing Checkout...", 1, () => {
      this.setState({processing: false});
      product.max_order = 5;
      product.min_order = 1;
      product.quantity = 1;
      product.products = [
        {
          id: "product-1",
          name: "Product 1",
          quantity: 1,
          price: 100,
        },
        {
          id: "product-2",
          name: "Product 2",
          quantity: 1,
          price: 200,
        },
        {
          id: "product-3",
          name: "Product 3",
          quantity: 1,
          price: 300,
        }
      ];
      product.up_sell = [
        {
          _id: "product-1",
          name: "Product 1",
          description: "Description 1",
          quantity: 0,
          max_order: 5,
          min_order: 0,
          currency_symbol: "$",
          price: 100,
        },
        {
          _id: "product-2",
          name: "Product 2",
          description: "Description 2",
          quantity: 0,
          max_order: 1,
          currency_symbol: "$",
          price: 200,
        }
      ];
      this.props.shopAddToCart(product);
      this.props.history.push("/cart");
    });
  };

  // Renderers
  renderBanner = () => {
    const {branch_id} = this.props;
    switch (branch_id) {
      case config.BRANCHES.FUNNEL_FLUX:
      case config.BRANCHES.TRAINING:
      case config.BRANCHES.STM:
      case config.BRANCHES.AWC_ASIA:
        return <ShopBannerSpecific branch_id={branch_id}/>;
      default:
        return <ShopBannerAll/>;
    }
  };

  render() {
    const {title, filteredProducts} = this.props;
    const {loading, processing} = this.state;
    return (
      <div>
        {this.renderBanner()}
        <ProductContainer>
          <h1>{title}</h1>
          <Spin spinning={loading}>
            <Row>
              {filteredProducts.length ? (
                filteredProducts.map(product => {
                  if(Object.keys(product.custom_fields).length > 0 &&
                     product.custom_fields.info &&
                     !product.custom_fields.info.hide_on_shop){
                    return (
                      <ProductCard
                        key={product._id}
                        product={product}
                        handleCheckout={this.handleCheckout}
                        processing={processing}
                      />
                    );
                  }
                })
              ) : (
                <h2>
                  {loading
                    ? "Getting List of Products"
                    : "No Available Products"}
                </h2>
              )}
            </Row>
          </Spin>
        </ProductContainer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    productsList: makeProductsList(state),
    filteredProducts: filteredProducts(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      shopProductsFindRequest,
      shopAddToCart,
    },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shop));
