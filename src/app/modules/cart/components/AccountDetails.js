import React, {Component} from "react";
import _ from "lodash";
import {Icon, Row, Col, Form, Button} from "antd";
import config from "@config";
import {TextInput} from "../../../ant-components/FormElements";
import ProductStm from "../../../../resources/images/logo/stm-logo-gray.png";
import ProductFF from "../../../../resources/images/logo/funnelflux-gray.png";
import ProductTraining from "../../../../resources/images/logo/istack-training-gray.png";

import Auth0 from "../../../common/auth0";

import {
  AccountForm,
  LoggedInUserContainer,
  AccountDetailsWrapper,
} from "../styles";

const productLogo = {
  [config.BRANCHES.FUNNEL_FLUX]: ProductFF,
  [config.BRANCHES.STM]: ProductStm,
  [config.BRANCHES.TRAINING]: ProductTraining,
  [config.BRANCHES.AWC_ASIA]: ProductTraining,
};

class AccountDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: this.props.metadata.email || "",
      },
      errors: {},
    };
  }

  handleCheckEmail = () => {
    const {cartUpdateAccountDetailsChecking} = this.props;
    this.props.form.validateFields(["email"], (err, values) => {
      if (!err) {
        const data = Object.assign({}, this.state.data, values);
        cartUpdateAccountDetailsChecking({
          isEmailChecked: false,
          isExistingCustomer: false,
          isCheckingEmail: true,
        });
        this.props.cartChecksExistingEmail({
          email: data.email,
          onSuccess: result => {
            cartUpdateAccountDetailsChecking({
              isEmailChecked: true,
              isExistingCustomer: result.is_customer,
              isCheckingEmail: false,
            });
          },
        });
      }
    });
  };

  handleSubmit = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = Object.assign({}, this.state.data, values);

        const metadata = {
          email: data.email,
          first_name: data.firstName,
          last_name: data.lastName,
          password: data.password,
        };

        this.props.cartConfirmAccountDetails({metadata});
      } else {
        //console.log("Error or Form:", err);
      }
    });
  };

  handleChangeEmail = () => {
    this.props.cartUpdateAccountDetailsChecking({
      isEmailChecked: false,
      isExistingCustomer: false,
      isCheckingEmail: false,
    });
  };

  handleChange = e => {
    const field = e.target.id;
    const data = Object.assign({}, this.state.data);
    data[field] = e.target.value;

    this.setState({data});
  };

  handleLogin = () => {
    Auth0.authorize({
      auth_database: config.AUTH0_DATABASE,
      brand: config.APP_BRAND,
      redirectUri: config.AUTH0_REDIRECT_CART,
    });
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value) {
      form.validateFields(["password1"], {force: true});
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Passwords do not match");
    } else {
      callback();
    }
  };

  render() {
    const {
      form,
      metadata,
      session : {
        user, profile,
      },
      isValidToken,
      steps: {isEmailChecked, isExistingCustomer, isCheckingEmail},
    } = this.props;

    const {errors} = this.state;
    const branches = _.get(user, "customer.branches_details", [])
    return (
      <AccountDetailsWrapper >
        {isValidToken && (
          <LoggedInUserContainer>
            <h2>
              Logged In as <br/>
              <img src={profile.picture} /> <br />
              <span>{user && user.customer && user.customer.full_name}</span>
            </h2>
            <p>Account used in the following iStack Branch:</p>
            <div className="_styled-div_product-logo_wrapper">
              <Row type='flex' justify='center' align='middle' gutter={24}>
                {branches.map(branch => (
                  <Col xs={24} sm={24} md={8} lg={8} key={branch._id}>
                    <img src={productLogo[branch._id]} title={branch.name} role='presentation'/>
                  </Col>
                ))}
              </Row>
            </div>
            <Button
              type="secondary"
              onClick={() => this.props.sessionLogoutRequest()}
            >
              Logout
            </Button>
            <Button type="primary" onClick={() => this.props.cartGoToItems()}>
              Next
            </Button>
          </LoggedInUserContainer>
        )}

        {!isValidToken && (
          <Form layout="vertical" className="show-select">
            {!isCheckingEmail && (
              <div>
                {!isEmailChecked && (
                  <AccountForm>
                    <Col span={24}>
                      <div className="styled-div_not-loggedin_shop-form">
                        <h2>Create an account</h2>
                        <TextInput
                          className={isEmailChecked ? "hidden styled-text-input_cart" : "styled-text-input_cart"}
                          form={form}
                          label=""
                          placeholder="Enter Your Email"
                          name={"email"}
                          isEmail={true}
                          onChange={this.handleChange}
                          required={true}
                          error={errors.email}
                          initialValue={metadata.email}
                        />
                        <Button
                          type="primary"
                          onClick={() => this.handleCheckEmail()}
                        >
                          Next
                        </Button>
                      </div>
                    </Col>
                    <Col span={24} className="col-divider">
                      <span className="divider"/>
                      <span className="or">or</span>
                    </Col>
                    <Col span={24}>
                      <div className="styled-div_not-loggedin_shop-form">
                        <h2>Already have an account?</h2>
                        <Button type="primary" onClick={this.handleLogin}>
                          Login
                        </Button>
                      </div>
                    </Col>
                  </AccountForm>
                )}

                {isEmailChecked &&
                isExistingCustomer && (
                  <div className="existing-account">
                    <Icon type="exclamation-circle-o"/>
                    <h2>You already have an account</h2>
                    <p>
                      The email{" "}
                      <b className="email">{this.state.data.email}</b> is
                      already registered on iStack Network
                    </p>
                    <Button
                      type="secondary"
                      onClick={() => this.handleChangeEmail()}
                    >
                      Use a different Email
                    </Button>
                    <Button type="primary" onClick={() => this.handleLogin()}>
                      Login using this Account
                    </Button>
                  </div>
                )}

                {isEmailChecked &&
                !isExistingCustomer && (
                  <div className="new-account">
                    <h2>Create New Account</h2>
                    <p>
                      No existing account found for <br/>
                      <b className="email">{this.state.data.email}</b>
                      <br/>
                      Please fill the form below to create your iStack Network account{" "}
                      <br/>or click{" "}
                      <b
                        onClick={() => this.handleChangeEmail()}
                        className="click"
                      >
                        HERE
                      </b>{" "}
                      to use a different email
                    </p>
                    <TextInput
                      form={form}
                      label={"First Name"}
                      name={"firstName"}
                      required={true}
                      onChange={this.handleChange}
                      error={errors.firstName}
                      initialValue={metadata.first_name}
                      min={2}
                      max={50}
                    />
                    <TextInput
                      form={form}
                      label={"Last Name"}
                      name={"lastName"}
                      required={true}
                      onChange={this.handleChange}
                      error={errors.lastName}
                      initialValue={metadata.last_name}
                      min={2}
                      max={50}
                    />
                    <TextInput
                      form={form}
                      label={"Password"}
                      name={"password"}
                      min={6}
                      required={true}
                      onChange={this.handleChange}
                      error={errors.password}
                      initialValue={metadata.password}
                      validator={this.validateToNextPassword}
                      type="password"
                    />
                    <TextInput
                      form={form}
                      label={"Confirm Password"}
                      name={"password1"}
                      min={6}
                      required={true}
                      onChange={this.handleChange}
                      error={errors.password}
                      validator={this.compareToFirstPassword}
                      initialValue={metadata.password}
                      type="password"
                    />
                    <br/>
                    <br/>
                    <Button
                      type="primary"
                      onClick={() => this.handleSubmit()}
                    >
                      Confirm Account Details
                    </Button>
                  </div>
                )}
              </div>
            )}

            {isCheckingEmail && (
              <div className="process">
                <h2>Checking Email...</h2>
              </div>
            )}
          </Form>
        )}
      </AccountDetailsWrapper>
    );
  }
}

export default Form.create()(AccountDetails);
