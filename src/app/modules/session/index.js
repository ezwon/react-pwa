import React, {Component} from "react";
import auth0 from "auth0-js";
import {bindActionCreators} from "redux";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Modal, Button} from "antd";

import {sessionSetRequest} from "@modules/session/actions";
import {
  selectIsValidToken,
  makeSelectUser,
} from "@modules/session/selectors";

import {InvalidToken} from "./styles";
import IconInvalid from "@resources/images/icons/invalid.svg";

import config from "@config";

import "@common/styles/global-styles";

const auth0Config = {
  clientID: config.AUTH0_CLIENT_ID,
  domain: config.AUTH0_DOMAIN,
  responseType: "token id_token",
  audience: config.AUTH0_AUDIENCE,
  redirectUri: config.AUTH0_CALLBACK,
  scope: "read:all upsert:all delete:all openid profile",
  leeway: 30,
};

const Auth0 = new auth0.WebAuth(auth0Config);

export default Auth0;

export function withSession(WrappedComponent) {
  const mapStateToProps = createStructuredSelector({
    isValidToken: selectIsValidToken,
    user: makeSelectUser,
  });

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        sessionSetRequest,
      },
      dispatch,
    );
  }

  class Session extends Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      const link = document.createElement("link");
      link.href = "https://fonts.googleapis.com/css?family=Lato:300,400";
      link.rel = "stylesheet";
      link.async = true;
      document.body.appendChild(link);

      this.props.sessionSetRequest();


      const ele = document.getElementById("ipl-progress-indicator");
      if (ele) {
        setTimeout(() => {
          ele.classList.add("available");
          setTimeout(() => {
            ele.innerHTML = "";
          }, 1000);
        }, 1000);
      }
    }

    handleLogin = () => {
      Auth0.authorize({
        auth_database: config.AUTH0_DATABASE,
        brand: config.APP_BRAND,
      });
    };

    render() {
      const {
        isValidToken,
        history: {
          location: {pathname},
        },
      } = this.props;

      const displayInvalidToken =
        config.PUBLIC_URL.indexOf(pathname) === -1 && !isValidToken;

      return (
        <WrappedComponent>
          {this.props.children || null}
          <Modal
            visible={displayInvalidToken}
            footer={null}
            closable={false}
            title={null}
          >
            <InvalidToken>
              <img src={IconInvalid}/>
              <span className="title">Invalid Token</span>
              <p>Please Login Again</p>
              <Button type="primary" onClick={this.handleLogin}>
                Login
              </Button>
            </InvalidToken>
          </Modal>
        </WrappedComponent>
      );
    }
  }

  return withRouter(connect(mapStateToProps, mapDispatchToProps)(Session));
}
