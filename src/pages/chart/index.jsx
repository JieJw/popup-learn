import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import echarts from "../../charts/echarts";
import getOption from "../../charts/defaultOption";

const Chart = (props) => {
  const [options, setOptions] = useState({});
  useEffect(() => {
    const defaultOption = {
      xAxis: {
        data: ["1月", "2月", "3月"],
      },
      series: [
        {
          type: "line",
          data: [10, 20, 30],
        },
      ],
    };
    setOptions(getOption(defaultOption));
  }, []);
  return (
    <ReactEcharts option={options} noMerge={true} theme="bright"></ReactEcharts>
  );
};

export default Chart;
