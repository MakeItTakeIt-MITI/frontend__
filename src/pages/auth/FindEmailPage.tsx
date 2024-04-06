import { Link } from "react-router-dom";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../../components/common/ErrorMessage";

export const FindEmailPage = () => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const [phoneAuthAccess, setPhoneAuthSuccess] = useState(false);
  const [codeAuthSuccess, setCodeAuthSuccess] = useState(false);

  const [phoneRegexError, setPhoneRegexError] = useState(false);
  const [codeRegexError, setCodeRegexError] = useState(false);

  const [emailAuthFailureMsg, setPhoneAuthFailureMsg] = useState("");
  const [codeAuthFailureMsg, setCodeAuthFailureMsg] = useState("");

  useEffect(() => {
    const codeRegex = /^\d{6}$/;

    if (phone.length !== 11) {
      setPhoneRegexError(true);
    } else {
      setPhoneRegexError(false);
    }

    if (!codeRegex.test(code)) {
      setCodeRegexError(true);
      setCodeAuthFailureMsg("유효한 인증번호가 아니에요.");
    } else {
      setCodeRegexError(false);
      setCodeAuthFailureMsg("");
    }
  }, [phone, code]);

  return (
    <section className="laptop:my-4 mobile:my-0 h-full ">
      <NavigateToPrevContainer children="회원 정보 찾기" />
      <div className="laptop:w-[500px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-6  justify-between">
        <div className="w-full flex items-center ">
          <Link
            to="/find-email"
            className="flex-1  border-b border-[#4065F6] h-[44px] flex items-center justify-center text-[12px] py-3 text-[#4065F6]"
          >
            아이디 찾기
          </Link>
          <Link
            to="/find-password"
            className="flex-1  border-b border-gray-300 h-[44px] flex items-center justify-center text-[12px] py-3"
          >
            비밀번호 찾기
          </Link>
        </div>
        <div className="h-full w-full flex flex-col gap-4 justify-center my-auto">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[24px]">아이디 찾기</h1>
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
                type="button"
                // onClick={handleRequestCode}
                disabled={phoneRegexError ? true : false}
                style={{
                  backgroundColor: phoneRegexError ? "#E8E8E8" : "#4065F5",
                  color: phoneRegexError ? "#969696" : "#fff",
                }}
                className="absolute right-2 top-2 bottom-2 text-[12px] p-2  rounded-lg "
              >
                인증번호 전송
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="인증번호를 입력해주세요."
                className="w-full h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
              />
              <button
                type="button"
                className="absolute right-2 top-2 bottom-2 text-[12px] p-2 rounded-lg "
                disabled={codeRegexError ? true : false}
                style={{
                  backgroundColor: codeRegexError ? "#E8E8E8" : "#4065F5",
                  color: codeRegexError ? "#969696" : "#fff",
                }}
              >
                인증번호 확인
              </button>
            </div>
            {code.length >= 6 && codeRegexError && (
              <ErrorMessage children={codeAuthFailureMsg} />
            )}
          </form>
        </div>
        <Link to="/reset-password">
          <button
            disabled={!codeAuthSuccess ? true : false}
            style={{
              backgroundColor: !codeAuthSuccess ? "#E8E8E8" : "#4065F5",
              color: !codeAuthSuccess ? "#969696" : "#fff",
            }}
            className="bg-[#E8E8E8] text-[#969696] h-[48px] w-full rounded-lg"
          >
            이메일 찾기
          </button>
        </Link>
      </div>
      {/* <DisplayModal 
      
      /> */}
    </section>
  );
};
