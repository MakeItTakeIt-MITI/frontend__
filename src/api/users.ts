import { LoginField, RegisterField, UserEditField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios"

export const userLoginAuth = async (data: LoginField) => {
    const response = await axiosUrl.post('/users/login/', data)
    console.log(response.data);
    try {
        if (response.data.status_code === 200) {
            const accessToken = response.data.data.token?.access
            const refreshToken = response.data.data.token?.refresh
            const userId = response.data.data.id
            localStorage.setItem("accessToken", accessToken)
            localStorage.setItem("refreshToken", refreshToken)
            localStorage.setItem('id', userId)
            return response.data
        } else if (response.data.status_code === 400) {
            alert('올바르지 않은 요청');
        } else if (response.data.status_code === 401) {
            alert('사용자 정보 불일치');
        } else if (response.data.status_code === 403) {
            alert('미인증/탈퇴 사용자 로그인');

        }
    } catch (error) {


        // console.log(error.message);

        // throw error

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


export const userEditInfo = async (data: UserEditField, id: number) => {
    const response = await axiosUrl.patch(`/users/${id}`, data)
    console.log(response.data);
    return response

}