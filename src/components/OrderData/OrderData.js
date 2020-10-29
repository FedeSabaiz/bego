import React from "react";
import { OrderDataContainer, TimeContainer, DistanceContainer, PriceContainer } from "./OrderData.styled";
import { ReactComponent as Clock } from "../../assets/svg/clock.svg";
import {ReactComponent as Dashboard} from "../../assets/svg/dashboard.svg";
import {ReactComponent as Price} from "../../assets/svg/price.svg";

const OrderData = () => {
  return (
    <OrderDataContainer>
      <TimeContainer>
        <p className="time-title">APROX. TIME</p>
        <div className="display-time">
          <Clock />
          <p className="aprox-time">4hr 30 min</p>
        </div>
      </TimeContainer>
      <DistanceContainer>
        <p className="distance-title">DISTANCE</p>
        <div className="display-distance">
          <Dashboard/>
          <p className="distance">60 KM</p>
        </div>
      </DistanceContainer>
      <PriceContainer>
        <p className="price-title">PRICE</p>
        <div className="display-price">
          <Price/>
          <p className="price">$ 120</p>
        </div>
      </PriceContainer>
    </OrderDataContainer>
  );
};

export default OrderData;
