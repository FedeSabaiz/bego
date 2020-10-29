import styled from "styled-components";

export const OnlineContainer = styled.div`
  height: 39.96px;
  width: 88.96px;
  background: linear-gradient(180deg, #080f15 0%, #040b11 100%);
  box-shadow: inset -2px -2px 3px 0 #1c232a, inset 2px 2px 3px 0 #000000;
  margin: 0 0 0 29px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: absolute;
  top: 129px;

  & svg {
    height: 36.97px;
    width: 36.9px;
  }

  & p {
    height: 9px;
    width: 33px;
    color: #c1c7d0;
    font-family: Avenir-heavy;
    font-size: 6.5px;
    font-weight: 900;
    letter-spacing: 1.08px;
    line-height: 9px;
    margin: 0 0 0 7.06px;
  }
`;
