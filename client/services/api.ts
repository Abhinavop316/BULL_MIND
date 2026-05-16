import axios from "axios";

const api = axios.create({
  baseURL: process.env.baseURL || "http://localhost:5000/api",
});

export default api;
