// src/pages/Dashboard.js
import React from 'react';
import EntryExitLog from '../components/EntryExitLog';
import VehicleForm from '../components/VehicleForm';
import VehicleList from '../components/VehicleList';

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Parking Management Dashboard</h1>
      <VehicleForm />
      <VehicleList />
      <EntryExitLog />
    </div>
  );
};

export default Dashboard;
