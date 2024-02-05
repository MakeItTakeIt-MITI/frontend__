import { useForm } from "react-hook-form";
import { SMSAuth } from "../interface/authInterface";
import { useVerifySmsMutation } from "../hooks/useVerifySmsMutation";
import { Link } from "react-router-dom";

export const InputEmailAuthenForm = ({ handleCloseModal }) => {
  const { register, handleSubmit, setValue } = useForm<SMSAuth>({});
  const { mutate: verifyCode, data: userInfoData } = useVerifySmsMutation();

  const onSubmit = (data: SMSAuth) => {
    verifyCode(data, {
      onSuccess: () => {
        console.log(userInfoData);
        setValue("code", "");
      },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">인증번호를 입력해주세요.</h1>
      <p className="text-gray-600">인증번호를 입력해주세요.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="text"
          {...register("code", {
            required: true,
          })}
          className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
        />
        <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
          인증하기
        </button>
      </form>
      {userInfoData && (
        <div className="flex items-center flex-col gap-4">
          <p className="text-green-500  font-bold text-xl ">
            이메일: {userInfoData?.data.email}
          </p>
          <p onClick={handleCloseModal} className="underline">
            로그인
          </p>
        </div>
      )}
    </div>
  );
};
