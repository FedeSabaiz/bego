import React from "react";
import {OrderContainer} from "./NewOrder.styled";
import InfoOrder from "../InfoOrder/InfoOrder";

const NewOrder = () => {
  return (
    <OrderContainer>
      <InfoOrder/>
    </OrderContainer>
  );
}
 
export default NewOrder;