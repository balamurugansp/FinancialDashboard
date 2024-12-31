// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Slidebar from "./components/layoutcomponent/SlideBar";
import Header from "./components/layoutcomponent/Header";
import EditProfile from './settings/EditProfile';
const App: React.FC = () => {
  console.log("inside APP.JS ");
  
    return (
        <Router>
        <div className="flex">
        <Slidebar />
        <div className="flex-1">
          <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/settings/EditProfile" element={<EditProfile />} />
            </Routes>
            </div>
        </div>
       
        </Router>
    );
};

export default App;