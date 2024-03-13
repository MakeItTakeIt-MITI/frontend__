import axios, { AxiosInstance } from "axios";

const baseUrl = 'https://api.makeittakeit.kr'



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
        // console.log(error);
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userLoginStatus');
            console.log('token expired');




        }
    }
)

axios.interceptors.response.use()


export default axiosUrl;


