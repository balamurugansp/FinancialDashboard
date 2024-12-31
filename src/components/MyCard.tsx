// src/components/MyCard.tsx
import React from 'react';

const cards = [
    { id: 1, name: "John Doe", number: "1234 **** **** 3456", balance: 1500 },
    { id: 2, name: "Jane Smith", number: "2345 **** ****  4567", balance: 2500 },
];

const MyCard: React.FC = () => {
  console.log("mycard page...");
    return (
        
        <div className="lg:col-span-8 md:col-span-4 sm:col-span-4">
           
           <div className='flex justify-between mb-6 items-center'><h2 className="text-xl font-semibold">My Cards</h2> 
           <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded justify-end">See All</button> </div>
           
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 " >
                {cards.map(card => (
                    <div key={card.id} className="border p-4 rounded-lg bg-gray-800 rounded-lg p-6 text-white ">
                        <p className="text-gray-500">Balance</p>
                        <p className="text-lg font-semibold">${card.balance.toFixed(2)}</p>
                        <p className="text-gray-500">Card Holder </p>
                        <h3 className="text-italic">{card.name}</h3>
                        <p className="text-gray-500">Card Number</p>
                        <p className="text-lg font-semibold">{card.number.replace(/\d(?=\d{4})/g, "•")}</p>
                        
                        <div className="w-8 h-4 bg-gray-600 rounded-full"></div>
                    </div>
                ))}
            </div> 
            
        </div>
    );
};

export default MyCard;