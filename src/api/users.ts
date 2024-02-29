
import { NicknameField, PasswordField, RequestCodeField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios"


export const userUpdateNickname = async (id: number | null, data: NicknameField) => {
    try {
        const response = await axiosUrl.patch(`/users/${id}`, data)
        return response.data
    } catch (error) {
        throw new Error
    }
}

export const userChangePassword = async (id: number | null, data: PasswordField) => {
    try {
        const response = await axiosUrl.patch(`/users/${id}`, data)
        return response.data
    } catch (error) {
        throw new Error
    }
}

export const deleteAccount = async (id: number | null) => {
    try {
        const response = await axiosUrl.delete(`/users/${id}`)
        return response.data
    } catch (error) {
        throw new Error
    }
}



export const getUserData = async (userId: number | null) => {
    try {
        const response = await axiosUrl.get(`/users/${userId}`)
        return response.data
    } catch (error) {
        throw new Error
    }
}

export const requestSmsCode = async (data: RequestCodeField) => {
    try {
        const response = await axiosUrl.post('/auth/send-sms', data)
        localStorage.removeItem("authentication_token");
        localStorage.setItem("authentication_token", response.data.data.authentication_token)
        return response.data
    } catch (error) {
        throw new Error

    }
}