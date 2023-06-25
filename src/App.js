import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.js';
import Projects from './pages/Projects.js';
import Opportunity from './pages/Opportunity.js';

import CustomerDetails from './pages/CustomerDetails.js';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Project" element={<Projects />} />
          <Route path="/customerdetails" element={<CustomerDetails />} />
          <Route path="/opportunity" element={<Opportunity />} />
          
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;