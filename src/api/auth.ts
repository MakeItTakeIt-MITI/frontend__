import { FindEmailField } from "../user/FindMyEmailModal";
import axiosUrl from "../utils/axios"

export const kakaoAuthSMS = async (data: string) => {
    const response = axiosUrl.post("/auth/oauth/kakao/login/", data)
    console.log(response);
    return response
}

export const findEmail = async (phone: FindEmailField) => {
    const response = await axiosUrl.post('/auth/find-email/', phone)
    return response.data
} 