import React, {Component} from "react";
import {Row, Col, Icon, Popconfirm, Tag} from "antd";
import {CardCol, CreditCard} from "../styles";
import _ from "lodash";

import NewCard from "./NewCard";

import Flux from "@resources/images/icons/product/funnelflux.svg";
import Training from "@resources/images/icons/product/istacktraining.svg";
import STM from "@resources/images/icons/product/stm.svg";
import AWA from "@resources/images/icons/product/stm.svg";
import config from "@config";



class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "default",
    };
  }

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

  handleCancelAdd = () => {
    this.setState({view: "default"});
  };

  handleSuccess = () => {
    this.setState({view: "default"});
  };

  render() {
    const {
      product, cards,
      handleDeleteCard,
      handleSetDefault,
      handleProductReplaceCard,
      handleProductDeleteCard,
    } = this.props;

    return (
      <div>
        {{
          "default":
            <Row justify="start" gutter={16} className="credit-cards">
              <h1>Payment Methods</h1>
              {_.map(cards, card => {
                const productCardLinkId = _.get(product, "card_details.link_id", "");
                card.current = productCardLinkId === card.link_id;

                const isSelected = product ? card.current: card.is_default;


                return (
                  <CardCol md={24} xl={12} xxl={8} key={card.link_id}>
                    <CreditCard
                      className={isSelected ? "selected":""}
                      >
                      <Row className="credit-card-section">
                      {isSelected ? (
                        <span className="current"><Icon type="check-circle" /></span>
                      ) : null}

                        {card.warning && (
                          <div className="error">
                            <Icon type="info-circle-o"/>
                            <span>{card.warning}</span>
                          </div>
                        )}
                        <Col span={24} className="card-head">
                          <div className={`${card.card_type} logo`}/>
                          <div className="exp-note"><Icon type="exclamation-circle" theme="outlined" /> About to expire</div>
                        </Col>
                        <div className="actions">
                          {product ? (
                            <div>
                              {card.current ?
                                <div>
                                  <span onClick={() => handleProductDeleteCard(card.link_id)}>Remove Link</span><br />
                                </div>
                                :
                                <div>
                                  <span onClick={() => handleProductReplaceCard(card.link_id)}>Assign</span>
                                </div>
                              }
                            </div>
                          ) : (
                            <div>
                              <Popconfirm
                                title="Are you sure you want to delete this card?"
                                onConfirm={() => handleDeleteCard(card.link_id)}
                              >

                                <Icon type="delete" theme="outlined" />
                              </Popconfirm>
                              {/*{!card.is_default &&
                                <span onClick={() => handleSetDefault(card.link_id)}>Set Default</span>
                              }*/}
                            </div>
                          )}
                        </div>
                        <Col span={17}>
                          <span className="provider">•••• •••• •••• {card.last_four_digits}</span>
                        </Col>
                        <Col span={7}>
                          <span className="provider exp">
                            {card.expiry_month} / {card.expiry_year}
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
                    </CreditCard>
                  </CardCol>
                );
              })}
              <CardCol md={24} lg={12} xxl={8}>
                <div
                  className="add-new"
                  onClick={() => {
                    this.setState({view: "add-card"});
                  }}
                >
                  <div>
                    <Icon type="plus"/>
                    <span>Add New</span>
                  </div>
                </div>
              </CardCol>
            </Row>,
          "add-card":
            <Row className="add-credit-card">
              <NewCard
                product={product}
                handleSuccess={this.handleSuccess}
                handleCancel={this.handleCancelAdd}
              />
            </Row>
        }[this.state.view]}
      </div>
    );
  }
}

export default CardList;
