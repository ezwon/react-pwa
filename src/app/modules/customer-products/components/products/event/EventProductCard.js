import React, { Component } from "react";
import { Button, Switch, Row, Col } from "antd";
import { Link } from 'react-router-dom';
import { ProductCard, AutoRenewal } from "../../../styles";

class EventProductCard extends Component {
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
    const defaultImage ="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
    const productImage = product.product_details && product.product_details.custom && product.product_details.custom.thumbnail || defaultImage;
    return (
      <ProductCard>
        <div className="product-image" style={{ backgroundImage: `url(${productImage})`}}/>
        <div className="content">
          <h1>{product.product_details.name}</h1>
          <p>
            People like a “special” price or exclusive offer directed only to
            them. Most Industrial and Manufacturing equipment buyers are seeking
            to be told that they are special.{" "}
          </p>
          <Link
            to={`/account/ticket/${product.product_id}`}

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

export default EventProductCard;
