import { LoginField, RegisterField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios"

export const userLoginAuth = async (data: LoginField) => {
    try {
        const response = await axiosUrl.post('/users/login/', data)
        if (response.data.status_code === 200) {
            console.log(response.data);
            const accessToken = response.data.data.token?.access
            localStorage.setItem("accessToken", accessToken)
            return response.data
        } else if (response.data.status_code === 400) {
            console.log('올바르지 않은 요청');
        } else if (response.data.status_code === 401) {
            console.log('사용자 정보 불일치');
        } else if (response.data.status_code === 403) {
            console.log('미인증/탈퇴 사용자 로그인');

        }
    } catch (error) {
        console.log(error);

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
        } else if (response.data.status_code === 400) {
            console.log('bad request');
        } else if (response.data.status_code === 500) {
            console.log('server error');
        }

    } catch (error) {
        console.log(error);
    }
}
