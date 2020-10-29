import React from "react";
import {AcceptJobContainer} from "./AcceptJob.styled";
import indicator from "../../assets/img/indicator.png";

const AcceptJob = () => {
  return ( 
    <AcceptJobContainer>
      <p>You will earn <span>40 Points</span></p>
      <button>Accept</button>
      <img src={indicator} alt="Indicator"></img>
    </AcceptJobContainer>
  );
}
 
export default AcceptJob;