// src/app/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',  // URL de tu backend Flask
});

// Interceptor para añadir el token JWT a las peticiones
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;