import React, { Component } from "react";
import styled from "styled-components";
import { Card, Button } from "antd";

const Drawer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 2;
  width: 100wh;
  transform: scale(0);
  transition-delay: 400ms;
  background: #02020245;
  opacity: 0;
  &.open {
    transition: fade 300ms;
    opacity: 1;
    transform: scale(1);
  }
  .ant-card {
    width: 700px;
    position: fixed;
    right: 0;
    top: 60px;
    height: calc(100vh - 60px);
    background: #ffffff;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0.5),
      0 3px 41px 0 rgba(0, 0, 0, 0.1);
    overflow: auto;
    transform: translateX(100%);
    transition: 400ms;
    &.open {
      transform: translateX(0);
    }
    .ant-card-head-title {
      line-height: 50px;
      font-size: 25px;
    }
    .ant-card-body {
      padding: 25px 50px;
    }
  }
`;

export default class AppDrawer extends Component {
  render() {
    const { visible, handleCancel, title } = this.props;
    return (
      <Drawer className={visible ? "open" : ""}>
        <Card
          title={title}
          loading={false}
          className={visible ? "open" : ""}
          extra={
            <Button
              // shape="circle"
              icon="arrow-right"
              type="danger"
              // size="large"
              onClick={handleCancel}
            />
          }
        >
          {this.props.children}
        </Card>
      </Drawer>
    );
  }
}
