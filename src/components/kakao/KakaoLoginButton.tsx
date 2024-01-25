import { useNavigate } from "react-router-dom";
import kakaoMsgIcon from "../../assets/kakao_msg_icon.svg";
import axiosUrl from "../../utils/axios";

export const KakaoLoginButton = () => {
  const navigate = useNavigate();

  const userKakaoLogin = async () => {
    try {
      const response = await axiosUrl.get(
        "/users/oauth-login-url/?provider=kakao"
      );
      const url = response.data.data.login_url;

      if (response.data.status_code === 200) {
        window.location.href = url;
        console.log(response);
        // console.log(url);
      }
      // setUserData(response.data.data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const kakaoLogin = () => {
    userKakaoLogin();
    navigate("/");
  };
  return (
    <div className="relative w-full">
      <button
        className="w-full bg-[#FAE64D] h-[48px]  rounded-lg text-[14px] font-bold"
        onClick={kakaoLogin}
      >
        카카오로 3초만에 시작하기
      </button>
      <img
        src={kakaoMsgIcon}
        alt="kakao icon"
        className="absolute left-3 top-3"
      />
    </div>
  );
};
