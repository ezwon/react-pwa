import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createStructuredSelector} from "reselect";

import {sessionLogoutRequest} from "@common/auth0/session/actions";
import {selectSessionProfile, selectIsValidToken} from "@common/auth0/session/selectors";

import AntMenu from "@ant-components/Menu/index";
import {StyledMenuItems, StyledAvatar, LoginButton} from "../styles";

import config from "@config";
import Auth0 from "@common/auth0";

class MenuItems extends Component {
  handleLogin = () => {
    Auth0.authorize({
      auth_database: config.AUTH0_DATABASE,
      brand: config.APP_BRAND,
      redirectUri: config.AUTH0_REDIRECT_SHOP,
    });
  };

  handleLogout = () => {
    this.props.sessionLogoutRequest({redirectUrl: "/shop"});
  };

  render() {
    const {
      sessionProfile,
      isValidToken,
    } = this.props;

    const avatar = sessionProfile.picture;
    const nickName = sessionProfile.nickname;

    return (
      <StyledMenuItems>
        {isValidToken ? (
          <StyledAvatar>
            <div>
              <div className="image-border"/>
              <img src={avatar}/>
            </div>
            <span>{nickName}</span>
            <span onClick={this.handleLogout}>Log Out</span>
          </StyledAvatar>
        ) : (
          <LoginButton type="secondary" onClick={this.handleLogin}>
            Login
          </LoginButton>
        )}
        <AntMenu
          theme="light"
          mode="inline"
          items={config.SHOPS}
          section="shop-section"
        />
      </StyledMenuItems>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sessionProfile: selectSessionProfile,
  isValidToken: selectIsValidToken,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      sessionLogoutRequest,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);


