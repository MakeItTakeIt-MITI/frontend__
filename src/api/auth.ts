import { FindEmailField } from "../user/FindMyEmailModal";
import axiosUrl from "../utils/axios"

export const kakaoAuthSMS = async (code) => {
    const response = axiosUrl.get(`/auth/oauth/kakao/login/?code=${code}`)
    console.log(response);
    return response
}

export const findEmail = async (phone: FindEmailField) => {
    const response = await axiosUrl.post('/auth/find-email/', phone)
    return response.data
} 