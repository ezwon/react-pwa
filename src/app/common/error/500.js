import React, { Component } from "react";
import Icon500 from "@resources/images/icons/500.svg";
import { NotFoundPage } from "./styles";

export default class Page500 extends Component {
  componentDidMount() {
    const element = document.getElementById("ipl-progress-indicator");
    element.classList.add("available");
    setTimeout(() => {
      element.innerHTML = "";
    }, 2000);
  }
  render() {
    return (
      <NotFoundPage>
        <img src={Icon500} />
        <span className="title">Server error</span>
        <p>Sorry, something went wrong.</p>
      </NotFoundPage>
    );
  }
}
