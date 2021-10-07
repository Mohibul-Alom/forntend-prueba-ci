import React,{useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

let dataLabels = [];
let barData = [];

const data = {
  labels: dataLabels,
  datasets: [{
    label: 'CI promedio',
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

export default function BarChart(props){

    dataLabels = props.dataLabels;
    barData = props.barData;

    useEffect(() => {
      data.labels = dataLabels;
      data.datasets[0].data = barData;
    }, [props])

    return (
      <div>
        <h2>Distribucion por grupo de edad</h2>
        <Bar
          data={data}
          width={500}
          height={400}
        />
      </div>
    );
};

