import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class AntMenu extends Component {
  render() {
    const { items, section, ...rest } = this.props;
    return (
      <Menu {...rest}>
        {items.map(val => {
          if (val.isSubMenu) {
            return (
              <SubMenu
                key={val.subMenuKey}
                title={
                  <span>
                    <Icon type={val.subMenuIcon} />
                    <span>{val.subMenuTitle}</span>
                  </span>
                }
              >
                {val.subMenuRoutes.map(subval => {
                  return (
                    <Menu.Item key={subval.link}>
                      {subval.icon && <Icon type={subval.icon} />}
                      <span>{subval.title}</span>
                      <Link to={subval.link} />
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item key={val.link}>
                {val.icon && <Icon type={val.icon} />}
                <span>{val.title}</span>
                <Link to={val.link} />
              </Menu.Item>
            );
          }
        })}
      </Menu>
    );
  }
}

export default AntMenu;
