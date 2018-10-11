import React from "react";
import PropTypes from "prop-types";

import { AntTable } from "@ant-components";
import { getCurrent, getSkip } from "@common/helpers/page";

const Table = ({
  columns,
  expandedRowRender,
  list,
  rowKey,
  getList,
  loading,
  style,
}) => {
  const handlePageChange = page => {
    const skip = getSkip({ page, pageSize: list.limit, total: list.total });
    getList({ $skip: skip, $limit: list.limit });
  };

  return (
    <AntTable
      dataSource={list.data}
      columns={columns}
      expandedRowRender={expandedRowRender}
      rowKey={rowKey}
      bordered={false}
      loading={loading}
      pagination={{
        pageSize: list.limit || 10,
        current: getCurrent(list) || 1,
        total: list.total || 0,
        onChange: handlePageChange,
      }}
      style={style}
    />
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  getList: PropTypes.func.isRequired,
  rowKey: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};

export default Table;
