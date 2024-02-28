import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNicknameSchema } from "../../modals/useNicknameSchema";
import { NicknameField, NicknameProps } from "../../interface/usersInterface";
import { useNicknameChangeMutation } from "../../hooks/useNicknameChangeMutation";

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
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit(handleChangeNickname)}
      className="flex flex-col gap-6 p-4 mobile:w-full "
    >
      <h4 className="font-bold">닉네임 수정</h4>
      <div className="flex items-center gap-2">
        <input
          type="text"
          id="nickname"
          required
          role="input-nickname"
          className=" h-[60px] p-4 bg-[#F7F7F7] rounded-lg w-full "
          placeholder={data?.data.nickname}
          {...register("nickname")}
        />
        <button
          className=" rounded-xl w-16 tablet:mx-auto h-14 bg-[#4065f6] text-white "
          role="change-nickname"
        >
          수정
        </button>
      </div>

      {isError && (
        <p className="text-center text-red-400 font-bold text-sm">
          닉네임 변경에 실패했습니다.
        </p>
      )}
      {errors.nickname && (
        <p className="text-center text-red-400 font-bold text-sm">
          {errors.nickname.message}
        </p>
      )}
    </form>
  );
};
