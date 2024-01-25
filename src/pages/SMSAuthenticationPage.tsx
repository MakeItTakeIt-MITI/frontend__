import { useEffect } from "react";
import { SMSAuth } from "../interface/authInterface";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useVerifySmsMutation } from "../hooks/useVerifySmsMutation";
import { RequestCodeField } from "../interface/usersInterface";
import { useRequestSmsCodeMutation } from "../hooks/useRequestSmsCodeMutation";

export const SMSAuthenticationPage = () => {
  const navigate = useNavigate();
  // const [error, setError] = useState(false);

  useEffect(() => {
    const authentication_token = localStorage.getItem("authentication_token");
    if (!authentication_token) {
      navigate("/");
    }
  }, []);
  const { register: verifyOTP, handleSubmit: submitOTP } = useForm<SMSAuth>();
  const { register: registerCode, handleSubmit: handleRequestSms } =
    useForm<RequestCodeField>();

  const { mutate: mutateVerifySms } = useVerifySmsMutation();
  const { mutate: mutateRequestSms } = useRequestSmsCodeMutation();

  const onSubmitCode = (data: SMSAuth) => {
    mutateVerifySms(data);
  };

  const onSubmitRequestCode = (data: RequestCodeField) => {
    mutateRequestSms(data);
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center h-screen ">
      <form
        onSubmit={submitOTP(onSubmitCode)}
        className="w-full mobile:px-4 tablet:px-[13rem] text-[14px] flex items-center flex-col gap-4 justify-center"
      >
        <h1 className="text-2xl font-bold">SMS 인증번호를 확인해주세요</h1>
        <input
          className="relative mobile:w-full tablet:w-[500px] h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="text"
          {...verifyOTP("code", {
            required: true,
          })}
          placeholder="SMS 인증번호를 입력해주세요."
        />
        <button className="mobile:w-full tablet:w-[500px]  h-[44px] bg-[#4065f6] text-white  w-16   rounded-xl text-[13px]  ">
          인증하기
        </button>
        {/* {error && (
          <p className=" text-red-500 text-sm">SMS 인증을 실패하셨습니다.</p>
        )} */}
      </form>

      <form
        onSubmit={handleRequestSms(onSubmitRequestCode)}
        className="w-full mobile:px-4 tablet:px-[13rem] text-[14px] flex items-center flex-col gap-4 justify-center"
      >
        <h1 className="text-2xl font-bold">SMS 인증번호를 재요청</h1>
        {/* <div className="mobile:w-full flex flex-col gap-3 text-[14px]"> */}
        <input
          className="mobile:w-full tablet:w-[500px] h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="email"
          {...registerCode("email", {
            required: true,
          })}
          placeholder="이메일을 입력해주세요."
        />
        <input
          className="mobile:w-full tablet:w-[500px] h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="password"
          {...registerCode("password", {
            required: true,
          })}
          placeholder="비밀번호를 입력해주세요."
        />
        <button className="mobile:w-full tablet:w-[500px]  h-[44px] bg-[#4065f6] text-white  w-16   rounded-xl text-[13px]  ">
          재요청
        </button>
        {/* </div> */}
      </form>
    </div>
  );
};
