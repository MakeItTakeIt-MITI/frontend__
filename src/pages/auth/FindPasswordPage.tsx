import { Link } from "react-router-dom";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { usePasswordResetMutation } from "../../hooks/auth/usePasswordResetMutation";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../../components/common/ErrorMessage";
import { SuccessMessage } from "../../components/common/SuccessMessage";
import { usePasswordCodeMutation } from "../../hooks/auth/usePasswordCodeMutation";
import { DisplayModal } from "../../components/common/DisplayModal";
import { phoneNumberAutoFormat } from "../../utils/phone_format";

export const FindPasswordPage = () => {
  const [phone, setPhone] = useState("");
  const [errorCode, setErrorCode] = useState(0);
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [modal, setModal] = useState(false);
  const [smsCodeError, setSmsCodeError] = useState(0);
  const [smsSuccessStatus, setSmsSuccessStatus] = useState(false);
  const [smsFailureStatus, setSmsFailureStatus] = useState(false);
  const [authorizationFailureMsg, setAuthorizationFailureMsg] = useState("");
  const [phoneRegexError, setPhoneRegexError] = useState(false);
  const [codeRegexError, setCodeRegexError] = useState(false);
  const [codeAuthFailureMsg, setCodeAuthFailureMsg] = useState("");

  const { mutate } = usePasswordResetMutation(setErrorCode, setSuccess);
  const auth_token = localStorage.getItem("auth");
  const { mutate: codeMutation } = usePasswordCodeMutation(
    auth_token,
    setSmsCodeError,
    setSmsSuccessStatus,
    setAuthorizationFailureMsg,
    setModal,
    setSmsFailureStatus
  );

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleRequestCode = () => {
    const phonedata = { phone: phone };
    mutate(phonedata);
    if (success) {
      setPhoneRegexError(true);
    }
    console.log(phonedata);
  };

  const handleAuthorizeCode = () => {
    const codeData = { code: code };
    codeMutation(codeData);
    if (smsSuccessStatus) {
      setCodeRegexError(true);
    }
    // codeMutation
  };

  useEffect(() => {
    phoneNumberAutoFormat(phone);
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
    <section className="laptop:my-4 mobile:my-0   h-full ">
      <NavigateToPrevContainer children="회원 정보 찾기" />
      {smsCodeError === 401 && modal && (
        <DisplayModal
          modal={modal}
          closeModal={handleCloseModal}
          title="탈퇴한 사용자입니다."
          titleTwo="고객센터에 문의해주세요."
          content="확인"
        />
      )}
      {smsCodeError === 402 && modal && (
        <DisplayModal
          modal={modal}
          closeModal={handleCloseModal}
          title="해당 사용자는 카카오 로그인을 통해 가입하셨습니다."
          titleTwo="카카오로 로그인하시겠습니까?"
          content="확인"
        />
      )}
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
                onBlur={() => {
                  phone.length !== 11
                    ? setPhoneRegexError(true)
                    : setPhoneRegexError(false);
                }}
              />
              <button
                onClick={handleRequestCode}
                type="button"
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
                onBlur={() => {
                  code.length !== 6
                    ? setCodeRegexError(true)
                    : setCodeRegexError(false);
                }}
              />
              <button
                onClick={handleAuthorizeCode}
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

            {errorCode === 101 && (
              <ErrorMessage children="해당 번호로 가입한 사용자가 없습니다." />
            )}

            {success && (
              <SuccessMessage children="인증번호가 발송되었습니다." />
            )}

            {smsFailureStatus && (
              <ErrorMessage children={authorizationFailureMsg} />
            )}

            {smsSuccessStatus && (
              <SuccessMessage children="인증번호가 일치해요." />
            )}
            {code.length >= 6 && codeRegexError && (
              <ErrorMessage children={codeAuthFailureMsg} />
            )}
          </form>
        </div>
        <Link to="/reset-password">
          <button
            disabled={!smsSuccessStatus ? true : false}
            style={{
              backgroundColor: !smsSuccessStatus ? "#E8E8E8" : "#4065F5",
              color: !smsSuccessStatus ? "#969696" : "#fff",
            }}
            className="bg-[#E8E8E8] text-[#969696] h-[48px] w-full rounded-lg"
          >
            비밀번호 재설정
          </button>
        </Link>
      </div>
    </section>
  );
};
