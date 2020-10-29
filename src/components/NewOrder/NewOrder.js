import React from "react";
import {OrderContainer} from "./NewOrder.styled";
import InfoOrder from "../InfoOrder/InfoOrder";
import OrderStreets from "../OrderStreets/OrderStreets";
import UnitInfo from "../../components/UnitInfo/UnitInfo";
import AcceptJob from "../../components/AcceptJob/AcceptJob";

const NewOrder = () => {
  return (
    <OrderContainer>
      <InfoOrder/>
      <OrderStreets/>
      <UnitInfo/>
      <AcceptJob/>
    </OrderContainer>
  );
}
 
export default NewOrder;