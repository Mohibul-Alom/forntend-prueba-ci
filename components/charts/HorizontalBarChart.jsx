import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: [
      'Secundaria',
      'Escuela agrícola',
      'Arquitectura y planificacion',
      'Arte y diseño',
      'Comercio y gestión',
      'Educación',
      'Técnica y tecnología',
      'Geografía y geología',
      'Literatura y cultura',
      'Idiomas y filología',
      'Derecho',
      'Matemáticas y TI',
      'Ciencias Médicas',
      'Ciencias Naturales',
      'Ciencias Sociales',
      'Comunicación e información'
    ],
  datasets: [
    {
      label: 'CI promedio',
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
      position: 'right',
    },
  },
};

const HorizontalBarChart = () => (
  <>
    <div>
      <h1>Distribución por campo de conocimiento</h1>
    </div>
    <Bar 
        data={data} 
        options={options}
        height={400}
        width={500}
    />
  </>
);

export default HorizontalBarChart;
