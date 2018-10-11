import React, {Component} from "react";
import _ from "lodash";
import {Col, Card, Button} from "antd";

class ProductCard extends Component {
  render() {
    const {product, handleCheckout, processing} = this.props;
    const defaultProductDetails = {
      hide_on_shop: true,
      short_title: "Short Title",
      short_description: "Short Description",
      shop_cta_text: "Buy Now",
      shop_card_size_lg: 8,
      shop_card_size_md: 12,
      shop_card_size_xs: 24,
      thumbnail_shop: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
      // TODO: Ask Janine to provide default iStack Network product thumbnail
    };

    let cardDetails = _.get(product, "custom_fields.info", defaultProductDetails);
    cardDetails = Object.assign({}, defaultProductDetails, cardDetails);

    return (
      <Col
        xs={cardDetails.shop_card_size_xs}
        md={cardDetails.shop_card_size_md}
        lg={cardDetails.shop_card_size_lg}
      >
        <Card>
          <div className="card-wrapper">
            <img src={cardDetails.thumbnail_shop} role='presentation' />
            <h2>{cardDetails.short_title}</h2>
            <h3>{cardDetails.short_description}</h3>
            <span className="price">
              {product.currency_symbol} {product.price}
            </span>
            <span className="payment-cycle">Monthly Payment* TEST</span>
            <Button
              type="primary"
              onClick={() => handleCheckout(product)}
              disabled={processing}
            >
              {cardDetails.shop_cta_text}
            </Button>
          </div>

        </Card>
      </Col>
    );
  }
}

export default ProductCard;
