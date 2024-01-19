import { LoginField, RegisterField, UserEditField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios"

export const userLoginAuth = async (data: LoginField) => {
    // console.log(response.data);
    try {
        const response = await axiosUrl.post('/users/login/', data)
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
        if (response.data.status_code === 200) {
            // console.log(url);
            window.location.href = url
            console.log(response.data);
        }
        console.log(response.data);
    } catch (error) {
        console.log(error);

    }


}

export const userSignup = async (data: RegisterField) => {
    try {
        const response = await axiosUrl.post('/users/', data)
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


export const userEditInfo = async (data: UserEditField, id: number) => {
    const response = await axiosUrl.patch(`/users/${id}`, data)
    console.log(response.data);
    return response

}