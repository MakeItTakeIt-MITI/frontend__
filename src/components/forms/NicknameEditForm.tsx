import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNicknameSchema } from "../../modals/useNicknameSchema";
import { NicknameField, NicknameProps } from "../../interface/usersInterface";
import { useNicknameChangeMutation } from "../../hooks/useNicknameChangeMutation";
import errorIcon from "../../assets/alert_failure.svg";

export const NicknameEditForm = ({ id, data }: NicknameProps) => {
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm<NicknameField>({
    resolver: zodResolver(useNicknameSchema),
  });

  const { mutate: mutateNickname, isError } = useNicknameChangeMutation(id);

  const handleChangeNickname = (data: NicknameField) => {
    mutateNickname(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleChangeNickname)}
      className="flex flex-col gap-6 py-4 mobile:w-full "
    >
      <div className="flex flex-col  gap-2 ">
        <label htmlFor="nickname" className="text-[#999]">
          닉네임
        </label>
        <div className="relative">
          <input
            type="text"
            id="nickname"
            required
            role="input-nickname"
            className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full relative"
            placeholder={data?.data.nickname}
            {...register("nickname")}
          />
          <button
            className="text-sm absolute right-2 top-2 ml-2 w-[81px] rounded-xl tablet:mx-auto h-[36px] bg-[#E8E8E8] "
            role="change-nickname"
          >
            중복확인
          </button>
        </div>
      </div>

      {isError && (
        <p className="text-red-400 text-sm flex gap-1">
          <img src={errorIcon} alt="error icon" />{" "}
          <span>이미 사용중인 닉네임입니다.</span>
        </p>
      )}
      {errors.nickname && (
        <p className="text-red-400 font-bold text-sm">
          {errors.nickname.message}
        </p>
      )}
    </form>
  );
};
