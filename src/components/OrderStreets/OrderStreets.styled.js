import styled from "styled-components";

export const OrderStreetsContainer = styled.div`
  width: 100%;
  height: 110.5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1C232A;
  padding-bottom: 15px;
`;

export const ImageContainer = styled.div`
  width: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 11px 0 33px;

  .image-to {
    width: 20px;
    height: 20px;
    margin: 15px 0 2.92px 0;
  }

  .image-from {
    width: 35px;
    height: 35px;
  }

  .line-dots {
    display: block;
    box-sizing: border-box;
    height: 27px;
    width: 2px;
    border: 1px dashed #979797;
    transform: rotate(-1deg);
  }
`;

export const StreetsContainer = styled.div`
  width: 278px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .to-title,
  .from-title {
    height: 16px;
    width: 241px;
    color: #494c50;
    font-family: Avenir-roman;
    font-size: 10px;
    letter-spacing: 0;
    line-height: 15px;
  }

  .to-destination,
  .from-destination {
    width: 278px;
    color: #c1c7d0;
    font-family: Avenir-roman;
    font-size: 13px;
    letter-spacing: 0;
    line-height: 15px;
  }

  .to-destination {
    margin: 0 0 12px 0;
  }
`;
