import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

let barData = [];
let translate;


export default function BarChart(props) {

  barData = props.barData;
  if(props.t !==undefined) {
    translate = Object.assign({}, props.t);
  }


  const data = {
    labels: translate.labels,
    datasets: [{
      label: translate.leyend,
      data: barData,
      backgroundColor: [
        '#143D69',
        '#225784',
        '#1e71b8',
        '#F27983',
        '#F28705',
        '#f2c305',
        '#dddddd'
      ],
      borderColor: [
        '#3E9ffD',
        '#225784',
        '#1e71b8',
        '#F27983',
        '#F28705',
        '#f2c305',
        '#dddddd'
      ],
      borderWidth: 1
    }]
  }

  return (
    <div>
      <h2>{translate.title}</h2>
      <Bar
        data={data}
        width={500}
        height={400}
      />
    </div>
  );
};

