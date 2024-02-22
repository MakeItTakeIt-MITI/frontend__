
import { LoginField, RegisterField, RequestCodeField, UserEditField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios"

export const userLoginAuth = async (data: LoginField) => {
    try {
        const response = await axiosUrl.post('/auth/login/', data)
        if (response.data.status_code === 200) {
            return response.data
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const userKakaoLogin = async () => {
    try {
        const response = await axiosUrl.get("/users/oauth-login-url/?provider=kakao");
        const url = response.data.data.login_url
        console.log(response);
        if (response.data.status_code === 200) {
            window.location.href = url

        }

        console.log(response);

    } catch (error) {
        console.log(error);
    }

}

export const userSignup = async (data: RegisterField) => {
    try {
        const response = await axiosUrl.post('/auth/signup/', data)
        if (response.data.status_code === 201) {
            console.log(response.data);
            localStorage.setItem("authentication_token", response.data.data.authentication_token)
            localStorage.setItem("nickname", response.data.data.nickname)
            return response.data
        }

    } catch (error) {
        console.log(error);
    }
}


export const userEditNickname = async (id: number | null, data: UserEditField) => {
    try {
        const response = await axiosUrl.patch(`/users/${id}/`, data)
        console.log(response);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const userEditPassword = async (id: number | null, data: UserEditField) => {
    try {
        const response = await axiosUrl.patch(`/users/${id}/`, data)
        console.log(response);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const deleteAccount = async (id: number | null) => {
    try {
        const response = await axiosUrl.delete(`/users/${id}/`)
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const userLogout = async () => {
    try {
        const response = await axiosUrl.post('/auth/logout/')
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error(error)
    }
}

export const getUserData = async (userId: number | null) => {
    try {
        const response = await axiosUrl.get(`/users/${userId}/`)
        // console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const requestSmsCode = async (data: RequestCodeField) => {
    try {
        const response = await axiosUrl.post('/auth/send-sms/', data)
        localStorage.removeItem("authentication_token");
        localStorage.setItem("authentication_token", response.data.data.authentication_token)
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}