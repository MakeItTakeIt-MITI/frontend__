import { useEffect } from "react";
import { useKakaoLoginQuery } from "../../hooks/auth/useOAuthLoginMutation";

export const KakaoAuthHandler = () => {
  const code = new URL(document.location.toString()).searchParams.get("code");
  // const codeFormat = { code: code };

  const { data } = useKakaoLoginQuery(code);
  console.log(data);

  useEffect(() => {
    // kakaoLoginAuth(code);
    if (code) {
      console.log(typeof code);
    }
    console.log(code);
  }, [code]);

  return <div>KakaoAuth</div>;
};
