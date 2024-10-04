// src/components/VehicleForm.js
import React, { useState } from 'react';
import { addVehicle } from '../api/api';

const VehicleForm = () => {
  const [licensePlate, setLicensePlate] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addVehicle({ license_plate: licensePlate, model, color });
    setLicensePlate('');
    setModel('');
    setColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Vehicle</h2>
      <input
        type="text"
        placeholder="License Plate"
        value={licensePlate}
        onChange={(e) => setLicensePlate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        required
      />
      <button type="submit">Add Vehicle</button>
    </form>
  );
};

export default VehicleForm;
