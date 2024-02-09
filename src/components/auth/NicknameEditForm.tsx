import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNicknameSchema } from "../../modals/useNicknameSchema";
import { userEditNickname } from "../../api/users";

interface NicknameProps {
  id: number | null;
  refetch: () => void;
  data: { data: { nickname: string } };
}

interface NicknameField {
  id: number | null;
  nickname: string;
}

export const NicknameEditForm = ({ id, refetch, data }: NicknameProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<NicknameField>({
    resolver: zodResolver(useNicknameSchema),
  });

  const handleChangeNickname = (data: NicknameField) => {
    userEditNickname(id, data);
    reset();
    refetch();
  };

  return (
    <form
      onSubmit={handleSubmit(handleChangeNickname)}
      className="flex flex-col gap-6 p-4 w-full"
    >
      <h4 className="font-bold">닉네임 수정</h4>
      <input
        type="text"
        id="nickname"
        required
        role="input-nickname"
        className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full "
        placeholder={data?.data.nickname}
        {...register("nickname")}
      />
      <button
        className=" rounded-xl w-full  h-14 bg-[#4065f6] text-white"
        role="change-nickname"
      >
        닉네임 수정
      </button>
      {errors.nickname && (
        <p className="text-center text-red-400 font-bold text-sm">
          {errors.nickname.message}
        </p>
      )}
    </form>
  );
};
