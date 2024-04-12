import kakaoMsgIcon from "../../assets/kakao_msg_icon.svg";
import KakaoLogin from "react-kakao-login";
import axiosUrl from "../../utils/axios";

interface KakaoLoginProp {
  children: string;
}

export const KakaoLoginButton = ({ children }: KakaoLoginProp) => {
  // const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  // const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // const kakaoLogin = () => {
  //   window.location.href = KAKAO_AUTH_URL;
  // };
  const kakaoLogin = async (data: { access_token: string | null }) => {
    try {
      const response = await axiosUrl.post("/auth/oauth/kakao/login", data);
      return response;
    } catch (error) {
      console.log(error);

      throw new Error();
    }
  };

  const kakaoClientId = import.meta.env.VITE_APP_KAKAO_JAVASCRIPT_KEY;
  const kakaoOnSuccess = async (data) => {
    console.log(data);
    const token = data.response.access_token; // 엑세스 토큰 백엔드로 전달
    const localToken = localStorage.setItem("oauth_token", token);
    const tokenData = { access_token: token };
    kakaoLogin(tokenData);
  };
  const kakaoOnFailure = (error) => {
    console.log(error);
  };

  return (
    <>
      <KakaoLogin
        token={kakaoClientId}
        onSuccess={kakaoOnSuccess}
        onFail={kakaoOnFailure}
        style={{
          width: "100%",
          height: "48px",
          backgroundColor: "#FAE64D",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "700",
        }}
      >
        <div className="flex">
          <p>카카오로 3초만에 시작하기</p>
          <img src={kakaoMsgIcon} alt="kakao icon" />
        </div>
      </KakaoLogin>
    </>
    // <div className="relative  w-full">
    //   {/* <div className="relative  mobile:w-full tablet:w-[600px]"> */}
    //   <button
    //     className="w-full bg-[#FAE64D] h-[48px]  rounded-lg text-[14px] font-bold"
    //     // onClick={kakaoLogin}
    //     role="kakao-login-btn"
    //   >
    //     {children}{" "}
    //   </button>
    //   <img
    //     src={kakaoMsgIcon}
    //     alt="kakao icon"
    //     className="absolute left-3 top-3"
    //   />
    // </div>
  );
};
