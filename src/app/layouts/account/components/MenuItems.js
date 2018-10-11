import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createStructuredSelector} from "reselect";

import {sessionLogoutRequest} from "@modules/session/actions";
import {selectSessionProfile} from "@modules/session/selectors";

import AntMenu from "@ant-components/Menu";

import {StyledMenuItems, StyledAvatar} from "../styles";

import config from "@config";

class MenuItems extends Component {
  handleLogout = () => {
    this.props.sessionLogoutRequest();
    this.props.history.push("/");
  };

  render() {
    const {
      sessionProfile,
      collapsed,
    } = this.props;

    const avatar = sessionProfile.picture;
    const nickName = sessionProfile.nickname;

    return (
      <StyledMenuItems>
        <StyledAvatar>
          <div>
            <div className="image-border"/>
            <img src={avatar}/>
          </div>
          <span>{nickName}</span>
          <span onClick={this.handleLogout}>Log Out</span>
        </StyledAvatar>
        <AntMenu
          theme="light"
          mode="inline"
          inlineCollapsed={collapsed}
          items={config.MENU_CUSTOMER}
          section="account-section"
        />
      </StyledMenuItems>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sessionProfile: selectSessionProfile,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      sessionLogoutRequest,
    },
    dispatch,
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuItems));
