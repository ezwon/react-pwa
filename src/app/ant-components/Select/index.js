import React, { Component } from "react";
import { Select } from "antd";
const { Option, OptGroup } = Select;
import _ from "lodash";

export default class AntSelect extends Component {

  _createContent = () => {
    const { items } = this.props;

    if(this.props.isGroup) {
      return _.map(items, (item, i) => {
        const { groupLabel, groupValue } = item;

        return (
          <OptGroup label={groupLabel} key={`${i}`}>
            {
              _.map(groupValue, (subItem, j) => {
                return (
                  <Option
                    key={`${i}${j}`}
                    value={subItem.value} >
                    {subItem.label}
                  </Option>
                );
              })
            }
          </OptGroup>
        );
      });
    }

    return _.map(items, (item) => {
      const { label, value } = item;

      return (
        <Option
          key={value}
          value={value}>
          {label}
        </Option>
      );
    });
  };

  render() {
    return (
      <Select {...this.props} >
        {this.props.emptyLabel && <Option key="" value="">{this.props.emptyLabel}</Option>}
        {this._createContent()}
      </Select>
    );
  }
}
