import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['< 18 años', '18-39 años', '40-59 años', '59-79 años', '80 años >'],
  datasets: [{
    label: 'CI promedio',
    data: [92, 98, 97, 93, 76],
    backgroundColor: [
        '#143D69',
        '#225784',
        '#1e71b8',
        '#F27983',
        '#F28705',
    ],
    borderColor: [
        '#3E9ffD',
        '#225784',
        '#1e71b8',
        '#F27983',
        '#F28705',
    ],
    borderWidth: 1
  }]
}

export default function BarChart(){
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

