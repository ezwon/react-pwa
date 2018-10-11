import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { message } from "antd";
import Cards from "./components/Cards";
import AppCard from "./components/Wrapper";
import { paymentGetList, paymentSetDefault, paymentDeleteCard } from "./actions";
import { cardList } from "./selectors";

class PaymentMethods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount = () => {
    this.getPaymentList();
  };

  getPaymentList = () => {
    this.setState({ loading: true });
    this.props.paymentGetList({
      onSuccess: () => {
        this.setState({ loading: false });
      },
    });
  };

  handleDeleteCard = id => {
    this.props.paymenDeleteCard({
      data: { link_id: id, force: false },
      onSuccess: () => {
        message.success("Card successfully removed");
        this.getPaymentList();
      },
    });
  };

  handleSetDefault = id => {
    this.props.paymentSetDefault({
      data: { link_id: id },
      onSuccess: () => {
        message.success("Card successfully set as default");
        this.getPaymentList();
      },
    });
  };

  render() {
    const {cards } = this.props;

    const { loading } = this.state;

    return (
      <AppCard>
        <Cards
          loading={loading}
          cards={cards}
          handleDeleteCard={this.handleDeleteCard}
          handleSetDefault={this.handleSetDefault}
        />
      </AppCard>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cards: cardList,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      paymentGetList,
      paymentSetDefault,
      paymentDeleteCard,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaymentMethods);
