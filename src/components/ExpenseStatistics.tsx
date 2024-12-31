// src/components/ExpenseStatistics.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS,Tooltip,ArcElement,Legend  } from 'chart.js';
import ChartDataLables from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement,Tooltip,Legend,ChartDataLables); 
 
 
 const ExpenseStatistics: React.FC = () => {
     
    const data = {
        labels: ['Entertainment', 'Bill Expenses', 'Investments','Others' ],
        datasets: [{
            data: [33, 46, 26,30 ],
            backgroundColor: ["#2C3E50", "#E67E22", "#2980B9", "#000000"], // Colors for each slice
            hoverBackgroundColor: ["#34495E", "#D35400", "#1F618D", "#2C2C2C"], // Hover colors
            borderWidth: 6,
            
        }],

    };

    const options: any = {
        plugins: {
          datalabels:{
            formatter: (value : any, ctx :any) => {
                
            let sum = 0;
            let dataArr = ctx.chart.data.datasets[0].data;
            dataArr.map((data : any) => {
                sum += data;
            });
            let percentage = (value*100 / sum).toFixed(2)+"%";
            
            return percentage;
          },  
          color : "#fff",
          font: { size: 10 , weight: "bold" },
        },
          legend: {
            position: "left" as const,
            labels: {
              boxWidth: 20,
              font: { size: 9 },
            },
          },
        },
      };
    
    return (
        <div className="col-span-4 ">
            <h3 className="text-lg font-semibold mb-4">Expense Statistics</h3>
            <Pie data={data}  options={options}   />
        </div>
    );
};

//  

export default ExpenseStatistics;