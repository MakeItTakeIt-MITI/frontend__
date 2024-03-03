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

  const code = new URL(document.location.toString()).searchParams.get("code");
  useEffect(() => {
    kakaoLoginAuth({ code: code });
    // kakaoLoginAuth(code);
    console.log(code);
  }, [code, kakaoLoginAuth]);

  if (isPending) {
    return <p> ...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return <div>KakaoAuth</div>;
};
