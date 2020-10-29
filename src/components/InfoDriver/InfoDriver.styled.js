import styled from "styled-components";

export const DriverContainer = styled.div`
  width: 114px;
  height: 48px;
  background: #1c232a;
  box-shadow: inset -2px -2px 4px 0 #1C232A, inset 0 2px 4px 0 #000000;
  border-radius: 24px;
  display: flex;
  align-items: center;

  .profile {
    height: 33px;
    width: 33px;
    margin: 0 0 0 5px;
  }
`;

export const TextDriver = styled.div`
  width: 53px;
  height: 100%;
  margin: 0 0 0 8px;

  .coin {
    color: #FFBE00;

  }

  .price {
    height: 26px;
    width: 53px;
    height: 20px;
    color: #ededed;
    font-family: Avenir-heavy;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 26px;
    margin-top: 2px;
  }

  .points {
    height: 26px;
    width: 53px;
    height: 20px;
    color: #EDEDED;
    font-family: Avenir-book;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 26px;
  }
`;
