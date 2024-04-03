import axios, { AxiosInstance } from "axios";
// import { useNavigate } from "react-router-dom";

// const baseUrl = 'https://api.makeittakeit.kr'
const baseUrl = 'https://dev.makeittakeit.kr'



const axiosUrl: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,

});


axiosUrl.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}

);

axiosUrl.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status) {
            // localStorage.removeItem('accessToken');
            // localStorage.removeItem('userLoginStatus')

            // console.log(error.response);
            return error.response
        }
    }
)

axios.interceptors.response.use()


export default axiosUrl;


