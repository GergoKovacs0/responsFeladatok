import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://surveys-5jvt.onrender.com/api/cars",
});

export default apiClient;
