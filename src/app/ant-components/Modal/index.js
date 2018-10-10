import React, { Component } from "react";
import { Modal } from "antd";
import styled from "styled-components";

const AppModal = styled(Modal)`
  .ant-modal-body {
    max-height: 60vh;
    overflow: auto;
  }
`;
export default class AntModal extends Component {
  render() {
    const {
      title,
      visible,
      handleConfirm,
      handleCancel,
      confirmText,
      cancelText,
      children,
    } = this.props;
    return (
      <AppModal
        title={title}
        visible={visible}
        onOk={handleConfirm}
        onCancel={handleCancel}
        okText={confirmText ? confirmText : "Confirm"}
        cancelText={cancelText ? cancelText : "Cancel"}
        {...this.props}
      >
        {children}
      </AppModal>
    );
  }
}
