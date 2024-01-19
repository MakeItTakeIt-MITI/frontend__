import { userKakaoLogin } from "../../api/users";
import kakaoMsgIcon from "../../assets/kakao_msg_icon.svg";

export const KakaoLoginButton = () => {
  return (
    <div className="relative w-full">
      <button
        className="w-full bg-[#FAE64D] h-[48px]  rounded-lg text-[14px] font-bold"
        onClick={userKakaoLogin}
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
