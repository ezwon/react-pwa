import React, {Component} from "react";
import Header from "./components/Header";
import MenuItems from "./components/MenuItems";
import {withSession} from "@modules/session";

import {
  StyledAppContainer,
  StyledSideMenu,
  StyledMainContainer,
  StyledModuleContainer,
  StyledFooter
} from "./styles";

class AccountLayout extends Component {
  state = {
    menuCollapsed: false,
  };

  handleToggleMenuFold = () => {
    this.setState({
      menuCollapsed: !this.state.menuCollapsed,
    });
  };

  render() {
    return (
      <StyledAppContainer>
        <StyledSideMenu
          trigger={null}
          collapsible
          collapsed={this.state.menuCollapsed}
        >
          <MenuItems
            collapsed={this.state.menuCollapsed}
          />
        </StyledSideMenu>
        <StyledMainContainer>
          <Header
            menuCollapsed={this.state.menuCollapsed}
            handleToggleMenuFold={this.handleToggleMenuFold}
          />
          <StyledModuleContainer id="page-content">
            {this.props.children}
          </StyledModuleContainer>
          <StyledFooter>
            iStack Network © 2018
          </StyledFooter>
        </StyledMainContainer>
      </StyledAppContainer>
    );
  }
}

export default withSession(AccountLayout);
