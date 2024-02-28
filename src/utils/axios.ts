import axios, { AxiosInstance } from "axios";

const baseUrl = 'https://api.makeittakeit.kr'

const axiosUrl: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,

});


axiosUrl.interceptors.request.use(async function (config) {
    const accessToken = localStorage.getItem("accessToken");
    // const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // if (refreshToken) {
    //     config.headers["refresh"] = refreshToken;
    // }


    return config;
}
);
export default axiosUrl;


