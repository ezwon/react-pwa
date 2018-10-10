import React, { Component } from "react";
import { Radio } from "antd";

export default class AntRadioGroup extends Component {
  render() {
    const { items } = this.props;
    return (
      <Radio.Group {...this.props}>
        {items.map(val => {
          return (
            <Radio.Button key={val.value} value={val.value}>
              {val.label}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    );
  }
}
