import { useForm } from "react-hook-form";
import { SMSAuth } from "../../interface/authInterface";
import { useVerifySmsMutation } from "../../hooks/useVerifySmsMutation";

export const FindEmailAuthCode = () => {
  const { register, handleSubmit, setValue } = useForm<SMSAuth>({});
  const auth_token = localStorage.getItem("authentication_token");
  const {
    mutate: verifyCode,
    data,
    isSuccess,
    isError,
  } = useVerifySmsMutation(auth_token);

  const onSubmit = (data: SMSAuth) => {
    verifyCode(data, {
      onSuccess: () => {
        setValue("code", "");
      },
    });
  };

  console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 h-[60px]">
        <input
          type="text"
          placeholder="인증 번호를 입력해주세요."
          disabled={data?.status_code === 200 ? true : false}
          {...register("code", {
            required: true,
          })}
          className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
        />
        <button
          style={{ backgroundColor: data?.status_code ? "#e8e8e8" : "#4065F6" }}
          disabled={data?.status_code === 200 ? true : false}
          className="  w-[150px] text-white px-4 py-2 rounded-lg "
        >
          {data?.status_code === 200 ? "인증 완료" : "인증 하기"}
        </button>
      </form>
      {isSuccess && (
        <p className="text-green-500 text-center">{data?.data.email}입니다.</p>
      )}
      {isError && <p className="text-red-500 text-center">인증 실패</p>}
    </>
  );
};
