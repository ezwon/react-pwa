import { Modal } from "antd";

export const ModalInfo = (title, message) => {
  Modal.info({
    title: title,
    content: message,
    onOk() {},
  });
};

export const ModalSuccess = (title, message) => {
  Modal.success({
    title: title,
    content: message,
    onOk() {},
  });
};

export const ModalError = (title, message) => {
  Modal.error({
    title: title,
    content: message,
    onOk() {},
  });
};

export const ModalWarning = (title, message) => {
  Modal.warning({
    title: title,
    content: message,
    onOk() {},
  });
};

export const ModalConfirm = (title, message) => {
  Modal.confirm({
    title: title,
    content: message,
  });
};
