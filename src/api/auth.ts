import { KakaoLoginField } from "../components/forms/KakaoAuthHandler";
import { SMSAuth } from "../interface/authInterface";
import { FindEmailField } from "../user/FindMyEmailModal";
import axiosUrl from "../utils/axios"

export const kakaoAuth = async (data: KakaoLoginField) => {
    const response = await axiosUrl.post("/auth/oauth/kakao/login/", data)
    return response.data
}

export const findEmail = async (phone: FindEmailField) => {
    const response = await axiosUrl.post('/auth/find-email/', phone)
    return response.data
}

export const verifySignupSMS = async (user_token: string | null, data: SMSAuth) => {
    const response = await axiosUrl.post(`/auth/${user_token}/authenticate/`, data)
    return response.data
}