import { Link } from "react-router-dom";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { usePasswordResetMutation } from "../../hooks/usePasswordResetMutation";
import { useState } from "react";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import { SuccessMessage } from "../../components/common/SuccessMessage";

export const FindPasswordPage = () => {
  const [phone, setPhone] = useState("");
  const [errorCode, setErrorCode] = useState(0);
  const [success, setSuccess] = useState(false);
  const { mutate } = usePasswordResetMutation(setErrorCode, setSuccess);

  const handleRequestCode = () => {
    const phonedata = { phone: phone };
    mutate(phonedata);
    console.log(phonedata);
  };

  return (
    <section className="laptop:my-4 mobile:my-0   h-full ">
      <NavigateToPrevContainer children="회원 정보 찾기" />
      <div className="laptop:w-[500px] laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-6  justify-between">
        <div className="w-full flex items-center ">
          <Link
            to="/find-email"
            className="flex-1  border-b border-gray-300 h-[44px] flex items-center justify-center text-[12px] py-3 "
          >
            아이디 찾기
          </Link>
          <Link
            to="/find-password"
            className="flex-1  border-b border-[#4065F6] h-[44px] flex items-center justify-center text-[12px] py-3 text-[#4065F6]"
          >
            비밀번호 찾기
          </Link>
        </div>
        <div className="h-full w-full flex flex-col gap-4 justify-center my-auto">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[24px]">비밀번호 재설정</h1>
            <p className="text-[#333] text-[14px] font-[400]">
              회원가입시 입력한 휴대폰 번호를 입력해주세요.
            </p>
          </div>
          <form className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="핸드폰 번호를 입력해주세요."
                className="w-full h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
              />
              <button
                onClick={handleRequestCode}
                type="button"
                className="absolute right-2 top-2 bottom-2 text-[12px] p-2 bg-[#E8E8E8] rounded-lg text-[#969696]"
              >
                인증번호 전송
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="인증번호를 입력해주세요."
                className="w-full h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
              />
              <button
                type="button"
                className="absolute right-2 top-2 bottom-2 text-[12px] p-2 bg-[#E8E8E8] rounded-lg text-[#969696]"
              >
                인증번호 확인
              </button>
            </div>

            {errorCode === 101 && (
              <ErrorMessage children="해당 번호로 가입한 사용자가 없습니다." />
            )}

            {success && (
              <SuccessMessage children="인증번호가 발송되었습니다." />
            )}
          </form>
        </div>
        <button className="bg-[#E8E8E8] text-[#969696] h-[48px] w-full rounded-lg">
          비밀번호 재설정
        </button>
      </div>
      {/* <DisplayModal 
      
      /> */}
    </section>
  );
};
