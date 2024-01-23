import axios from "axios";
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
        console.log(response);


        // console.log(JSON.stringify(response))

        if (response.data.status_code === 200) {
            window.location.href = url
            // const REDIRECT_URI = "http://api.makeittakeit.kr/users/callback/kakao/login/"
            // const REDIRECT_URI = "http://localhost:3000/oauth"

            // const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
            // console.log(REDIRECT_URI);
            // console.log(REST_API_KEY);
            // window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

        }
        // console.log(url);
        // window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
        // return window.location.href = url
        // alert(JSON.stringify(response))
        // const code = new URL(window.location.href).searchParams.get('code')
        // console.log(response);



        // }
        console.log(response);
        // console.log(response.data);
        // return response
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


export const userEditInfo = async (data: UserEditField) => {
    const response = await axiosUrl.patch(`/users/5`, data)
    console.log(response.data);
    return response.data

}

export const deleteAccount = async () => {
    const response = await axiosUrl.post("/users/5")
    console.log(response.data);

    return response.data
}

export const userLogout = async () => {
    const refresh_token = localStorage.getItem("refreshToken");

    try {
        const response = await axios.post('/users/logout/', null, {
            headers: {
                'Refresh': refresh_token
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Logout error:', error);
        throw error;
    }
}