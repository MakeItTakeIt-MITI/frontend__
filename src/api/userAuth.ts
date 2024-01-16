import { LoginField, RegisterField, ValidationField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios"

export const userLoginAuth = async (data: LoginField) => {
    const response = await axiosUrl.post('/users/login/', data)
    console.log(response);
    return response
}

export const userKakaoLogin = async () => {

    try {

        const response = await axiosUrl.get(
            "/users/oauth-login-url/?provider=kakao"
        );
        console.log(response);

        if (response.status === 200) {
            const loginUrl = response.data.data.login_url;
            window.location.href = loginUrl;
        }
    } catch (error) {
        console.log(error);
    }
}

export const userSignup = async (data: RegisterField) => {
    const response = await axiosUrl.post('/users/', data)
    console.log(response);
    return response
}

export const userValidation = async (data: ValidationField) => {
    const response = await axiosUrl.post('/users/signup-check/', data)
    console.log(response);
    return response
}