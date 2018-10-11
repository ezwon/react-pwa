import React, {Component} from "react";
import Header from "./components/Header";
import {StyledHeader, StyledContainer, StyledFooter} from "./styles";

import {Layout} from "antd";

const {Content} = Layout;

class ShopLayout extends Component {
  render() {
    return (
      <main className="container default-layout">
        <Layout style={{background: "#fff"}}>
          <StyledHeader className="header">
            <div className="logo"/>
            <Header/>
          </StyledHeader>
          <StyledContainer id="page-content">
            <Layout>
              <Content style={{minHeight: "calc(100vh - 180px)"}}>
                {this.props.children}
              </Content>
            </Layout>
          </StyledContainer>
          <StyledFooter>
            © iStack Network 2018
          </StyledFooter>
        </Layout>
      </main>
    );
  }
}

export default ShopLayout;
