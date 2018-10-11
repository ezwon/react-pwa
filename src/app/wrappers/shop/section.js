import React from "react";
import _ from "lodash";
import Shop from "@modules/shop";

import config from "@config";

export default props => {
  "use strict";
  switch (_.get(props, "match.params.section", "")) {
    case "all":
    default:
      return <Shop title="All" />;
    case "training":
      return <Shop title="iStack Training" branch_id={config.BRANCHES.TRAINING} />;
    case "funnelflux":
      return <Shop title="FunnelFlux" branch_id={config.BRANCHES.FUNNEL_FLUX} />;
    case "stm":
      return <Shop title="STM" branch_id={config.BRANCHES.STM} />;
    case "awc-asia":
      return <Shop title="Affiliate World Conferences ASIA" branch_id={config.BRANCHES.AWC_ASIA} />;
  }
};
