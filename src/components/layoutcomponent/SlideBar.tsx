import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: "🏠" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
    { name: "Transactions", path: "/transactions", icon: "💸" },
    { name: "Accounts", path: "/accounts", icon: "👤" },
    { name: "Investments", path: "/investments", icon: "📊" },
    { name: "Credit Cards", path: "/credit-cards", icon: "💳" },
    { name: "Loans", path: "/loans", icon: "💰" },
   
    { name: "My Privileges", path: "/privileges", icon: "🎁" },
  ];

  return (
    <div className="bg-gray-800 text-white h-screen p-5 w-64">
      <img src="/logo.png" /> 
      
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
