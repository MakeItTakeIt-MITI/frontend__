import { LoginField, RegisterField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios"

export const userLoginAuth = async (data: LoginField) => {
    const response = await axiosUrl.post('/users/login/', data)
    console.log(response);
    return response
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
    const response = await axiosUrl.post('/users/', data)
    console.log(response);
    return response
}
