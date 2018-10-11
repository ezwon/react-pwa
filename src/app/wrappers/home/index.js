import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {Layout, Row, Col} from "antd";
import { Link } from 'react-router-dom';
import {
  StyledWrapper_IstackAccountsAdmin,
  BaseAntButton,
} from "./styles";
import {landinglogos} from "./constants";

import {selectIsValidToken} from "@common/auth0/session/selectors";

import Auth0 from "@common/auth0";
import ScreenShot from "@resources/images/landing/screen.png";

import config from "@config";


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  handleLogin = () => {
    Auth0.authorize({
      auth_database: config.AUTH0_DATABASE,
      brand: config.APP_BRAND,
    });
  };

  render() {


    const {isValidToken} = this.props;
    return (
      <StyledWrapper_IstackAccountsAdmin>
        <Layout>
          <Row className="styled-row_istack-network_bg_image" gutter={0}>
            <Col xs={24} md={24} lg={11} xl={11} xxl={12}>
              <div className="styled-col_istack-network _istack-network_text-block">
                <h3>iStack Network</h3>
                <h1>
                  Billing, invoices <br/>and access <br/>all in one place
                </h1>

                <p>
                  Use a single set of login credentials to access <br/>all of our
                  systems. Easy Won!
                </p>
                {config.NODE_ENV !== "production" && (
                  <div className="istack-network_styled-div-button-wrapper">
                    <Row type='flex' justify='start' align='top' gutter={24}>
                      <Col xs={12} sm={12} md={12} lg={12}>
                        <Link to="/shop">
                          <BaseAntButton type="outline" className="buttonBase">
                            Shop
                          </BaseAntButton>
                        </Link>
                      </Col>
                      {isValidToken ?
                        (
                          <Col xs={12} sm={12} md={12} lg={12}>
                            <Link to="/account/profile">
                              <BaseAntButton type="blue" className="buttonBase">
                                My Account
                              </BaseAntButton>
                            </Link>
                          </Col>
                        ) : (
                          <Col xs={12} sm={12} md={12} lg={12}>
                            <BaseAntButton
                              type="blue"
                              className="buttonBase"
                              onClick={this.handleLogin}
                            >
                              Login
                            </BaseAntButton>
                          </Col>
                        )
                      }
                    </Row>
                  </div>
                )}
              </div>
            </Col>
            <Col xs={24} md={24} lg={13} xl={13} xxl={12}>
              <div className="styled-col_istack-network _istack-network_image-block">
                <img src={ScreenShot} className="screenshot"/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="styled-col_istack-network_about">
                <h2>What is iStack Network?</h2>
                <p>
                  It's our unified billing and management system that simplifies
                  your product access.
                </p>

                <div className="styled-div_istack-network_logo-block">
                  <Row type='flex' justify='center' align='middle' gutter={24}>
                    {
                      landinglogos.map((logos, index) => (
                        <Col xs={24} sm={12} md={6} lg={6} key={index}>
                          <a href={logos.link} target="_blank">
                            <img className={logos.size} src={logos.image}/>
                          </a>
                        </Col>
                      ))
                    }
                  </Row>
                </div>
                 <p>...with more to come <span onClick={this.handleLogin} style={{color: "#898585"}}>soon</span></p>
                {/*<p>...with more to come soon</p>*/}
                <Link to="/shop">
                  <BaseAntButton type="outline" className="buttonBase">
                    Get Started
                  </BaseAntButton>
                </Link>
              </div>
            </Col>
          </Row>
          <div className="styled-div_istack-network_footer-text">
            <p>© <strong>2018 iStack Network</strong>. All rights reserved.</p>
          </div>
        </Layout>
      </StyledWrapper_IstackAccountsAdmin>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  // isValidToken: selectIsValidToken,
});


export default withRouter(connect(mapStateToProps, null)(HomePage));
