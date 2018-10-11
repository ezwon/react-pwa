import React, {Component} from "react";
import {Row, Col, Icon} from "antd";

import MenuItems from "./MenuItems";
import SiteLogo from "@resources/images/logo/iStackNetwork.png";

import {StyledHeader, StyledMobileRightSideMenuWrapper} from "../styles";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMobileSideMenu: false,
    };
  }

  componentDidMount() {
    const pageContent = document.getElementById("page-content");
    if (pageContent) {
      pageContent.addEventListener("click", () => {
        if (this.state.openMobileSideMenu) {
          this.handleToggleMobileSideMenu();
        }
      });
    }
  }

  handleToggleMobileSideMenu = () => {
    this.setState({openMobileSideMenu: !this.state.openMobileSideMenu});
  };

  render() {
    const {openMobileSideMenu} = this.state;
    return (
      <StyledHeader>
        <Row>
          <Col span={20}>
            <Icon
              className="trigger desktop-menu-toggle"
              type={this.props.menuCollapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.props.handleToggleMenuFold}
            />
            <img src={SiteLogo} className="site-logo"/>
          </Col>
          <Col span={4} className="header-menu-section">
            <Icon
              className="styled-icon_account-side-menu mobile-menu-toggle"
              type={openMobileSideMenu ? "menu-unfold" : "menu-fold"}
              onClick={this.handleToggleMobileSideMenu}/>
          </Col>
        </Row>
        <StyledMobileRightSideMenuWrapper className={openMobileSideMenu ? "open" : ""}>
          <MenuItems/>
        </StyledMobileRightSideMenuWrapper>
      </StyledHeader>
    );
  }
}

export default Header;
