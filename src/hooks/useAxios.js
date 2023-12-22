import axios from "axios";

const axiosCustom = axios.create({
  baseURL: "https://todo-server-wheat.vercel.app",
  timeout: 1000,
});

export default axiosCustom;
