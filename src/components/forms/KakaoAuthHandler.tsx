import { useEffect } from "react";
import { useKakaoLoginQuery } from "../../hooks/useOAuthLoginMutation";

export const KakaoAuthHandler = () => {
  const code = new URL(document.location.toString()).searchParams.get("code");
  // const codeFormat = { code: code };

  const { data, status } = useKakaoLoginQuery(code);
  console.log(data);
  if (status === "success") {
    console.log("login success");
  }

  useEffect(() => {
    // kakaoLoginAuth(code);
    if (code) {
      console.log(typeof code);
    }
    console.log(code);
  }, [code]);

  return <div>KakaoAuth</div>;
};
