import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Icon, Input, Avatar } from "antd";
import config from "@config";
import _ from "lodash";
import {
  MenuBar,
  SearchBar,
  Logo,
  UserBar,
  TopMenuLoginButton,
  StyledShopMobileSideMenuWrapper,
} from "../../styles";
import { shopProductsSetFiltered } from "../../actions";
import { makeProductsList } from "../../selectors";
import Auth0 from "../../../../common/auth0";
import {
  sessionSetRequest,
  sessionLogoutRequest,
} from "../../../../common/auth0/session/actions";
import {
  selectIsValidToken,
  makeSelectUser,
  selectSessionProfile,
} from "../../../../common/auth0/session/selectors";
import iStackNetworkLogoShort from "../../../../../resources/images/logo/iStackNetworkLogo.png";
import iStackNetworkLogoLong from "../../../../../resources/images/logo/iStackNetwork.png";
import MobileRightSideMenu from "../../../common/components/MobileRightSideMenu";

class ShopTopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      showUserMenu: false,
      open: false,
      showSearch: false,
    };
  }

  componentWillMount() {
    Auth0.parseHash(
      { hash: this.props.history.location.hash },
      (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          const user = Object.assign({}, authResult);
          this.props.sessionSetRequest({
            authResult: user,
            redirectUri: "/shop",
          });
        }
      },
    );
  }

  componentDidMount() {
    const pageContent = document.getElementById("page-content");
    if (pageContent) {
      pageContent.addEventListener("click", () => {
        if (this.state.open) {
          this.handleSidebarToggle();
        }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.pathname !== this.props.location.pathname &&
      this.state.open
    ) {
      this.handleSidebarToggle();
    }
  }

  handleLogin = () => {
    Auth0.authorize({
      auth_database: config.AUTH0_DATABASE,
      brand: config.APP_BRAND,
      redirectUri: config.AUTH0_REDIRECT_SHOP,
    });
  };

  handleLogout = () => {
    this.props.sessionLogoutRequest({ redirectUrl: "/shop" });
  };

  handleRedirect = route => {
    this.props.history.push(route);
  };

  handleSearch = value => {
    const filtered = this.searchMultiple(this.props.productList, value);
    this.props.shopProductsSetFiltered(filtered);
    let arr = [];
    _.map(filtered, item => {
      arr.push(item.name);
    });
    this.setState({
      dataSource: arr,
    });
  };

  handleUserMenuToggle = () => {
    this.setState({ showUserMenu: !this.state.showUserMenu });
  };

  handleSidebarToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleSearchBarToggle = () => {
    this.setState({ showSearch: !this.state.showSearch });
  };

  searchMultiple = (array, keyword) => {
    keyword = keyword.toLowerCase();
    if (undefined === keyword || keyword === "") {
      return array;
    }
    return array.filter(val => {
      let flag;
      for (let prop in val) {
        if (val[prop]) {
          flag = false;
          flag =
            val[prop]
              .toString()
              .toLowerCase()
              .indexOf(keyword) > -1;
        }
        if (flag) {
          break;
        }
      }
      return flag;
    });
  };

  render() {
    const { isValidToken, user, profile } = this.props;
    const { showUserMenu, open, showSearch } = this.state;

    const profilePicture = (profile && profile.picture) || "";
    const nickName =
      (isValidToken && user.customer && user.customer.first_name) || "";

    return (
      <Row  type="flex" justify="center" align="middle" style={{ fontFamily: "Lato" }}>
        <div className="shop-top-menu">
          <StyledShopMobileSideMenuWrapper className={open ? "open" : ""}>
            <MobileRightSideMenu
              menuConfig={config.SHOPS}
              handleLogin={this.handleLogin}
            />
          </StyledShopMobileSideMenuWrapper>

          <Col xs={24} sm={24} md={24} lg={24} xl={7} xxl={9}>
            <p className="styled-logo-text">
              iStack Network
            </p>
            <Logo>
              <img src={iStackNetworkLogoShort} className="short" />
              <img src={iStackNetworkLogoLong} className="logo" />
            </Logo>
            <SearchBar
              dataSource={this.state.dataSource}
              onSearch={this.handleSearch}
              onSelect={this.handleSearch}
              placeholder="Search for a product..."
              className={showSearch ? "show" : ""}
            >
              <Input prefix={<Icon type="search" />} />
            </SearchBar>
            <div className="shop-top-menu-mobile">
              <Icon
                type="search"
                className="shop-top-menu-icon"
                onClick={this.handleSearchBarToggle}
              />
              <Icon
                type="menu-fold"
                className="shop-top-menu-icon"
                onClick={this.handleSidebarToggle}
              />
            </div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={24} xl={17} xxl={15}>
            <div className="shop-top-menu-bar">
              <MenuBar
                theme="light"
                mode="horizontal"
                items={config.SHOPS}
                section="shop-section"
              />
              {isValidToken ? (
                <UserBar
                  onClick={this.handleUserMenuToggle}
                  className={showUserMenu  ? "active" : ""}
                >
                  <div className="trigger">
                    <Avatar size="large" src={profilePicture} />
                    <span className="name">{nickName}</span>
                    <Icon type="down" className="arrow" />
                  </div>
                  <ul>
                    <li
                      onClick={() => {
                        this.handleRedirect("/account/profile");
                      }}
                    >
                      <Icon type="user" /> Profile
                    </li>
                    <li
                      onClick={() => {
                        this.handleRedirect("/account/products");
                      }}
                    >
                      <Icon type="switcher" /> My Products
                    </li>
                    <li onClick={this.handleLogout}>
                      <Icon type="logout" /> Logout
                    </li>
                  </ul>
                </UserBar>
              ) : (
                <UserBar
                  className={showUserMenu  ? "active" : "active"}
                >
                  <div className="trigger">
                    <TopMenuLoginButton onClick={this.handleLogin}>
                        Login
                    </TopMenuLoginButton>
                  </div>
                </UserBar>
              )}
            </div>
          </Col>
        </div>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    isValidToken: selectIsValidToken(state),
    productList: makeProductsList(state),
    user: makeSelectUser(state),
    profile: selectSessionProfile(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      shopProductsSetFiltered,
      sessionSetRequest,
      sessionLogoutRequest,
    },
    dispatch,
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ShopTopMenu),
);
