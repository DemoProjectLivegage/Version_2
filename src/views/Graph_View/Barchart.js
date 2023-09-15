import React, { useState, useEffect } from 'react';
import ReactEcharts from "echarts-for-react";
import axios from 'axios';

function Barchart(props) {

  const [date, setDate] = useState([]);
  const [principal, setPrincipal] = useState([]);
  const [upb, setUPB] = useState([]);
  const [interest, setInterest] = useState([]);
  // const [pieData,setPieData] =useState('');
  // const [pieData,setPieData] =useState('');
  useEffect(() => {
    axios.get(`http://localhost:5000/api/Dashboard/bar/${props.id}`).then((response) => {
      setDate(response.data.map(item => item.due_Date))
      setPrincipal(response.data.map(item => item.principal_Amount))
      setUPB(response.data.map(item => item.upB_Amount))
      setInterest(response.data.map(item => item.interest_Amount))
    })

  }, [])

  const [config, setConfig] = useState({
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
  });

  const labelOption = {
    show: true,
    position: config.position,
    distance: config.distance,
    align: config.align,
    verticalAlign: config.verticalAlign,
    rotate: config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
      name: {}
    }
  };
  const options = {

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },

    legend: {
      top: "5%",
      left: "center",
      selectedMode: true,
      data: ["UPB",'Principal', 'Interest']
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },

    xAxis: [
      {
        type: 'category',
        axisTick: { show: true },
        axisLabel: {
          rotate: 45, // Rotate the labels by 45 degrees
        },
        data: date
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'UPB',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: upb
      },

      {

        name: 'Principal',

        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: principal
      },
      {
        name: 'Interest',
        type: 'bar',
        label: labelOption,
        emphasis: {
          focus: 'series'
        },
        data: interest
      }
    ]
  };

  return (
    <div>
      <ReactEcharts option={options} />
    </div>
  );
}

export default Barchart;
