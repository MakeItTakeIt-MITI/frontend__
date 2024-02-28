import { useEffect } from "react";
import { useOAuthLoginMutation } from "../../hooks/useOAuthLoginMutation";

export interface KakaoLoginField {
  code: string | null;
}

export const KakaoAuthHandler = () => {
  const {
    mutate: kakaoLoginAuth,
    isPending,
    isError,
  } = useOAuthLoginMutation();

  const code = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    const requestLogin = { code: code };
    kakaoLoginAuth(requestLogin);
  }, [code, kakaoLoginAuth]);

  if (isPending) {
    return <p> ...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return <div>KakaoAuth</div>;
};
