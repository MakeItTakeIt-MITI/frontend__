import { LoginField, RegisterField, ValidationField } from "../interface/usersInterface";
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
export const userValidation = async (data: ValidationField) => {
    try {
        const response = await axiosUrl.post('/users/signup-check/', data);

        if (response.data.status_code === 200) {
            console.log(response.data);

            const emailData = response.data.data.email
            const nicknameData = response.data.data.nickname

            if (emailData && emailData.is_duplicated === true) {
                alert('이미 존재하는 이메일입니다.');
            } else if (emailData && emailData.is_duplicated === false) {
                alert('사용 가능한 이메일입니다.');
            } else if (nicknameData && nicknameData.is_duplicated === true) {
                alert('이미 존재하는 닉네임입니다.');
            } else if (nicknameData && nicknameData.is_duplicated === false) {
                alert('사용 가능한 닉네임입니다.');
            }

            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
}

