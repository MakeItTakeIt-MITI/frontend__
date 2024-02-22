import { useEffect } from "react";
import { kakaoAuthSMS } from "../../api/auth";

export const KakaoAuthHandler = () => {
  // const { mutate } = useVerifySmsMutation(code);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    kakaoAuthSMS(code);
  }, []);

  return <div>KakaoAuth</div>;
};
