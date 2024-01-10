import { RegisterField, ValidationField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios"

export const userLoginAuth = () => {
    const response = axiosUrl.post('/users/login')
    console.log(response);
    return response
}

export const userKakaoLogin = () => {
    const response = axiosUrl.get('/users/oauth-login-url/?provider=kakao')
    console.log(response);
    return response
}

export const userSignup = (data: RegisterField) => {
    const response = axiosUrl.post('/users/', data)
    console.log(response);
    return response
}

export const userValidation = (data: ValidationField) => {
    const response = axiosUrl.post('/users/signup-check/', data)
    console.log(response);
    return response
}