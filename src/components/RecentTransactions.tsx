// src/components/RecentTransactions.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


const transactions = [
    { id: 1, description: "Grocery", date: "2023-10-01", amount: -50 },
    { id: 2, description: "Salary", date: "2023-10-02", amount: 1500 },
    { id: 3, description: "Ironing", date: "2023-10-03", amount: -30 },
    { id: 4, description: "EMI", date: "2023-10-03", amount: -300 },
    { id: 5, description: "Food", date: "2023-10-05", amount: -20 },
    
];

const RecentTransactions: React.FC = () => {
    console.log("Recent transactions page...");
    return (
        <div className="col-span-4 justify-center">
            <h2 className="text-xl font-semibold  text-black mb-6">Recent Transactions</h2>

            <div className="border p-4 rounded-lg bg-white-800 rounded-lg p-6 text-white" >
            

            
            <ul className="space-y-4">
                {transactions.map(tx => (
                    <li key={tx.id} className={`mb-2  ${tx.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                       <div className='flex flex-row justify-between'> 
                       <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full text-white">
                         <FontAwesomeIcon icon={faHome}/></div>
                         <div className="align-left"><p >{tx.description}</p>  {tx.date}</div>
                            <span>${Math.abs(tx.amount).toFixed(2)}</span>  
                       </div>
                    </li>
                ))}
            </ul>

                


        </div></div>
    );
};

export default RecentTransactions;