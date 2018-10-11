import React, { Component } from "react";
import { Banner, FunctionButton } from "../../styles";
import Vector from "@resources/images/bannervector.png";

class ShopBanner extends Component {
  render() {
    return (
      <Banner>
        <div className="content">
          <h1>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </h1>
          <h3>
            Aenean pharetra, augue nec posuere sodales,<br /> urna dui
            consectetur nunc, non vestibulum eros ante at purus
          </h3>
          <FunctionButton type="primary">Learn More</FunctionButton>
        </div>
        <img src={Vector} className="styled-img_home-banner-asset" />
      </Banner>
    );
  }
}

export default ShopBanner;
