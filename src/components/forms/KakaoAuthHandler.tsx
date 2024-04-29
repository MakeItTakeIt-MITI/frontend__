// import { useEffect } from "react";
// import { useKakaoLoginQuery } from "../../hooks/auth/useOAuthLoginMutation";

import axios from "axios";
import { useEffect } from "react";
import { useKakaoLoginMutation } from "../../pages/auth/useKakaoLoginMutation";
import { useNavigate } from "react-router-dom";
import { LoadingPage } from "../../pages/LoadingPage";

export const KakaoAuthHandler = () => {
  const AUTHORIZE_CODE = new URL(document.location.toString()).searchParams.get(
    "code"
  );
  const GRANT_TYPE: string = "authorization_code";
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const navigate = useNavigate();

  const { mutate: kakaoLogin } = useKakaoLoginMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          {
            grant_type: GRANT_TYPE,
            redirect_uri: REDIRECT_URI,
            client_id: REST_API_KEY,
            code: AUTHORIZE_CODE,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );
        localStorage.setItem("oAuth_user", "true");
        const accessToken = { access_token: response.data.access_token };
        kakaoLogin(accessToken);
      } catch (error) {
        navigate("/");
      }
    };

    fetchData();
  }, []);

  return <LoadingPage />;
};
