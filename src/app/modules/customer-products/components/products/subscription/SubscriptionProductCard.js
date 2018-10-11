import React, { Component } from "react";
import _ from "lodash";
import { Button, Switch, Row, Col } from "antd";

import { Link } from 'react-router-dom';
import { ProductCard, AutoRenewal } from "../../../styles";

class SubscriptionProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }
  handleSwitch = () => {
    this.setState({ checked: !this.state.checked });
  };
  render() {
    const { product } = this.props;
    console.log("product:",product);
    const details = _.get(product,"product_details.custom_fields.info", {
      short_title: "Short Title",
      short_description: "Short Description",
      thumbnail_my_products: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    });
    return (
      <ProductCard>
        <div className="product-image" style={{ backgroundImage: `url(${details.thumbnail_my_products})`}}/>
        <div className="content">
          <h1>{details.short_title.name}</h1>
          <p>
            {details.short_description}
          </p>
          <Link
            to={`/account/product/${product._id}`}

          >
            <Button type="primary">Learn More</Button>
          </Link>
          <AutoRenewal>
            Auto Renewal is <span className={this.state.checked? "checked" : "" }>{this.state.checked? "Enabled" : "Disabled"}</span>
            <div className="switch-wrapper">
              <Switch onClick={this.handleSwitch} />
            </div>
          </AutoRenewal>
        </div>
        <div className="footer">
          <Row>
            <Col xs={12}>Renews on 10/22</Col>
            <Col xs={12} style={{textAlign: "right"}}><a href="#">Renew Now</a></Col>
          </Row>
        </div>
      </ProductCard>
    );
  }
}

export default SubscriptionProductCard;
