import styled from "styled-components";

export const InfoOrderContainer = styled.div`
  width: 100%;
`;

export const Order = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .new-order {
    height: 26px;
    width: 99px;
    color: #ffffff;
    font-family: Avenir-heavy;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 26px;
    margin: 36px 0 0 33px;
  }

  .order-date {
    height: 26px;
    width: 176px;
    color: #c1c7d0;
    font-family: Avenir-roman;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 26px;
    margin: 0 0 0 33px;
    display: flex;
    align-items: center;
  }

  .oval {
    background: #ffffff;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin: 5px;
  }
`;
