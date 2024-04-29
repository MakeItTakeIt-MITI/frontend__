import kakaoMsgIcon from "../../assets/kakao_msg_icon.svg";

export const KakaoLoginButton = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const KakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  return (
    <a
      role="kakao-login-btn"
      href={KakaoLoginUrl}
      className="relative w-full bg-[#FAE64D] h-[48px]  rounded-lg text-[14px] font-bold"
    >
      <p className="flex items-center justify-center h-full">
        카카오로 3초만에 시작하기
      </p>
      <img
        src={kakaoMsgIcon}
        alt="kakao icon"
        className="absolute left-3 top-3"
      />
    </a>
  );
};
