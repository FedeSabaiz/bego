import React from "react";
import { ChartContainer } from "./Chart.styled";

const Chart = () => {
  return (
    <ChartContainer>
      <svg width={64} height={64} viewBox={"0 0 100 100"}>
        <circle
          className="circle-background"
          cx={100 / 2}
          cy={100 / 2}
          r={(80 - 10) / 2}
          strokeWidth={"13px"}
        />
        <circle
          className="circle-progress"
          cx={100 / 2}
          cy={100 / 2}
          r={(80 - 10) / 2}
          strokeWidth={"13px"}
          transform={`rotate(-90 ${100 / 2} ${100 / 2})`}
          style={{
            strokeDasharray: ((80 - 10) / 2) * Math.PI * 2,
            strokeDashoffset:
              ((80 - 10) / 2) * Math.PI * 2 -
              (((80 - 10) / 2) * Math.PI * 2 * 70) / 100,
          }}
        />
        <path transform="translate(30, 30)" d="M 10, 10 L 30,30 M 30, 10 L 10,30" stroke="#ffbe00" strokeWidth="2" />
      </svg>
    </ChartContainer>
  );
};

export default Chart;
