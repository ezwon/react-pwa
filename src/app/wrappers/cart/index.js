import React, { Component } from "react";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;

import { WrapperOffWhite, CartHeader } from "./styles";
import iStackNetworkLogoLong from "@resources/images/logo/iStackNetwork.png";
import iStackNetworkHeaderImg from "@resources/images/graphics/headervector.png";
import iStackNetworkHeaderImgRev from "@resources/images/graphics/headervector-reversed.png";


import Cart from "@modules/cart";

export default class CartPage extends Component {
  render() {
    return (
      <WrapperOffWhite>
        <CartHeader>
          <Row  type="flex" justify="center" align="middle">
            <Col sm={24} md={24} lg={24}>
              <div className="styled-div_cart-wrapper_logo-wrapper">
                <img src={iStackNetworkLogoLong} />
              </div>
            </Col>
          </Row>
          <img className="styled-img_header-graphic _default" src={iStackNetworkHeaderImg} role='presentation' />
          <img className="styled-img_header-graphic _reversed" src={iStackNetworkHeaderImgRev} role='presentation' />
        </CartHeader>
        <Content>
          <Cart />
        </Content>
      </WrapperOffWhite>
    );
  }
}
