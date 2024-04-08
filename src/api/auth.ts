import { CodeVerificationField, ResetPassField } from "../interface/authInterface";
import { FindEmailField, NewPassworldField } from "../interface/user-edit-interface";
import { LoginField, RegisterField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios"


export const userLogin = async (data: LoginField) => {
    try {
        const response = await axiosUrl.post('/auth/login', data)
        // if (response.data.status_code === 200) {
        //     return response.data
        // }
        return response.data
    } catch {
        throw new Error
    }
}

export const userLogout = async () => {
    try {
        const response = await axiosUrl.post('/auth/logout');
        return response.data;
    } catch {
        throw new Error
    }
}


export const userSignup = async (data: RegisterField) => {
    try {
        const response = await axiosUrl.post('/auth/signup', data)
        if (response.data.status_code === 201) {
            localStorage.setItem("authentication_token", response.data.data.authentication_token)
            localStorage.setItem("nickname", response.data.data.nickname)
            return response.data
        }

    } catch {
        throw new Error
    }
}


export const kakaoAuthLogin = async (code: string | null) => {
    try {
        const response = await axiosUrl.get(`/auth/oauth/kakao/authorize?code=${code}`)
        return response.data
    } catch {
        throw new Error
    }
}

export const findEmail = async (phone: FindEmailField) => {
    try {
        const response = await axiosUrl.post('/auth/send-sms/reset-password', phone)
        return response.data
    } catch {
        throw new Error
    }
}

export const requestPasswordReset = async (data: ResetPassField) => {
    try {
        const response = await axiosUrl.post(`/auth/send-sms/reset-password`, data);
        return response.data
    } catch {
        throw new Error
    }
}

export const verifySignupSMS = async (user_token: string | null, data: CodeVerificationField) => {
    try {
        const response = await axiosUrl.post(`/auth/${user_token}/authenticate`, data)
        return response.data
    } catch {
        throw new Error
    }
}

export const updateNewPassword = async (user_info_token: string | null, data: NewPassworldField) => {
    try {
        const response = await axiosUrl.post(`/auth/reset-password/${user_info_token}`, data)
        return response.data
    } catch {
        throw new Error
    }
}



export const requestResetPassword = async (data: string) => {
    try {
        const response = await axiosUrl.post('/auth/password-reset-email', data)
        return response.data
    } catch {
        throw new Error
    }
}
export const requestNewToken = async () => {
    try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axiosUrl.post("/auth/refresh-token", {}, {
            headers: {
                'refresh': refreshToken
            }
        });
        const access = response.data.data.access
        localStorage.setItem('accessToken', access)
        return response.data;
    } catch {
        throw new Error
    }
};