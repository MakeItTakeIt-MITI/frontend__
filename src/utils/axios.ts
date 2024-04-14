import axios, { AxiosInstance } from "axios";

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
}, error => {
    console.log(error.data.response, 'fail');

    return Promise.reject(error);
}

);

axiosUrl.interceptors.response.use(
    (response) => response,
    async (error) => {
        // const originalRequest = error.config;
        console.log(error.data);
        console.log(error.data.error_code === 501);
        if (error.response.status === 401 && error.data.error_code === 501) {
            console.log('401');
            console.log('--------------');
            try {
                const refreshToken = localStorage.getItem('refreshToken'); // Retrieve the stored refresh token.
                const response = await axios.post('https://dev.makeittakeit.kr/auth/refresh-token', {
                    refresh: refreshToken,
                });
                const { access, refresh } = response.data.data
                localStorage.setItem('accessToken', access)
                localStorage.setItem('refreshToken', refresh)
                console.log(response, 'succeed in refrshing token');
                return response.data
            } catch (newError) {
                console.log('refresh token failed:', newError);
                return Promise.reject(newError);
            }
        }
    }
)

axios.interceptors.response.use()

export default axiosUrl;


// originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.
// try {
//     const refresh = localStorage.getItem('refreshToken'); // Retrieve the stored refresh token.
//     const refreshData = { 'refresh': refresh }
//     // Make a request  your auth server to refresh the token.
//     const response = await axios.post('https://dev.makeittakeit.kr/auth/refresh-token', {
//         refreshData,
//     });
//     const { accessToken, refreshToken: newRefreshToken } = response.data;
//     localStorage.setItem('accessToken', accessToken);
//     localStorage.setItem('refreshToken', newRefreshToken);
//     return response.headers.Authorization = `Bearer ${accessToken}`;
// } catch (refreshError) {
//     console.error('Token refresh failed:', refreshError);

//     localStorage.removeItem('accessToken');

//     return Promise.reject(refreshError);
// }