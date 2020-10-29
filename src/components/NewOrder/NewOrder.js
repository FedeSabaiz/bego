import React from "react";
import {OrderContainer} from "./NewOrder.styled";
import InfoOrder from "../InfoOrder/InfoOrder";
import OrderStreets from "../OrderStreets/OrderStreets";

const NewOrder = () => {
  return (
    <OrderContainer>
      <InfoOrder/>
      <OrderStreets/>
    </OrderContainer>
  );
}
 
export default NewOrder;