import { getAccessToken } from "@/actions/auth";
import axios from "axios";

const apiCaller = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
});

apiCaller.interceptors.request.use(
  async function (config) {
    const accessToken = await getAccessToken();
    if(!!accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
    } 
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

apiCaller.interceptors.response.use(
  function (response) {
    return response;
  },
  
  function (error) {
    // TO DO: add refresh mechanism
    return Promise.reject(error);
  }
);

export default apiCaller;
