import axios from "axios";

const API_URL = import.meta.env.REACT_APP_BASE_URL_API || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL
});

export default api;