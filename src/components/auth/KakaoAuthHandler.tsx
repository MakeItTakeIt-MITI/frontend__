// import axios from "axios";
import { useEffect } from "react";

export const KakaoAuthHandler = () => {
  // const REDIRECT_URI = "http://localhost:3000/users/login/oauth";
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // const GRANT_TYPE: string = "authorization_code";

  // const REST_API_KEY = ;
  // const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  // const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback";
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code !== null) {
      localStorage.setItem("code", code);
      console.log(code);
    }

    //   const kakaoLogin = async () => {
    //     try {
    //       const response = axios.post(
    //         `https://kauth.kakao.com/oauth/token?grant_type=${GRANT_TYPE}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    //         {},
    //         {
    //           headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //           },
    //         }
    //       );
    //       console.log(response);
    //       return response;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   kakaoLogin();
  }, []);

  return <div>KakaoAuth</div>;
};
