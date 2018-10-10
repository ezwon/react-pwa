import React, { Component } from "react";
import styled from "styled-components";
import { color } from "../../common/styles/helpers-styles";

export const Wrapper = styled.section`
  padding: 110px 50px;
  background: ${color.white};
  border-radius: 10px;
  min-height: 300px;
  .form-header {
    color: #94a5c0;
    font-size: 23px;
    margin-bottom: 30px;
  }
  hr {
    border: 0;
    height: 1px;
    background: #e6eaf2;
    margin: 50px 2px;
  }
`;

export default class AppWrapper extends Component {
  render() {
    return <Wrapper {...this.props} />;
  }
}
