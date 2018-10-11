import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {Modal, List, Avatar, Row, Col, Button} from "antd";

import {StyledAnnouncements} from "./styles";
import axios from "axios";

// import Editor from "@modules/common/components/Editor";
import TimeOffs from "@modules/dashboard/components/TimeOffs";

const count = 30;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=picture,name,gender,email,nat&noinfo`;


class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimeOffs: false,
      content: "",
      initLoading: true,
      loading: false,
      data: [],
      list: [],
    };
  }

  getData = (callback) => {
    axios.get(fakeDataUrl).then((res) => {
      callback(res);
    });
  };

  componentDidMount() {
    this.getData((res) => {
      this.setState({
        initLoading: false,
        loading: false,
        data: res.data.results,
        list: res.data.results,
      });
    });
  }

  toggleShowTimeOffs = () => {
    this.setState({showTimeOffs: !this.state.showTimeOffs});
  };


  updateContent = (value) => {
    this.setState({content: value});
  };

  openEditor = (content) => {
    this.setState({
      visible: true,
      content,
    });
  };

  handleOk = () => {
    console.log(this.state.content);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const {showTimeOffs} = this.state;

    return (
      <StyledAnnouncements>
        <Button type="primary" onClick={this.toggleShowTimeOffs}>{showTimeOffs ? "Hide" : "Show"} Time Offs</Button>
        <Row>
          <Col span={showTimeOffs ? 19 : 24}>
            <List
              itemLayout="vertical"
              size="small"
              pagination={{
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 5,
              }}
              dataSource={this.state.list}
              footer={<div><b>ant design</b> footer part</div>}
              renderItem={item => (
                <List.Item key={item.email}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture.medium}/>}
                    title={<span>{item.name.first} {item.name.last}</span>}
                    description={item.email}
                  />
                  <div>
                    <div style={{textAlign: "right"}}>
                      <Avatar icon="user"/>
                      <Avatar>U</Avatar>
                      <Avatar>USER</Avatar>
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                      <Avatar style={{color: '#f56a00', backgroundColor: '#fde3cf'}}>U</Avatar>
                      <Avatar style={{backgroundColor: '#87d068'}} icon="user"/>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </Col>
          {showTimeOffs && (
            <Col span={4} offset={1}>
              <TimeOffs/>
            </Col>
          )}
        </Row>

        <Modal
          title="Edit"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div className="show-select">
            {/*<Editor*/}
              {/*content={this.state.content}*/}
              {/*handleUpdateContent={this.updateContent}/>*/}
          </div>
        </Modal>
      </StyledAnnouncements>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Announcements);
