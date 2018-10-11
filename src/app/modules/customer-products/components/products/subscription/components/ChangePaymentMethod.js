import React, {Component} from "react";
import {message, Modal, Row, Col, Icon} from "antd";
import Cards from "@modules/payment-methods/components/Cards";

import {ProductLogoMobile, StyledChangePaymentMethod} from "../../../../styles";

import { Link } from 'react-router-dom';

const confirm = Modal.confirm;

class ChangePaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  handleRefresh = () => {
    this.props.paymentGetList({});
    this.props.customerProductDetailGetRequest({id: this.props.product._id});
  };

  handleProductReplaceCard = id => {
    this.props.paymentProductReplaceCard({
      product_id: this.props.product._id,
      data: {link_id: id},
      onSuccess: () => {
        message.success("Card successfully set as default for this product");
        this.handleRefresh();
      },
    });
  };

  handleProductDeleteCard = id => {
    confirm({
      title: "Confirm removing of link?",
      content: "Text here explaining what will happen when card is un-linked to product",
      onOk: ()=> {
        this.props.paymentProductDeleteCard({
          product_id: this.props.product._id,
          data: {link_id: id},
          onSuccess: () => {
            message.success("Card successfully deleted for this product");
            this.handleRefresh();
          },
        });
      },
      onCancel() {
      },
    });
  };

  render() {
    const {creditCards, product, toggleSideMobileMenu} = this.props;
    return (
      <StyledChangePaymentMethod>
        <Row type="flex">
          <Col xs={24}>
            <ProductLogoMobile>
              <div className="logo-wrapper">
                <Link
                  to="/account/products"

                  className="link-back"
                >
                  <Icon type="left" theme="outlined" style={{color: "#6592FA", fontSize: "16px"}} />
                </Link>
                <span className="product-side-menu-toggle">
                  <Icon onClick={()=>{toggleSideMobileMenu();}} type="setting" style={{ fontSize: 21, color: "#fff" }} />
                </span>
              </div>
            </ProductLogoMobile>
          </Col>
          <Col xs={24} className="details">
            <Cards
              loading={false}
              product={product}
              cards={creditCards}
              handleProductReplaceCard={this.handleProductReplaceCard}
              handleProductDeleteCard={this.handleProductDeleteCard}
            />
          </Col>
        </Row>
      </StyledChangePaymentMethod>
    );
  }
}

export default ChangePaymentMethod;
