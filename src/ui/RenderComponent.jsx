import React from "react";
import PersonalInformation from "./PersonalInformation";
import Billing from "./Billing";
import OrderHistory from "./OrderHistory";
import GiftCards from "./GiftCards";

function RenderComponent({ index }) {
  switch (index) {
    case 0:
      return <PersonalInformation />;
    case 1:
      return <Billing />;
    case 2:
      return <OrderHistory />;
    case 3:
      return <GiftCards />;
    default:
      return <h2>Working...</h2>;
  }
}

export default RenderComponent;
