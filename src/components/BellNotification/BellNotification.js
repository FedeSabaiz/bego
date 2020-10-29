import React from "react";
import { ReactComponent as Bell } from "../../assets/svg/bell.svg";
import { BellContainer } from "./BellNotification.styled";

const BellNotification = () => {
  return (
    <BellContainer>
      <Bell />
    </BellContainer>
  );
};

export default BellNotification;
