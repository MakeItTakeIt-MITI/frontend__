import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useVerifySmsMutation } from "../../hooks/auth/useVerifySmsMutation";
import { CodeVerificationField } from "../../interface/authInterface";
import { ErrorMessage } from "../../components/StatusMessages/ErrorMessage";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { SubmitButton } from "../../components/ui/buttons/SubmitButton";
import { Active, Inactive } from "../../components/ui/buttons/Button.stories";

export const SMSAuthenticationPage = () => {
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

  const { mutate: verifySMSMutation, data: responseData } =
    useVerifySmsMutation(authentication_token);

  const onSubmitCode = (data: CodeVerificationField) => {
    verifySMSMutation(data);
  };

  console.log(responseData?.status_code);
  console.log(responseData?.error_code);

  return (
    <section className="laptop:my-[69px] mobile:m-0">
      <NavigateToPrevContainer children="" />
      <div className="relative laptop:w-[500px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col laptop:justify-center gap-6  mobile:justify-between">
        <form className="relative">
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[26px] font-bold">인증번호 입력</h1>
            <p>회원가입시 입력한 번호로 인증번호를 발송했어요.</p>
            <input
              className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
              type="text"
              {...verifyOTP("code", {
                required: true,
              })}
              placeholder="인증번호를 입력해주세요."
            />
          </div>
        </form>
        {responseData?.status_code === 400 &&
          responseData?.error_code === 102 && (
            <ErrorMessage children="인증번호가 일치하지 않습니다." />
          )}
        {responseData?.status_code === 400 &&
          responseData?.error_code === 101 && (
            <ErrorMessage children="유효한 인증번호가 아니에요." />
          )}
        {responseData?.status_code === 400 &&
          responseData?.error_code === 420 && (
            <ErrorMessage children="요청 시간이 지났어요" />
          )}
        {responseData?.status_code === 400 &&
          responseData?.error_code === 480 && (
            <ErrorMessage children="요청 횟수를 초과하셨어요." />
          )}
        <div className="absolute bottom-0 left-0 right-0 laptop:px-[76px] mobile:px-4 laptop:pb-[74px] mobile:pb-0">
          {" "}
          {!formState.isValid ? (
            <SubmitButton children="  인증하기" {...Inactive.args} />
          ) : (
            <SubmitButton
              onClick={submitOTP(onSubmitCode)}
              children="인증하기"
              {...Active.args}
            />
          )}
        </div>
      </div>
    </section>
  );
};
