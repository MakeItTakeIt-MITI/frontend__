import { SMSAuth } from "../interface/authInterface";
import axiosUrl from "../utils/axios"

export const authenticationSMS = async (data: SMSAuth) => {
    const user_info_token = localStorage.getItem('authentication')
    try {
        if (user_info_token) {
            const response = await axiosUrl.post(`/users/${user_info_token}/authenticate/`, data)
            console.log(response.data);
            return response.data
        }
    } catch (error) {
        console.log(error);
    }
}