// src/components/QuickTransfer.tsx
import React, { useState } from 'react';

const contacts = [
    { id: 1, name: "Alice Johnson", role: "Friend", img: "https://via.placeholder.com/40" },
    { id: 2, name: "Bob Williams", role: "Family", img: "https://via.placeholder.com/40" },
];

const QuickTransfer: React.FC = () => {
    console.log("Quick transfer page...");
    const [amount, setAmount] = useState('');

    const handleSend = () => {
        console.log(`Sending $${amount}`);
        setAmount('');
    };

    return (
        <div className="lg:col-span-4 md:col-span-4 sm:col-span-4">
            <h2 className="text-xl font-semibold">Quick Transfer</h2>
            <div className="flex space-x-4 mb-4">
                {contacts.map(contact => (
                    <div key={contact.id} className="flex items-center border p-2 rounded">
                        <img src={contact.img} alt={contact.name} className="rounded-full mr-2" />
                        <div>
                            <p>{contact.name}</p>
                            <p className="text-sm text-gray-500">{contact.role}</p>
                        </div>
                    </div>
                ))}
            </div>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="border p-2 rounded mr-2"
            />
            <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </div>
    );
};

export default QuickTransfer;