// import { useEffect } from "react";
import { useEffect } from "react";
import { useOAuthLoginMutation } from "../../hooks/useOAuthLoginMutation";

export interface KakaoLoginField {
  code: string | null;
}

export const KakaoAuthHandler = () => {
  const { mutate: kakaoLoginAuth } = useOAuthLoginMutation();

  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  useEffect(() => {
    const requestLogin = { code: code };
    kakaoLoginAuth(requestLogin);
  }, [code, kakaoLoginAuth]);

  return <div>KakaoAuth</div>;
};
