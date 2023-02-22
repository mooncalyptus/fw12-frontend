import axios from "axios";

const http = (token) => {
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  
  const instance = axios.create({
    baseURL: 'http://localhost:5555',
    // baseURL: process.env.REACT_DATA_BACKEND || 'https://fw12-backend-three.vercel.app',
    headers,
    keepAlive: true,
  });
  return instance;
};

export default http;

