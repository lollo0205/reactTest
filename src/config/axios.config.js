import axios from "axios";
console.log('process.env.URL_BE', process.env.REACT_APP_URL_BE)
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_BE,
  timeout: 1000,
});
export default axiosInstance;