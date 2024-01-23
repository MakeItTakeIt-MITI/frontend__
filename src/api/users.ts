
import { LoginField, RegisterField, TokenField, UserEditField } from "../interface/usersInterface";
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


export const userEditInfo = async (id: number | null, data: UserEditField) => {
    try {
        const response = await axiosUrl.patch(`/users/${id}/`, data)
        console.log(response);
        return response
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
        const response = await axiosUrl.post('/users/logout/')
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error(error)
    }
}

export const getUserData = async (userId: number) => {
    try {
        const response = await axiosUrl.get(`/users/${userId}/`)
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}