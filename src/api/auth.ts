import { KakaoLoginField } from "../components/forms/KakaoAuthHandler";
import { SMSAuth } from "../interface/authInterface";
import { LoginField, RegisterField } from "../interface/usersInterface";
import { FindEmailField } from "../user/FindMyEmailModal";
import axiosUrl from "../utils/axios"


export const userLogin = async (data: LoginField) => {
    try {
        const response = await axiosUrl.post('/auth/login/', data)
        if (response.data.status_code === 200) {
            return response.data
        }
    } catch {
        throw new Error
    }
}


export const userSignup = async (data: RegisterField) => {
    try {
        const response = await axiosUrl.post('/auth/signup/', data)
        if (response.data.status_code === 201) {
            localStorage.setItem("authentication_token", response.data.data.authentication_token)
            localStorage.setItem("nickname", response.data.data.nickname)
            return response.data
        }

    } catch {
        throw new Error
    }
}


export const kakaoAuth = async (data: KakaoLoginField) => {
    try {
        const response = await axiosUrl.post("/auth/oauth/kakao/login/", data)
        return response.data
    } catch {
        throw new Error
    }
}

export const findEmail = async (phone: FindEmailField) => {
    try {
        const response = await axiosUrl.post('/auth/find-email/', phone)
        return response.data
    } catch {
        throw new Error
    }
}

export const verifySignupSMS = async (user_token: string | null, data: SMSAuth) => {
    try {
        const response = await axiosUrl.post(`/auth/${user_token}/authenticate/`, data)
        return response.data
    } catch {
        throw new Error
    }
}

export const requestResetPassword = async (data: string) => {
    try {
        const response = await axiosUrl.post('/auth/password-reset-email/', data)
        return response.data
    } catch {
        throw new Error
    }
}