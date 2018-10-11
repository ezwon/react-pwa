import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {message} from "antd";

import AppCard from "@ant-components/Section";

import DetailsForm from "./components/DetailsForm";
import SecurityForm from "./components/SecurityForm";
import OthersForm from "./components/OthersForm";
import ProfileBox from "./components/ProfileBox";

import {makeSelectUserId} from "@modules/session/selectors";

import {
  profileUserDetails,
  profileUserImage,
  profileOtherUserDetails,
} from "./selectors";

import {
  profileGetUserDetails,
  profileUpdateUserDetails,
  profileChangePassword,
  profileUpdateUserImage,
  profileUpdateBackupEmail,
  profileGetOtherUserDetails,
} from "./actions";
import {Wrapper} from "./styles";

const formItemLayout = {
  labelCol: {
    md: {span: 24},
    lg: {span: 6},
  },
  wrapperCol: {
    md: {span: 24},
    lg: {span: 18},
  },
};

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    if (this.props.userId){
      this.getUserDetails(this.props.userId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userId !== this.props.userId) {
      this.getUserDetails(nextProps.userId);
    }
  }

  getUserDetails = userId => {
    const component = this;
    this.props.profileGetUserDetails({
      id: userId,
      onSuccess: result => {
        component.getOtherUserDetails(result.auth0);
      },
    });
  };

  getOtherUserDetails = userId => {
    this.props.profileGetOtherUserDetails(userId);
  };

  handleSuccess = msg => {
    message.success(msg);
  };

  handleFormSubmit = data => {
    const {
      profileGetUserDetails,
      profileUpdateUserDetails,
      profileUserImage,
      userDetails,
    } = this.props;
    const component = this;
    this.setState({saving: true});
    data.userImage = profileUserImage;
    Object.keys(data).forEach(key => data[key] == null && delete data[key]);
    const payload = Object.assign({}, userDetails, data);
    profileUpdateUserDetails({
      payload,
      onSuccess: () => {
        component.handleSuccess();
        profileGetUserDetails(component.props.userId);
      },
    });
  };

  handleChangePassword = (data, id, onSuccess) => {
    this.props.profileChangePassword({
      data,
      id,
      onSuccess: () => {
        if (onSuccess) {
          onSuccess();
        }
      },
    });
  };

  handleChangeAvatar = (data, id, onSuccess) => {
    this.props.profileUpdateUserImage({
      data,
      id,
      onSuccess: result => {
        if (onSuccess) {
          onSuccess(result);
        }
      },
    });
  };

  handleUpdateBackupEmail = (data, id, onSuccess) => {
    this.props.profileUpdateBackupEmail({
      data,
      id,
      onSuccess: () => {
        if (onSuccess) {
          onSuccess();
        }
      },
    });
  };

  render() {
    const {
      userDetails,
      otherUserDetails,
      profileUpdateUserImage,
      profileUserImage,
    } = this.props;

    return (
      <Wrapper>
        <AppCard style={{padding: 0, width: 330, display: "inline-block"}}>
          <ProfileBox
            data={userDetails}
            otherUserDetails={otherUserDetails}
            profileUpdateUserImage={profileUpdateUserImage}
            profileUserImage={profileUserImage}
            handleChangeAvatar={this.handleChangeAvatar}
            getOtherUserDetails={this.getOtherUserDetails}
            handleSuccess={this.handleSuccess}
          />
        </AppCard>
        <AppCard
          style={{
            width: "calc(100% - 380px)",
            margin: "0 0 0 50px",
            verticalAlign: "top",
            display: "inline-block",
          }}
        >
          <DetailsForm
            data={userDetails}
            handleFormSubmit={this.handleFormSubmit}
            formItemLayout={formItemLayout}
          />

          <SecurityForm
            data={userDetails}
            handleFormSubmit={this.handleChangePassword}
            formItemLayout={formItemLayout}
            handleSuccess={this.handleSuccess}
          />

          <OthersForm
            data={userDetails}
            otherUserDetails={otherUserDetails}
            handleFormSubmit={this.handleUpdateBackupEmail}
            formItemLayout={formItemLayout}
            handleSuccess={this.handleSuccess}
          />
        </AppCard>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    userDetails: profileUserDetails(state),
    otherUserDetails: profileOtherUserDetails(state),
    profileUserImage: profileUserImage(state),
    userId: makeSelectUserId(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      profileGetUserDetails,
      profileUpdateUserDetails,
      profileUpdateUserImage,
      profileChangePassword,
      profileUpdateBackupEmail,
      profileGetOtherUserDetails,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
