import React, { Component } from "react";
import { Banner } from "../../styles";
import Vector from "@resources/images/bannervector.png";
import FunnelFluxLogo from "@resources/images/logo/FunnelFlux.svg";
import STMLogo from "@resources/images/logo/STM.svg";
import iStackTrainingLogo from "@resources/images/logo/iStackTraining.svg";
import AWCAsia from "@resources/images/logo/AWC_Asia.png";

import config from "@config";

const branches = {
  [config.BRANCHES.TRAINING]: iStackTrainingLogo,
  [config.BRANCHES.AWC_ASIA]: AWCAsia,
  [config.BRANCHES.FUNNEL_FLUX]: FunnelFluxLogo,
  [config.BRANCHES.STM]:STMLogo,
};
class ShopBanner extends Component {
  render() {
    const { branch_id } = this.props;
    return (
      <Banner className={`specific ${branch_id}`}>
        <img src={Vector} className="prefix" />
        <div className="content">
          <img src={branches[branch_id]} />
        </div>
        <img src={Vector} className="suffix" />
      </Banner>
    );
  }
}

export default ShopBanner;
