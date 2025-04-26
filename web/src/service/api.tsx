import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL_API || 'http://localhost:3000'; 
console.log(API_URL)

const api = axios.create({
  baseURL: API_URL
});

export default api;