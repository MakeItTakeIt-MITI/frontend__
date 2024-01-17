import { ValidationField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios";

export const userValidation = async (data: ValidationField, setValidEmail: React.Dispatch<React.SetStateAction<boolean>>, setValidNickname: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
        const response = await axiosUrl.post("/users/signup-check/", data);

        if (response.data.status_code === 200) {
            console.log(response.data);

            const emailData = response.data.data.email;
            const nicknameData = response.data.data.nickname;

            if (emailData && emailData.is_duplicated === true) {
                setValidEmail(false);
                alert("이미 존재하는 이메일입니다.");
            } else if (emailData && emailData.is_duplicated === false) {
                setValidEmail(true);
                alert("사용 가능한 이메일입니다.");
            } else if (nicknameData && nicknameData.is_duplicated === true) {
                setValidNickname(false);
                alert("이미 존재하는 닉네임입니다.");
            } else if (nicknameData && nicknameData.is_duplicated === false) {
                setValidNickname(true);
                alert("사용 가능한 닉네임입니다.");
            }

            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};