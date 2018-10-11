import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import { Layout, Menu, Breadcrumb, Icon, Input, Row, Col, Card } from "antd";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const Search = Input.Search;
const { Meta } = Card;

const guidelines =[
  {
    graphic: "http://place-hold.it/335x163/CDC727",
    title: "Expensify",
    desc: "All employees are required to file their expenses through Expensify. Remember to attach all your receipts.",
  },
  {
    graphic: "http://place-hold.it/335x163/46ECE8",
    title: "Invoice",
    desc: "All employees are required to file their expenses through Expensify. Remember to attach all your receipts.",
  },
  {
    graphic: "http://place-hold.it/335x163/F0CB73",
    title: "Leave Policy",
    desc: "All employees are required to file their expenses through Expensify. Remember to attach all your receipts.",
  },
  {
    graphic: "http://place-hold.it/335x163/03396C",
    title: "Staff Tree",
    desc: "All employees are required to file their expenses through Expensify. Remember to attach all your receipts.",
  },
  {
    graphic: "http://place-hold.it/335x163/46C4F6",
    title: "Travel Policy",
    desc: "All employees are required to file their expenses through Expensify. Remember to attach all your receipts.",
  }
]
const essentialApps =[
  {
    graphic: "http://place-hold.it/70x70/44B174",
    title: "Zoho Mail",
    desc: "Official email client of iStack Holdings. See instructions to install.",
  },
  {
    graphic: "http://place-hold.it/70x70/EEBC33",
    title: "Slack",
    desc: "Official email client of iStack Holdings. See instructions to install.",
  },
  {
    graphic: "http://place-hold.it/70x70/529AF9",
    title: "Google Drive",
    desc: "Official email client of iStack Holdings. See instructions to install.",
  },
  {
    graphic: "http://place-hold.it/70x70/D8342C",
    title: "Last Pass",
    desc: "Official email client of iStack Holdings. See instructions to install.",
  },
  {
    graphic: "http://place-hold.it/70x70/785983",
    title: "KIN",
    desc: "Official email client of iStack Holdings. See instructions to install.",
  }
]
const departmentApps =[
  {
    graphic: "http://place-hold.it/70x70/FF0369",
    title: "Invision",
    desc: "Official email client of iStack Holdings. See instructions to install.",
  },
  {
    graphic: "http://place-hold.it/70x70/EF2028",
    title: "Adobe",
    desc: "Official email client of iStack Holdings. See instructions to install.",
  },
  {
    graphic: "http://place-hold.it/70x70/D6D7DA",
    title: "GLC",
    desc: "Official email client of iStack Holdings. See instructions to install.",
  },
  {
    graphic: "http://place-hold.it/70x70/529AF9",
    title: "Xero",
    desc: "Official email client of iStack Holdings. See instructions to install.",
  },
  {
    graphic: "http://place-hold.it/70x70/2F6BB6",
    title: "ActiveCampaign",
    desc: "Official email client of iStack Holdings. See instructions to install.",
  }
]

const starreds =[
  {
    graphic: "http://place-hold.it/247x133/eee",
    title: "Expensify",
    desc: "Opened this month",
  },
  {
    graphic: "http://place-hold.it/247x133/eee",
    title: "Invoice",
    desc: "Opened on 4 May",
  },
  {
    graphic: "http://place-hold.it/247x133/eee",
    title: "Staff tree",
    desc: "Opened today",
  },
  {
    graphic: "http://place-hold.it/247x133/eee",
    title: "Travel Policy",
    desc: "Opened this month",
  }
]


import {StyledGuides} from "./styles";

class Guides extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <StyledGuides>
        <div className="guides-header">
          <h2>Quick links and tools </h2>
          <Search
            placeholder="Find a document or app here"
            size="large"
          />
        </div>
        <Content>
          <Layout>
            <Sider width={250} style={{ background: "#FAFCFF" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1","sub2","sub3","sub4"]}
                style={{ height: "100%" }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />Staff</span>}>
                  <Menu.Item key="1">Org Chart</Menu.Item>
                  <Menu.Item key="2">Bios</Menu.Item>
                  <Menu.Item key="3">By Department</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />Guidelines</span>}>
                  <Menu.Item key="5">Expensify</Menu.Item>
                  <Menu.Item key="6">Invoice</Menu.Item>
                  <Menu.Item key="7">Leave Policy</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />Essential Apps</span>}>
                  <Menu.Item key="9">Zoho Mail</Menu.Item>
                  <Menu.Item key="10">Slack</Menu.Item>
                  <Menu.Item key="11">Google Drive</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="star" />Department Apps</span>}>
                  <Menu.Item key="12">Design</Menu.Item>
                  <Menu.Item key="13">Development</Menu.Item>
                  <Menu.Item key="14">Finance</Menu.Item>
                  <Menu.Item key="15">Marketing</Menu.Item>
                  <Menu.Item key="16">Production</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ minHeight: 280 }}>
              <div className="starred-items content-group">
              <h2>Starred items</h2>
                <Row gutter={16}>
                  {
                    starreds.map((starred, index) => (
                    <Col md={12} lg={6} key={index}>
                      <Card
                        hoverable
                        cover={<img src={starred.graphic} />}
                        actions={[<Icon type="star" theme="filled" style={{color: "#F9D500"}} />]}
                      >
                        <Meta
                          title={starred.title}
                          description={starred.desc}
                        />
                      </Card>
                    </Col>
                    ))
                  }
                </Row>
              </div>
              <div className="guidelines content-group">
                <h2>Guidelines</h2>
                <Row gutter={16}>
                  {
                    guidelines.map((guideline, index) => (
                    <Col md={12} lg={8} key={index}>
                      <Card
                        hoverable
                        cover={<img src={guideline.graphic} />}
                        actions={[<Icon type="star" theme="filled" />]}
                      >
                        <Meta
                          title={guideline.title}
                          description={guideline.desc}
                        />
                      </Card>
                    </Col>
                    ))
                  }
                </Row>
              </div>
              <div className="essential-apps content-group">
                <h2>Essential Apps</h2>
                <Row gutter={16}>
                  {
                    essentialApps.map((essentialApp, index) => (
                    <Col md={12} lg={8} key={index}>
                      <Card
                        hoverable
                        cover={<img src={essentialApp.graphic} />}
                        actions={[<Icon type="star" theme="filled" style={{color: "#D0D3D9"}} />]}
                        className="two-column"
                      >
                        <Meta
                          title={essentialApp.title}
                          description={essentialApp.desc}
                        />
                      </Card>
                    </Col>
                    ))
                  }
                </Row>
              </div>
              <div className="department-apps content-group">
                <h2>Department Apps</h2>
                <Row gutter={16}>
                  {
                    departmentApps.map((departmentApp, index) => (
                    <Col md={12} lg={8} key={index}>
                      <Card
                        hoverable
                        cover={<img src={departmentApp.graphic} />}
                        actions={[<Icon type="star" theme="filled" style={{color: "#D0D3D9"}} />]}
                        className="two-column"
                      >
                        <Meta
                          title={departmentApp.title}
                          description={departmentApp.desc}
                        />
                      </Card>
                    </Col>
                    ))
                  }
                </Row>
              </div>
            </Content>
          </Layout>
        </Content>
      </StyledGuides>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Guides);
