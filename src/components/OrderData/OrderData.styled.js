import styled from "styled-components";

export const OrderDataContainer = styled.div`
  width: 100%;
  height: 71px;
  margin: 10px 0 0 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #1C232A;
`;

export const TimeContainer = styled.div`
  width: 106px;
  height: 48px;
  margin: 0 17px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 10px;
    height: 10px;
    margin: 0 5px 0 0;
  }

  .time-title {
    height: 19px;
    width: 67px;
    color: #494c50;
    font-family: Avenir-Medium;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
    margin: 0 0 9px 0;
  }

  .display-time {
    display: flex;
    align-items: center;
  }

  .aprox-time {
    height: 20px;
    width: 73px;
    color: #c1c7d0;
    font-family: Avenir-heavy;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 19px;
    text-align: right;
  }
`;

export const DistanceContainer = styled.div`
  width: 84px;
  height: 48px;
  margin: 0 17px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 14px;
    height: 10.5px;
    margin: 0 9px 0 0;
  }

  .distance-title {
    height: 19px;
    width: 52px;
    color: #494c50;
    font-family: Avenir-Medium;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
    margin: 0 0 9px 0;
  }

  .display-distance {
    display: flex;
    align-items: center;
  }

  .distance {
    height: 20px;
    width: 44px;
    color: #c1c7d0;
    font-family: Avenir-heavy;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 19px;
    text-align: right;
  }
`;

export const PriceContainer = styled.div`
  width: 73px;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    width: 12px;
    height: 11.2px;
    margin: 0 5px 0 0;
  }

  .price-title {
    height: 19px;
    width: 29px;
    color: #494c50;
    font-family: Avenir-Medium;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 26px;
    margin: 0 0 9px 0;
  }

  .display-price {
    display: flex;
    align-items: center;
  }

  .price {
    height: 20px;
    width: 44px;
    color: #c1c7d0;
    font-family: Avenir-heavy;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 19px;
    text-align: right;
  }
`;
