import React, { Component } from "react";
import { Tabs } from "antd";
import _ from "lodash";
import styled from "styled-components";

const TabPane = Tabs.TabPane;

const AppTab = styled(Tabs)`
  .ant-tabs-bar {
    border-bottom: 2px solid #ececec;
  }
  .ant-tabs-nav {
    .ant-tabs-ink-bar {
      background-color: #6590fa;
    }
    .ant-tabs-tab,
    .ant-tabs-tab-active {
      color: #95a5c0;
      font-size: 18px;
      font-weight: 600;
      padding: 18px 0;
      margin-right: 50px;
      text-align: center;
      &:hover {
        color: #3b475b;
      }
    }
    .ant-tabs-tab-active {
      color: #3b475b;
    }
  }
`;
export default class AntTabs extends Component {
  render() {
    return (
      <AppTab {...this.props}>
        {_.map(this.props.tabs, item => {
          return (
            <TabPane tab={item.tab} key={item.key}>
              {item.content}
            </TabPane>
          );
        })}
      </AppTab>
    );
  }
}
