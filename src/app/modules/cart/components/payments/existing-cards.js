import React, {Component} from "react";
import {message, Row, Col, Icon, Button} from "antd";
import _ from "lodash";
import Flux from "@resources/images/icons/product/funnelflux.svg";
import Training from "@resources/images/icons/product/istacktraining.svg";
import STM from "@resources/images/icons/product/stm.svg";
import AWA from "@resources/images/icons/product/stm.svg";
import {DefaultPaymentWrapper} from "../../styles";
import config from "@config";

class ExistingCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zoho: {},
      selectedCard: "",
    };
  }

  componentWillMount() {
    const {user} = this.props;
    if (
      user &&
      user.customer &&
      user.customer.cards
    ) {
      const filtered = this.filterCards(user.customer.cards);
      if (filtered.length) {
        this.handleSelectCard(filtered[0]);
      }
    }
  }

  handleSelectCard = card => {
    this.setState({
      zoho: {
        card_id: card.card_id,
        last_four_digits: card.last_four_digits,
        expiry_year: card.expiry_year,
        expiry_month: card.expiry_month,
      },
      selectedCard: card.card_id,
    });
  };

  handleSubmit = () => {
    const {zoho} = this.state;

    if (zoho.card_id) {
      this.props.cartConfirmBillingDetails({zoho, paymentType: "zoho", paymentActiveTab: "existing"});
    } else {
      message.info("Please select a Payment Method", 2);
    }
  };

  filterCards = (cards) => {
    const {cartItems} = this.props;
    return _.filter(cards, item => {
      return item.branch_id === cartItems.branch_id;
    });
  };

  getProductIcon = name => {
    switch (name) {
      case config.BRANCHES.STM:
        return STM;
      case config.BRANCHES.FUNNEL_FLUX:
        return Flux;
      case config.BRANCHES.TRAINING:
        return Training;
      case config.BRANCHES.AWC_ASIA:
        return AWA;
      default:
        break;
    }
  };

  render() {
    const {user, handleTabChange} = this.props;
    const cards = _.get(user, "customer.cards", []);
    return (
      <DefaultPaymentWrapper>
        <div className="new-account">
          <div className="payment-methods">
            <Row gutter={20}>
              <h2>Choose Credit Card</h2>
              {this.filterCards(cards).map(card => (
                <Col md={{span: 12}} lg={{span: 12}} style={{margin: "10px 0"}} key={card.card_id}>
                  <div
                    className={`selection-container ${card.card_id === this.state.selectedCard ? "selected" : ""}`}
                    onClick={() => this.handleSelectCard(card)}
                  >
                    <Row className="card-container">
                      {card.card_id === this.state.selectedCard ? (
                        <Icon type="check-circle"/>
                      ) : null}

                      {card.warning && (
                        <div className="error">
                          <Icon type="info-circle-o"/>
                          <span>{card.warning}</span>
                        </div>
                      )}

                      <div className={`${card.card_type} logo`}/>
                      <Col span={16}>
                        <span className="provider">•••• •••• •••• {card.last_four_digits}</span>
                      </Col>
                      <Col span={6} push={2}>
                        <span className="provider">
                          {card.expiry_month} / {String(card.expiry_year).substring(2, 4)}
                        </span>
                      </Col>
                    </Row>
                    <Row className="product">
                      <div className="branches">
                        <div>
                          <span>Used for</span>
                          {_.map(card.branches, (item, index) => {
                            return item.has_product_purchase && (
                              <img
                                src={this.getProductIcon(item._id)}
                                key={index}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </Row>
                  </div>
                </Col>
              ))}
              <Col md={{span: 12}} lg={{span: 12}} style={{margin: "10px 0"}}>
                <div
                  className="selection-container add"
                  onClick={() => handleTabChange("newCard")}
                >
                  <Icon type="plus"/>
                  <h1>Add a new card</h1>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Button type="primary" onClick={() => this.handleSubmit()}>
          Next
        </Button>
      </DefaultPaymentWrapper>
    );
  }
}

export default ExistingCards;
