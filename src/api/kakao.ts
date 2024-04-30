import axios from "axios";

export const kakaoLogout = async (accessToken: string) => {
    try {
        const response = await axios.post(
            'https://kapi.kakao.com/v1/user/logout',
            {},
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${accessToken}`
                }
            }
        );
        console.log(response);

    } catch (error) {
        console.log('Error:', error);


    }
};
