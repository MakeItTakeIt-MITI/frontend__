import axios, { AxiosInstance } from "axios";
// import { useNavigate } from "react-router-dom";

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
            localStorage.removeItem('userLoginStatus')

            console.log('401 token expired');

            // const refreshToken = localStorage.getItem("refreshToken")
            // const response = await axios.post(`${baseUrl}/auth/refresh-token`, null, {
            //     headers: {
            //         "refresh": refreshToken
            //     }
            // })
            // const newToken = response.data.data.access
            // localStorage.setItem('accessToken', newToken)
            // console.log(response, 'response!!');
            // return response.data



            // localStorage.removeItem('userLoginStatus');
            // console.log('token expired');






        }
    }
)

axios.interceptors.response.use()


export default axiosUrl;


