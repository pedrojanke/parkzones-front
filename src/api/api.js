import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Preciso alterar para meu endpoint
});

export const getVehicles = () => api.get('/vehicles');
export const addVehicle = (vehicle) => api.post('/vehicles', vehicle);
export const getEntryExitLogs = () => api.get('/entries-exits');
export const addEntryExitLog = (log) => api.post('/entries-exits', log);
export const getRates = () => api.get('/rates');
export const addRate = (rate) => api.post('/rates', rate);
export const getUsers = () => api.get('/users');
