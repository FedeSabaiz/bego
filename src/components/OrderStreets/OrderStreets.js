import React from "react";
import {
  OrderStreetsContainer,
  ImageContainer,
  StreetsContainer,
} from "./OrderStreets.styled";
import locationTo from "../../assets/img/buttonLocation.png";
import locationFrom from "../../assets/img/locationFrom2.png";

const OrderStreets = () => {
  return (
    <OrderStreetsContainer>
      <ImageContainer>
        <img className="image-to" src={locationTo} alt="location to" />
        <div className="line-dots"></div>
        <img className="image-from" src={locationFrom} alt="location from" />
      </ImageContainer>
      <StreetsContainer>
        <div className="to-destination">
          <p className="to-title">PICKUP</p>
          <p>123 Main Street, Unit 21 New York, 10001</p>
        </div>
        <div className="from-destination">
          <p className="from-title">DROPOFF</p>
          <p>476 McMaster Way, Pitsburg, PA 15222</p>
        </div>
      </StreetsContainer>
    </OrderStreetsContainer>
  );
};

export default OrderStreets;
