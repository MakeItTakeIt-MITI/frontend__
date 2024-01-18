import { useEffect, useState } from "react";
import { authenticationSMS } from "../api/authentication";
import { SMSAuth } from "../interface/authInterface";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const SMSAuthenticationPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    const authentication_token = localStorage.getItem("authentication_token");
    if (!authentication_token) {
      navigate("/");
    }
  }, []);
  const { register, handleSubmit } = useForm<SMSAuth>();

  const onSubmit = async (data: SMSAuth) => {
    try {
      await authenticationSMS(data);
      localStorage.removeItem("authentication");
      navigate("/login");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-[13rem] h-screen flex items-center flex-col gap-4 justify-center"
    >
      <h1 className="text-[24px] font-bold">SMS 인증번호를 확인해주세요.</h1>
      <div className="flex gap-2">
        <input
          className="mobile:w-full tablet:w-[500px] h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="text"
          {...register("code", {
            required: true,
          })}
          placeholder="SMS 인증번로 입력해주세요."
        />
        <div className="flex gap-2">
          <button
            type="button"
            className="bg-[#E8E8E8]  rounded-xl w-[100px] text-sm "
          >
            재전송 요청
          </button>
          <button
            type="submit"
            className="bg-[#4065f6]  text-white rounded-xl w-[100px] text-sm "
          >
            인증하기
          </button>
        </div>
      </div>
      {error && (
        <p className=" text-red-500 text-sm">SMS 인증을 실패하셨습니다.</p>
      )}
    </form>
  );
};
