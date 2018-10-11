import React, { Component } from "react";
import { Button } from "antd";
import { Link } from 'react-router-dom';
import { ProductCard } from "../../../styles";

class LiveStreamProductCard extends Component {
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
            to be told that they are special.
          </p>
          <Link
            to={`/account/product/${product._id}`}

          >
            <Button type="primary">Learn More</Button>
          </Link>
        </div>
      </ProductCard>
    );
  }
}

export default LiveStreamProductCard;
