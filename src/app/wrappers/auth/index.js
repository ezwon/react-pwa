import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Icon} from "antd";

import {sessionSetRequest} from "@common/auth0/session/actions";
import Auth0 from "@common/auth0";

import {Wrapper, Content} from "./styles";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuccessful: false,
      message: "",
    };
  }

  componentWillMount() {
    this.setState({
      message: "Validating...",
    }, () => {
      Auth0.parseHash({hash: this.props.location.hash}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          setTimeout(() => {
            this.setState({
              isSuccessful: true,
              message: "Account Valid! Redirecting to Account Page...",
            });

            const user = Object.assign({}, authResult);
            this.props.sessionSetRequest({authResult: user});
          }, 3000);
        } else {
          this.setState({
            message: "Could not validate. Please try to login again.",
          });
        }
      });
    });
  }

  render() {
    const {message, isSuccessful} = this.state;

    return (
      <Wrapper>
        <Content>
          <div>
            <Icon
              type={isSuccessful ? "check-circle" : "lock"}
              className={isSuccessful ? "success" : ""}
            />
            <h1>{message}</h1>
          </div>
        </Content>
      </Wrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      sessionSetRequest,
    },
    dispatch,
  );
}

export default connect(null, mapDispatchToProps)(Auth);
