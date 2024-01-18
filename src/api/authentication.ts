import { SMSAuth } from "../interface/authInterface";
import axiosUrl from "../utils/axios"

export const authenticationSMS = async (data: SMSAuth) => {
    const user_info_token = localStorage.getItem('authentication')
    try {
        if (user_info_token) {
            const response = await axiosUrl.post(`/users/${user_info_token}/authenticate/`, data)
            if (response.data.status_code === 200) {
                console.log(response.data);
                return response.data
            } else if (response.data.status_code === 400) {
                console.log('인증 실패');
            } else if (response.data.status_code === 404) {
                console.log('사용자 인증 조회 실패');
            } else if (response.data.status_code === 500) {
                console.log('internal server error ');

            }
        }
    } catch (error) {
        console.log(error);
    }
}