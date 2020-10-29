import React from "react";
import {InfoOrderContainer, Order} from "./InfoOrder.styled";
import Chart from "../Chart/Chart";
import OrderData from "../OrderData/OrderData";
import {OrderDataContainer} from "../OrderData/OrderData.styled";

const InfoOrder = () => {
  return (
    <InfoOrderContainer>
      <Order>
        <div>
          <p className="new-order">New Order</p>
          <p className="order-date">November 25 2020 <span className="oval"></span> 11:30</p>
        </div>
        <Chart />
      </Order>
      <OrderData/>
    </InfoOrderContainer>
  );
}
 
export default InfoOrder;