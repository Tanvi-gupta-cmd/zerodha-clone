import axios from "axios";

const API = axios.create({
  baseURL: "https://zerodha-backend-svg0.onrender.com",
});

export default API;