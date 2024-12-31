// src/components/BalanceHistoryChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,  PointElement ,LineElement,Tooltip} from 'chart.js';
ChartJS.register(PointElement,LineElement,Tooltip);
const BalanceHistoryChart: React.FC = () => {
    console.log("balance history page...");
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Balance Trend',
                data: [1000, 1500, 1200, 1700, 1600, 2000],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.4
            },
        ],
    };
    const options = {
        plugins: {
            datalabels:{display: false}
        },
    };
    return (
        <div className="lg:col-span-8 md:col-span-6 sm:col-span-4">
            <h2 className="text-xl font-semibold">Balance History Chart</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default BalanceHistoryChart;