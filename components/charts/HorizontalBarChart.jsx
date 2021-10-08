import React from 'react';
import { Bar } from 'react-chartjs-2';


let translate;



const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

export default function HorizontalBarChart (props) {

  if(props.t !==undefined) {
    translate = Object.assign({}, props.t);
  }

  const data = {
    labels: translate.labels, 
    datasets: [
      {
        label: translate.leyend,
        data: [94,86,100,97,97,93,102,94,94,98,95,104,99,102,98,95],
        backgroundColor: [
          '#3E9ffD',
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
        borderWidth: 1,
      },
    ],
  };

  return (
  <>
    <div>
      <h1>{translate.title}</h1>
    </div>
    <Bar 
        data={data} 
        options={options}
        height={400}
    />
  </>
  )
};

