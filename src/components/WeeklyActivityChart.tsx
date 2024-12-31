// src/components/WeeklyActivity.tsx
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
 

ChartJS.register(BarElement, CategoryScale,LinearScale,Tooltip,Title,Legend);
 
 
const WeeklyActivityChart: React.FC = () => {
      
    console.log("Weekly activity page...");
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: "Deposits",
                data: [50, 30, 40, 60, 70, 20, 30],
                backgroundColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 0.23,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,                 
            },
            {
                label: "Withdrawals",
                data: [20, 40, 50, 30, 10, 30, 40],
                backgroundColor: 'rgba(7, 0, 202, 0.96)',
                borderWidth: 0.5,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,

            },
        ],
    };
 
    const options = {
        plugins: {
            datalabels:{display: false}
        },
    };
   
    return (
        <div className="lg:col-span-8 md:col-span-4 sm:col-span-4">
         
            <h2 className="text-xl font-semibold">Weekly Activity Chart</h2>
            <Bar data={data}  options={options}  />
        </div>
    );
};

export default WeeklyActivityChart;