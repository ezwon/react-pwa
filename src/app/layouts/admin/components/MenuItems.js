import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createStructuredSelector} from "reselect";
import { Input, Icon } from "antd";

import {sessionLogoutRequest} from "@modules/session/actions";
import {selectSessionProfile} from "@modules/session/selectors";

import AntMenu from "@ant-components/Menu";

import {WorldTime, Quotes} from "@modules/dashboard/components";

import {StyledMenuItems, StyledAvatar, StyledCollapse, StyledPanel} from "../styles";

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
          <div className="avatar-wrapper">
            <div className="avatar-bg"></div>
            <img src={avatar}/>
          </div>
          <div className="todo">
            <h1>Good morning, {nickName}!</h1>
            <p>What do you want to do today?</p>
            <Input />
          </div>
        </StyledAvatar>

        <StyledCollapse bordered={false} defaultActiveKey={["1", "2", "3", "4"]}>
          <StyledPanel showArrow={false} header="QUOTE OF THE DAY" key="1">
            <Quotes />
          </StyledPanel>
          <StyledPanel showArrow={false} header="MENU" key="2">
            <AntMenu
              theme="light"
              mode="inline"
              inlineCollapsed={collapsed}
              items={config.MENU_ADMIN}
              section="account-section"
            />
          </StyledPanel>
          <StyledPanel showArrow={false} header="CALENDAR" key="3">
          </StyledPanel>
          <StyledPanel showArrow={false} header="WORLD TIME" key="4">
            <div>
              <a href="#" className="cal-add-btn">
                <Icon type="plus" theme="outlined" />
              </a>
              <WorldTime />
            </div>
          </StyledPanel>
        </StyledCollapse>

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
