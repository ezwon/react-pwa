import React, { Component } from "react";
import Icon404 from "../../../resources/images/icons/404.svg";
// import Button from "../../../app/ant-components/Button";
// import { Button } from "antd";
import { NotFoundPage } from "./styles";

export default class Page404 extends Component {
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
        {/* <Icon404 /> */}
        <img src={Icon404} />
        <span className="title">Offline</span>
        <p>Please connect to network to load content for this page.</p>
        {/* <Button type="primary"> Go back </Button> */}
      </NotFoundPage>
    );
  }
}
