import React, {Component} from "react";
import {Spin, Button, message} from "antd";
import {ProfileBarWrapper} from "../styles";

class ProfileBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false,
    };
  }

  uploadAvatar = (event) => {
    const {
      data,
      getOtherUserDetails,
      handleChangeAvatar,
    } = this.props;
    const file = event.target.files[0];
    const fData = new FormData();

    fData.append("picture", file);

    this.setState({saving: true});

    handleChangeAvatar(fData, data.auth0, result => {
      message.success("Avatar successfully changed");
      getOtherUserDetails(result.user_id);
      this.setState({saving: false});
    });
  };

  render() {
    const {data, otherUserDetails} = this.props;

    const avatar = otherUserDetails.app_metadata.picture || otherUserDetails.picture;

    return (
      <ProfileBarWrapper enctype="multipart/form-data">
        <h1>My Details</h1>
        <div>
          <div
            className="profile-image"
            style={{
              backgroundImage: `url(${avatar})`,
            }}
          >
            <Spin spinning={this.state.saving}/>
          </div>
          <Button
            type="primary"
            shape="circle"
            icon="camera-o"
            disabled={this.state.saving}
          >
            <input
              type="file"
              accept="image/*"
              onChange={this.uploadAvatar}
            />
          </Button>
        </div>
        <h2>{data.full_name}</h2>
        <hr/>
        <h3>Company</h3>
        <span>{data.company}</span>
        <h3>Email</h3>
        <span>{data.email}</span>
        <h3>Invoice Billing Address</h3>
        <span>{data.companyAddress}</span>
      </ProfileBarWrapper>
    );
  }
}

export default ProfileBox;
