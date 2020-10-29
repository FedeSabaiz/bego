import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 31px 0 0;

  .circle-background,
  .circle-progress {
    fill: none;
  }

  .circle-background {
    stroke: #494c50;
  }

  .circle-progress {
    stroke: #ffbe00;
  }

  .chart-text {
    fill: #fff;
    font-size: 3em;
    font-weight: bold;
  }
`;
