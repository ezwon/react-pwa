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
        <span className="title">Not Found</span>
        <p>Whoops! The page you are looking for cannot be found.</p>
        {/* <Button type="primary"> Go back </Button> */}
        {/* <p>
        <small>
          <i>{location.pathname}</i>
        </small>
      </p>
      <p>The page you are looking for doesn't exists. Go back.</p> */}
      </NotFoundPage>
    );
  }
}
