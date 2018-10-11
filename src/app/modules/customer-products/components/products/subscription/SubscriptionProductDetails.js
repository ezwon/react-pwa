import React, {Component} from "react";
import {Row, Col, Icon} from "antd";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createStructuredSelector} from "reselect";

import {
  customerProductChurnMessageRequest,
  customerProductDeactivateSubscriptionRequest,
  customerProductModifySubscriptionRequest,
  customerProductReactivateSubscriptionRequest,
  customerProductDetailGetRequest,
} from "../../../actions";

import ProductInvoice from "../../common/ProductInvoice";

import {makeSelectChurnMessages} from "../../../selectors";

import {
  paymentGetList,
  paymentProductCreateNewCard,
  paymentProductReplaceCard,
  paymentProductDeleteCard,
} from "../../../../payment-methods/actions";

import {
  shopProductsFindRequest,
} from "../../../../shop/actions";

import {cardList} from "../../../../payment-methods/selectors";


import QuickLinks from "../../common/QuickLinks";
import SubscriptionLinks from "./components";

import {ProductSideMenu,QuickLinksMobile} from "../../../styles";

const {SubscriptionDetails, ReactivateSubscription, ModifyPlan, CancelSubscription, ChangePaymentMethod} = SubscriptionLinks;

const SUBSCRIPTION_PRODUCT_VIEW = {
  DETAILS: "DETAILS",
  VIEW_INVOICE: "VIEW_INVOICE",
  CHANGE_PAYMENT_METHOD: "CHANGE_PAYMENT_METHOD",
  CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION",
  REACTIVATE_SUBSCRIPTION: "REACTIVATE_SUBSCRIPTION",
  MODIFY_PLAN: "MODIFY_PLAN",
};


class SubscriptionProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMobileSideMenu: false,
      product_id: "",
      isActive: true,
      currentView: SUBSCRIPTION_PRODUCT_VIEW.DETAILS,
    };
  }

  componentDidMount = () => {
    const {branch_id} = this.props.product;
    // this.props.customerProductChurnMessageRequest({branch_id});
    this.props.paymentGetList({});
  };

  toggleSideMobileMenu = () => {
    this.setState({ openMobileSideMenu: !this.state.openMobileSideMenu });
  };

  handleViewChange = e => {
    let key = "";

    if (e && e.currentTarget) {
      e.preventDefault();
      key = e.currentTarget.dataset.view;
    } else {
      key = SUBSCRIPTION_PRODUCT_VIEW.DETAILS;
    }

    this.setState({currentView: key});
  };

  render() {
    const {isActive, currentView} = this.state;
    const {
      product, churnMessages, creditCards,
      paymentGetList,
      paymentProductCreateNewCard,
      paymentProductReplaceCard,
      paymentProductDeleteCard,
      customerProductDetailGetRequest,
      shopProductsFindRequest
    } = this.props;
    return (
      <Row>
        <ProductSideMenu className={this.state.openMobileSideMenu ? "product-side-menu open" : "product-side-menu"}>
          <div className="side-menu-close">
            <Icon onClick={this.toggleSideMobileMenu} type="right-circle" style={{ fontSize: 29, color: "#6592FA" }} />
          </div>
          <QuickLinksMobile>
            {isActive ? (
              <ul>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.DETAILS}
                  onClick={this.handleViewChange}
                >
                  <Icon type="info"/> Details
                </li>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.MODIFY_PLAN}
                  onClick={this.handleViewChange}
                >
                  <Icon type="setting"/> Change Plan
                </li>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.CHANGE_PAYMENT_METHOD}
                  onClick={this.handleViewChange}>
                  <Icon type="edit"/> Change Payment Method
                </li>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.VIEW_INVOICE}
                  onClick={this.handleViewChange}>
                  <Icon type="file-text"/> View Invoices
                </li>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.CANCEL_SUBSCRIPTION}
                  onClick={this.handleViewChange}>
                  <Icon type="close"/> Cancel Subscription
                </li>
              </ul>
            ) : (
              <ul>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.VIEW_INVOICE}
                  onClick={this.handleViewChange}>
                  <Icon type="file-text"/> View Invoices
                </li>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.REACTIVATE_SUBSCRIPTION}
                  onClick={this.handleViewChange}>
                  <Icon type="file-text"/> Reactivate Subscription
                </li>
              </ul>
            )}
          </QuickLinksMobile>
        </ProductSideMenu>
        <Col lg={15} md={24}>
          {
            {
              [SUBSCRIPTION_PRODUCT_VIEW.DETAILS]:
                <SubscriptionDetails
                  toggleSideMobileMenu={this.toggleSideMobileMenu}
                  product={product}/>,
              [SUBSCRIPTION_PRODUCT_VIEW.MODIFY_PLAN]:
                <ModifyPlan
                  shopProductsFindRequest={shopProductsFindRequest}
                  toggleSideMobileMenu={this.toggleSideMobileMenu}
                  product={product}
                />,
              [SUBSCRIPTION_PRODUCT_VIEW.CHANGE_PAYMENT_METHOD]:
                <ChangePaymentMethod
                  customerProductDetailGetRequest={customerProductDetailGetRequest}
                  paymentGetList={paymentGetList}
                  paymentProductCreateNewCard={paymentProductCreateNewCard}
                  paymentProductReplaceCard={paymentProductReplaceCard}
                  paymentProductDeleteCard={paymentProductDeleteCard}
                  creditCards={creditCards}
                  toggleSideMobileMenu={this.toggleSideMobileMenu}
                  product={product}/>,
              [SUBSCRIPTION_PRODUCT_VIEW.CANCEL_SUBSCRIPTION]:
                <CancelSubscription
                  customerProductDeactivateSubscriptionRequest={customerProductDeactivateSubscriptionRequest}
                  churnMessages={churnMessages}
                  toggleSideMobileMenu={this.toggleSideMobileMenu}
                  product={product}
                />,
              [SUBSCRIPTION_PRODUCT_VIEW.REACTIVATE_SUBSCRIPTION]:
                <ReactivateSubscription 
                toggleSideMobileMenu={this.toggleSideMobileMenu}
                product={product}/>,
              [SUBSCRIPTION_PRODUCT_VIEW.VIEW_INVOICE]:
                <ProductInvoice 
                toggleSideMobileMenu={this.toggleSideMobileMenu}
                product={product}/>,
            }[currentView]
          }
        </Col>
        <Col lg={{span: 8, offset: 1}} md={24}>
          <QuickLinks>
            {isActive ? (
              <ul>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.DETAILS}
                  onClick={this.handleViewChange}
                >
                  <Icon type="info"/> Details
                </li>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.MODIFY_PLAN}
                  onClick={this.handleViewChange}
                >
                  <Icon type="setting"/> Change Plan
                </li>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.CHANGE_PAYMENT_METHOD}
                  onClick={this.handleViewChange}>
                  <Icon type="edit"/> Change Payment Method
                </li>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.VIEW_INVOICE}
                  onClick={this.handleViewChange}>
                  <Icon type="file-text"/> View Invoices
                </li>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.CANCEL_SUBSCRIPTION}
                  onClick={this.handleViewChange}>
                  <Icon type="close"/> Cancel Subscription
                </li>
              </ul>
            ) : (
              <ul>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.VIEW_INVOICE}
                  onClick={this.handleViewChange}>
                  <Icon type="file-text"/> View Invoices
                </li>
                <li
                  data-view={SUBSCRIPTION_PRODUCT_VIEW.REACTIVATE_SUBSCRIPTION}
                  onClick={this.handleViewChange}>
                  <Icon type="file-text"/> Reactivate Subscription
                </li>
              </ul>
            )}
          </QuickLinks>
        </Col>
      </Row>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  churnMessages: makeSelectChurnMessages,
  creditCards: cardList,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      customerProductChurnMessageRequest,
      customerProductDeactivateSubscriptionRequest,
      paymentGetList,
      paymentProductCreateNewCard,
      paymentProductReplaceCard,
      paymentProductDeleteCard,
      customerProductDetailGetRequest,
      shopProductsFindRequest,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  SubscriptionProductDetails,
);
