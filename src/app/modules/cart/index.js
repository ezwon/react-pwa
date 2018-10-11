import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import {createStructuredSelector} from "reselect";
import _ from "lodash";
import {Steps, Icon} from "antd";

import CartItems from "./components/CartItems";
import InvoiceDetails from "./components/InvoiceDetails";
import AccountDetails from "./components/AccountDetails";
import BillingDetails from "./components/BillingDetails";
import ReviewOrder from "./components/ReviewOrder";

import {
  makeSelectSession,
  makeSelectUser,
  selectIsValidToken,
} from "@modules/session/selectors";

import {
  makeSelectSteps,
  makeSelectMetadata,
  makeSelectCartList,
  makeSelectZoho,
  makeSelectAddOns,
  makeSelectDiscount,
  makeSelectPaymentMethod,
  makeSelectInvoiceDetails,
  makeSelectPaymentActiveTab,
} from "./selectors";

import {CART_STEPS, STEPS_CONFIG} from "./constants";

import {
  sessionSetRequest,
  sessionLogoutRequest,
} from "@modules/session/actions";

import Auth0 from "@modules/session";
import {CartCard, Stepper, HeadingText} from "./styles";
import {
  cartGoToItems,
  cartGoToBillingDetails,
  cartConfirmAccountDetails,
  cartChecksExistingEmail,
  cartUpdateItems,
  cartRemoveItemRequest,
  cartGetRequest,
  cartGoToAccountDetails,
  cartPurchaseRequest,
  cartPayInvoiceRequest,
  cartConfirmBillingDetails,
  cartSetAddOns,
  cartApplyDiscount,
  cartApplyDiscountDone,
  cartUpdateStepDetails,
  cartUpdateInvoiceDetailsRequest,
  cartUpdateAccountDetailsChecking,
} from "./actions";

const Step = Steps.Step;
const queryString = require("query-string");
const localStorage = require("localStorage");

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInvalidToken: false,
      isPayingInvoice: false,
    };
  }

  componentDidMount() {
    const hash = this.props.history.location.hash || "";
    if (hash.trim() !== "") {
      Auth0.parseHash(
        {hash: this.props.history.location.hash},
        (err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            const user = Object.assign({}, authResult);
            this.props.sessionSetRequest({authResult: user});
          } else {
            this.setState({showInvalidToken: true});
          }

          setTimeout(() => {
            this.props.history.push("/cart");
          }, 2000);

        },
      );
    }

    const qs = queryString.parse(this.props.history.location.search);

    if (qs["invoice"]) {
      this.setState({isPayingInvoice: true}, () => {
        this.props.cartGetRequest({invoiceId: qs["invoice"], isLoggedIn: this.props.isValidToken});
      });
    } else {
      this.props.cartGetRequest({isLoggedIn: this.props.isValidToken});
    }

    if (qs["discount"]) {
      localStorage.setItem("discountCode", qs["discount"]);
    }
  }

  render() {
    const {
      zoho,
      steps,
      history,
      isValidToken,
      session,
      user,
      paymentType,
      paymentActiveTab,
      metadata,
      invoiceDetails,
      cartItems,
      addOns,
      discount,
      sessionLogoutRequest,
      cartGoToItems,
      cartGoToBillingDetails,
      cartConfirmAccountDetails,
      cartChecksExistingEmail,
      cartUpdateItems,
      cartRemoveItemRequest,
      cartGoToAccountDetails,
      cartPurchaseRequest,
      cartPayInvoiceRequest,
      cartConfirmBillingDetails,
      cartSetAddOns,
      cartApplyDiscount,
      cartApplyDiscountDone,
      cartUpdateStepDetails,
      cartUpdateInvoiceDetailsRequest,
      cartUpdateAccountDetailsChecking,
    } = this.props;

    let {showInvalidToken, isPayingInvoice} = this.state;

    if (cartItems.isValidInvoice) {
      isPayingInvoice = true;
    }

    const authHash = history && history.location && history.location.hash;
    return (
      <CartCard>
        <div className="styled-div_cart-border"/>
        <Stepper current={steps.current}>
          {_.map(STEPS_CONFIG, item => {
            return <Step key={item.title} title={item.title} icon={<Icon type={item.icon}/>}/>;
          })}
        </Stepper>
        {authHash ? (
          <div className="process">
            {showInvalidToken ? (
              <h2>Invalid Token, redirecting back to Account Details...</h2>
            ) : (
              <div className="processing">
                <Icon type="lock"/>
                <h2>Authenticating</h2>
              </div>
            )}
          </div>
        ) : (
          <div>
            {
              {
                [CART_STEPS.accountDetails]: (
                  <div>
                    <HeadingText>Account</HeadingText>
                    <AccountDetails
                      isValidToken={isValidToken}
                      session={session}
                      user={user}
                      steps={steps}
                      sessionLogoutRequest={sessionLogoutRequest}
                      metadata={metadata}
                      cartUpdateAccountDetailsChecking={
                        cartUpdateAccountDetailsChecking
                      }
                      cartChecksExistingEmail={cartChecksExistingEmail}
                      cartConfirmAccountDetails={cartConfirmAccountDetails}
                      cartGoToBillingDetails={cartGoToBillingDetails}
                      cartGoToItems={cartGoToItems}
                      cartGoToAccountDetails={cartGoToAccountDetails}
                    />
                  </div>
                ),
                [CART_STEPS.cartItems]: (
                  <div>
                    <HeadingText>Product</HeadingText>
                    {isPayingInvoice ? (
                      <InvoiceDetails
                        isValidToken={isValidToken}
                        cartItems={cartItems}
                        cartUpdateItems={cartUpdateItems}
                        cartGoToAccountDetails={cartGoToAccountDetails}
                        cartGoToBillingDetails={cartGoToBillingDetails}
                      />
                    ) : (
                      <CartItems
                        cartItems={cartItems}
                        cartUpdateItems={cartUpdateItems}
                        cartRemoveItemRequest={cartRemoveItemRequest}
                        cartGoToAccountDetails={cartGoToAccountDetails}
                        cartGoToBillingDetails={cartGoToBillingDetails}
                        cartSetAddOns={cartSetAddOns}
                        addOns={addOns}
                        cartApplyDiscountDone={cartApplyDiscountDone}
                      />
                    )}

                  </div>
                ),
                [CART_STEPS.billingDetails]: (
                  <div>
                    <HeadingText>Payment</HeadingText>
                    <BillingDetails
                      zoho={zoho}
                      user={user}
                      session={session}
                      cartGoToItems={cartGoToItems}
                      cartItems={cartItems}
                      paymentActiveTab={paymentActiveTab}
                      invoiceDetails={invoiceDetails}
                      cartUpdateInvoiceDetailsRequest={
                        cartUpdateInvoiceDetailsRequest
                      }
                      cartConfirmBillingDetails={cartConfirmBillingDetails}
                    />
                  </div>
                ),
                [CART_STEPS.reviewOrder]: (
                  <div>
                    <HeadingText>Review Order</HeadingText>
                    <ReviewOrder
                      zoho={zoho}
                      steps={steps}
                      cartItems={cartItems}
                      paymentType={paymentType}
                      metadata={metadata}
                      invoiceDetails={invoiceDetails}
                      isValidToken={isValidToken}
                      isPayingInvoice={isPayingInvoice}
                      user={user}
                      cartGoToBillingDetails={cartGoToBillingDetails}
                      cartPurchaseRequest={cartPurchaseRequest}
                      cartPayInvoiceRequest={cartPayInvoiceRequest}
                      cartGoToItems={cartGoToItems}
                      cartGoToAccountDetails={cartGoToAccountDetails}
                      addOns={addOns}
                      discount={discount}
                      cartSetAddOns={cartSetAddOns}
                      cartApplyDiscount={cartApplyDiscount}
                      cartApplyDiscountDone={cartApplyDiscountDone}
                      cartUpdateStepDetails={cartUpdateStepDetails}
                    />
                  </div>
                ),
              }[steps.current]
            }
          </div>
        )}
      </CartCard>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  session: makeSelectSession,
  user: makeSelectUser,
  isValidToken: selectIsValidToken,
  steps: makeSelectSteps,
  paymentType: makeSelectPaymentMethod,
  paymentActiveTab: makeSelectPaymentActiveTab,
  invoiceDetails: makeSelectInvoiceDetails,
  metadata: makeSelectMetadata,
  cartItems: makeSelectCartList,
  zoho: makeSelectZoho,
  addOns: makeSelectAddOns,
  discount: makeSelectDiscount,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      sessionSetRequest,
      sessionLogoutRequest,
      cartGoToItems,
      cartGoToBillingDetails,
      cartConfirmAccountDetails,
      cartChecksExistingEmail,
      cartUpdateItems,
      cartRemoveItemRequest,
      cartGetRequest,
      cartGoToAccountDetails,
      cartPurchaseRequest,
      cartPayInvoiceRequest,
      cartConfirmBillingDetails,
      cartSetAddOns,
      cartApplyDiscount,
      cartApplyDiscountDone,
      cartUpdateStepDetails,
      cartUpdateInvoiceDetailsRequest,
      cartUpdateAccountDetailsChecking,
    },
    dispatch,
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Cart),
);
