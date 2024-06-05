import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import eraseX from "../../../assets/delete_button.png";
import { useForm } from "react-hook-form";
import { NewPassworldField } from "../../../interface/user-edit-interface";
import { useResetPasswordSchema } from "../../../modals/useResetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNewPasswordMutation } from "../../../hooks/auth/useNewPasswordMutation";
import { ErrorMessage } from "../../../components/StatusMessages/ErrorMessage";
import { useGetPassAuthCodeQuery } from "../../../hooks/auth/useGetPassAuthCodeQuery";
import { SuccessMessage } from "../../../components/StatusMessages/SuccessMessage";

export const FindPasswordResetPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    getValues,
    resetField,
    formState: { errors },
  } = useForm<NewPassworldField>({
    mode: "onBlur",
    resolver: zodResolver(useResetPasswordSchema),
  });

  const auth_token = localStorage.getItem("new_auth");
  const { data: new_auth_code } = useGetPassAuthCodeQuery(auth_token);

  const password_auth = new_auth_code?.data.authentication_token;
  const { mutate } = useNewPasswordMutation(password_auth);

  const handleResetPassword = (data: NewPassworldField) => {
    mutate(data);
  };

  const watchPassword = watch("new_password");
  const getValuePassword = getValues("new_password");
  const watchPasswordCheck = watch("new_password_check");
  const getValuePasswordCheck = getValues("new_password_check");

  return (
    <section className="laptop:my-4 mobile:my-0   h-full ">
      <NavigateToPrevContainer children="비밀번호 재설정" />

      <div className="laptop:w-[500px] laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-6  justify-between">
        <div className="h-full w-full flex flex-col gap-6  ">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[24px]">비밀번호 재설정</h1>
          </div>
          <div className="h-[66px] text-[13px] flex items-center justify-center text-center p-4 rounded-lg bg-[#e8e8e8]">
            비밀번호는 특수문자(!@#$%^&), 숫자, 영어 대소문자를 반드시 포함해야
            합니다.
          </div>
          <form className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...register("new_password", {
                  required: true,
                })}
                className="w-full h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
              />

              {watchPassword?.length >= 1 && (
                <button
                  type="button"
                  onClick={() => resetField("new_password")}
                  className="absolute right-2 top-2 bottom-2 text-[12px] p-2 rounded-lg text-[#969696]"
                >
                  <img src={eraseX} alt="x icon" />
                </button>
              )}
            </div>
            {errors.new_password?.message && getValues("new_password") && (
              <ErrorMessage children={errors.new_password.message} />
            )}
            {!errors.new_password?.message && getValuePassword?.length > 8 && (
              <SuccessMessage children="안전한 비밀번호에요!" />
            )}

            <div className="relative">
              <input
                type="password"
                {...register("new_password_check", {
                  required: true,
                })}
                placeholder="비밀번호를 한번 더 입력해주세요."
                className="w-full h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
              />
              {watchPasswordCheck?.length >= 1 && (
                <button
                  type="button"
                  onClick={() => resetField("new_password_check")}
                  className="absolute right-2 top-2 bottom-2 text-[12px] p-2 rounded-lg text-[#969696]"
                >
                  <img src={eraseX} alt="x icon" />
                </button>
              )}
            </div>
            {errors.new_password_check?.message &&
              getValues("new_password") && (
                <ErrorMessage children={errors.new_password_check.message} />
              )}
            {!errors.new_password_check?.message &&
              getValuePasswordCheck?.length > 8 && (
                <SuccessMessage children="안전한 비밀번호에요!" />
              )}
          </form>
        </div>
        <button
          onClick={handleSubmit(handleResetPassword)}
          className="h-[48px] w-full rounded-lg bg-[#4065f5] text-white"
        >
          비밀번호 재설정
        </button>
      </div>
    </section>
  );
};
