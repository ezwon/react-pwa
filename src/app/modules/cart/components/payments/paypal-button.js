import React, {Component} from "react";
import {Button} from "antd";
import {DefaultPaymentWrapper} from "../../styles";

class PayPalButton extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    this.props.cartConfirmBillingDetails({paymentType: "paypal", paymentActiveTab: "paypal"});
  };

  componentDidMount() {
    if (typeof paypal === "undefined") {
      const script = document.createElement("script");

      script.src = "https://www.paypalobjects.com/api/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <DefaultPaymentWrapper>
        <div className="_button-wrapper-text">
          <p>Discuss PayPal Steps and Infos</p>
          <Button type="primary" onClick={() => this.handleSubmit()}>
            Next
          </Button>
        </div>
      </DefaultPaymentWrapper>
    );
  }
}

export default PayPalButton;







