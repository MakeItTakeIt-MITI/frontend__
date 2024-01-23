import axios, { AxiosInstance } from "axios";

const baseUrl = 'https://api.makeittakeit.kr'

const axiosUrl: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,

});


axiosUrl.interceptors.request.use(function (config) {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export default axiosUrl;


