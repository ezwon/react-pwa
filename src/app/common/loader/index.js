import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Modal, Button } from "antd";
import config from "@config";

import * as styles from "./loader.scss";
import Transition from "pawjs/src/components/transition";
import { sessionSetRequest } from "@common/auth0/session/actions";
import {
  selectIsValidToken,
  makeSelectUser,
} from "@common/auth0/session/selectors";

import Auth0 from "@common/auth0";

import { InvalidToken } from "./styles";
import IconInvalid from "@resources/images/icons/invalid.svg";

import "@common/styles/global-styles";

class Loader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
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
        location: { pathname },
      },
    } = this.props;

    const displayInvalidToken =
      config.PUBLIC_URL.indexOf(pathname) === -1 && !isValidToken;

    return (
      <div>
        <Transition
          className={styles["animator"]}
          onEnterClassName={styles["fade-in"]}
          onExitClassName={styles["fade-out"]}
        >
          {this.props.children || null}
        </Transition>
        <Modal
          visible={displayInvalidToken}
          footer={null}
          closable={false}
          title={null}
        >
          <InvalidToken>
            <img src={IconInvalid} />
            <span className="title">Invalid Token</span>
            <p>Please Login Again</p>
            <Button type="primary" onClick={this.handleLogin}>
              Login
            </Button>
          </InvalidToken>
        </Modal>
      </div>
    );
  }
}

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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Loader),
);
