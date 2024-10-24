// src/utils/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { token } = response.data;
    localStorage.setItem('token', token);
    return true;
  } catch (error) {
    return false;
  }
};

export const register = async (email, password) => {
  try {
    await axios.post(`${API_URL}/register`, { email, password });
    return true;
  } catch (error) {
    return false;
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
