// src/pages/Dashboard.tsx
import React from 'react';
import MyCard from '../components/MyCard';
import RecentTransactions from '../components/RecentTransactions';
import WeeklyActivityChart from '../components/WeeklyActivityChart';
import ExpenseStatistics from '../components/ExpenseStatistics';
import QuickTransfer from '../components/QuickTransfer';
import BalanceHistoryChart from '../components/BalanceHistoryChart';
 

 
const Dashboard: React.FC = () => {
    console.log("Dashboard page ...");
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
           <div className='grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-4'><MyCard />
           <RecentTransactions /></div>
           <div className='grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-4'><WeeklyActivityChart /><ExpenseStatistics /></div>
           <div className='grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-4'><QuickTransfer /> 
           <BalanceHistoryChart /> </div>
           
           
        </div>
    );
};

export default Dashboard;