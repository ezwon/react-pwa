import React from "react";
import PropTypes from "prop-types";
import { Icon, Divider, Popconfirm } from "antd";

// import {Popconfirm} from "@ant-components";

const TableActions = ({ record, description, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(record._id, record);
  };

  const handleClick = () => {
    onEdit(record._id, record);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Popconfirm
        placement="top"
        title={`Are you sure you want to delete ${description}`}
        onConfirm={handleDelete}
        okText="Yes"
        cancelText="No"
      >
        <Icon type="delete" />
      </Popconfirm>
      <Divider type="vertical" />
      <Icon type="edit" onClick={handleClick} />
      <Divider type="vertical" />
      <a title="Edit" target="_blank" href={`/admin/product/${record._id}`}>
        <Icon type="export" />
      </a>
    </div>
  );
};

TableActions.propTypes = {
  record: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TableActions;
