import { useState } from "react";

export const SMSAuthenticationPage = () => {
  //   const [requestSMS, setRequestSMS] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //   const handleRequestAuthCode = () => {
  //     setRequestSMS(true);
  //   };

  //   const handleAuthenticateUser = () => {
  //     setIsAuthenticated(true);
  //   };
  return (
    <div className="px-[13rem] h-screen flex items-center flex-col gap-4 justify-center">
      <h1 className="text-[24px] font-bold">SMS 인증번호를 확인해주세요.</h1>
      <div className="flex gap-2">
        <input
          className="mobile:w-full tablet:w-[500px] h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="text"
          placeholder="SMS 인증번로 입력해주세요."
        />
        <div className="flex gap-2">
          <button className="bg-[#E8E8E8]  rounded-xl w-[100px] text-sm ">
            재전송 요청
          </button>
          <button className="bg-[#4065f6]  text-white rounded-xl w-[100px] text-sm ">
            인증하기
          </button>
        </div>
      </div>
      {!isAuthenticated && (
        <p className="text-[#E92C2C] text-[13px] font-[400]">
          인증을 실패하셨습니다. 다시 확인해주세요.
        </p>
      )}
    </div>
  );
};
