import { SMSAuth } from "../interface/authInterface";
import { FindEmailField } from "../user/FindMyEmailModal";
import axiosUrl from "../utils/axios"

export const authenticationSMS = async (data: SMSAuth) => {
    const user_info_token = localStorage.getItem('authentication_token')
    try {
        if (user_info_token) {
            const response = await axiosUrl.post(`/auth/${user_info_token}/authenticate/`, data)
            console.log(response.data);
            return response.data

        }
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const findEmail = async (phone: FindEmailField) => {
    const response = await axiosUrl.post('/auth/find-email/', phone)
    return response.data
} 