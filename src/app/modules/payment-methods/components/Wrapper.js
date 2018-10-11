import React, { Component } from "react";
import { AppCard } from "../styles";

class PaymentMethodWrapper extends Component {
  constructor(props) {
    super(props);
  }  
  render() {
    return (
      <AppCard>
        {this.props.children}
      </AppCard>
    );
  }  
}

export default PaymentMethodWrapper;