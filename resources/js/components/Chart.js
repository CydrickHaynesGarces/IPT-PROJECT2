// src/components/Chart.js
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler, ArcElement } from 'chart.js'; // Import ArcElement for pie chart

// Register required plugins
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, Filler, ArcElement);

const Chart = ({ data, options, title, type }) => {
    return (
        <div className="chart-container">
            <h2>{title}</h2>
            {type === 'line' ? (
                <Line data={data} options={options} />
            ) : type === 'pie' ? (
                <Pie data={data} options={options} />
            ) : null}
        </div>
    );
};

export default Chart;
