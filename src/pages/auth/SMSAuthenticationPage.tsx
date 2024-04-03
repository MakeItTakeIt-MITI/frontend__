import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useVerifySmsMutation } from "../../hooks/useVerifySmsMutation";
import { CodeVerificationField } from "../../interface/authInterface";
import { ErrorMessage } from "../../components/common/ErrorMessage";

export const SMSAuthenticationPage = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const authentication_token = localStorage.getItem("authentication_token");
  useEffect(() => {
    if (!authentication_token) {
      navigate("/");
    }
  }, []);

  const {
    register: verifyOTP,
    handleSubmit: submitOTP,
    formState,
  } = useForm<CodeVerificationField>();

  const { mutate: verifySMSMutation } = useVerifySmsMutation(
    authentication_token,
    setError,
    navigate
  );

  const onSubmitCode = (data: CodeVerificationField) => {
    verifySMSMutation(data);
  };

  return (
    <section className="laptop:my-4 mobile:my-0 h-full ">
      <form
        onSubmit={submitOTP(onSubmitCode)}
        className="relative laptop:w-[500px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col laptop:justify-center gap-6  mobile:justify-between"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">인증번호 입력</h1>
          <p>회원가입시 입력한 번호로 인증번호를 발송했어요.</p>
        </div>
        <input
          className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
          type="text"
          {...verifyOTP("code", {
            required: true,
          })}
          placeholder="SMS 인증번호를 입력해주세요."
        />
        <button
          disabled={!formState.isValid ? true : false}
          style={{
            backgroundColor: !formState.isValid ? "#E8e8e8" : "#4065f6",
          }}
          className="h-12 w-full  mx-auto flex items-center justify-center p-4  rounded-lg text-white mobile:w-full tablet:text-[15px] "
        >
          인증하기
        </button>
        {error && <ErrorMessage children="인증번호가 일치하지 않습니다." />}
      </form>
      ;
    </section>
  );
};
