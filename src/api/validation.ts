import { ValidationField } from "../interface/usersInterface";
import axiosUrl from "../utils/axios";
export const userValidation = async (data: ValidationField) => {
    try {
        const response = await axiosUrl.post("/users/signup-check/", data);

        if (response.data.status_code === 200) {
            console.log(response.data);

            // const emailData = response.data.data.email;
            // const nicknameData = response.data.data.nickname;

            // if (emailData && emailData.is_duplicated === true) {
            //     setValidEmail(false);
            //     setDisplayEmailMsg(true);
            // } else if (emailData && emailData.is_duplicated === false) {
            //     setValidEmail(true);
            //     setDisplayEmailMsg(false);
            // } else if (nicknameData && nicknameData.is_duplicated === true) {
            //     setValidNickname(false);
            //     setDisplayNickMsg(true);
            // } else if (nicknameData && nicknameData.is_duplicated === false) {
            //     setValidNickname(true);
            //     setDisplayNickMsg(false);
            // }

            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};
