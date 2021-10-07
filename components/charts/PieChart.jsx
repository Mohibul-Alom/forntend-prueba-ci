import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
    labels: [
        '- de 70',
        '70-79',
        '80-89',
        '90-109',
        '110-119',
        '120-129',
        '130+',
    ],
    datasets: [{
        data: [12,11,14,32,18,10,30],
        backgroundColor: [
            '#143D69',
            '#225784',
            '#1e71b8',
            '#F27983',
            '#F28705',
            '#f2c305',
            '#dddddd'
        ],
        hoverBackgroundColor: [
            '#3E9ffD',
            '#225784',
            '#1e71b8',
            '#F27983',
            '#F28705',
            '#f2c305',
            '#dddddd'
        ]
    }]
};

export default function PieChart() {
    return (
    <div>
        <h1>Distribucion general y nivel internacional de las puntuaciones de CI</h1>
        <Pie
            data={data}
            width={400}
            height={400}
        />
    </div>
    )
}

