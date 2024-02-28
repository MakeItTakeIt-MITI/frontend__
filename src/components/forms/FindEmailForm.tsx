import { useForm } from "react-hook-form";
import { FindEmailField } from "../../user/FindMyEmailModal";
import { useFindEmailMutation } from "../../hooks/useFindEmailMutation";

export const FindEmailForm = () => {
  const { mutate, data: userData } = useFindEmailMutation();
  const { register, handleSubmit, setValue } = useForm<FindEmailField>({});

  const requestAuthenCode = (data: FindEmailField) => {
    mutate(data, {
      onSuccess: (userData) => {
        const authentication_token = userData?.data.authentication_token;
        localStorage.setItem("authentication_token", authentication_token);
      },
    });
    setValue("phone", "");
  };

  return (
    <form
      onSubmit={handleSubmit(requestAuthenCode)}
      className="flex gap-4 h-[60px]"
    >
      <input
        type="text"
        {...register("phone", {
          required: true,
        })}
        placeholder="'-'을 제외한 휴대폰번호를 입력해주세요."
        className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
      />
      <button className=" bg-[#4065F6] w-[150px] text-white px-4 py-2 rounded-lg  ">
        {userData?.status_code === 201 ? "다시 요청" : "인증 요청"}
      </button>
    </form>
  );
};
