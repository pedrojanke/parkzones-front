// src/components/VehicleList.js
import React, { useEffect, useState } from 'react';
import { getVehicles } from '../api/api';

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await getVehicles();
      setVehicles(response.data);
    };
    
    fetchVehicles();
  }, []);

  return (
    <div className="container">
      <h2>Vehicle List</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.vehicle_id}>
            {vehicle.license_plate} - {vehicle.model} - {vehicle.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
