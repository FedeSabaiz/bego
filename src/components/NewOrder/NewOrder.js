import React from "react";
import {OrderContainer} from "./NewOrder.styled";
import InfoOrder from "../InfoOrder/InfoOrder";
import OrderStreets from "../OrderStreets/OrderStreets";
import UnitInfo from "../../components/UnitInfo/UnitInfo";

const NewOrder = () => {
  return (
    <OrderContainer>
      <InfoOrder/>
      <OrderStreets/>
      <UnitInfo/>
    </OrderContainer>
  );
}
 
export default NewOrder;