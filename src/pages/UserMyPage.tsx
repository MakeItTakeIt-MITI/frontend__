import { useNicknameMutation } from "../hooks/useNicknameMutation";
import { useDeleteAccMutation } from "../hooks/useDeleteAccMutation";
import { NavigateToPrevContainer } from "../components/NavigateToPrevContainer";
import { useForm } from "react-hook-form";
import { UserEditField } from "../interface/usersInterface";
import useUserDataStore from "../store/useUserDataStore";
import { userEditInfo } from "../api/users";

export const UserMyPage = () => {
  const { register, handleSubmit, getValues, watch } = useForm<UserEditField>();
  const { userId } = useUserDataStore();

  const handleDeleteAccount = () => {
    mutateDelete(userId);
  };

  const { mutate: mutateNickname, isPending, isError } = useNicknameMutation();
  const { mutate: mutateDelete } = useDeleteAccMutation();

  const onSubmit = () => {
    const watchNick = watch("nickname");
    mutateNickname({ id: userId, data: { nickname: watchNick } });
  };

  const handleChangeNickname = () => {
    const nickname = watch("nickname");
    userEditInfo(userId, { nickname });
  };
  if (isPending) {
    console.log("Pending..");
  }

  if (isError) {
    console.log(isError);
  }

  return (
    <div className="tablet:p-10 mobile:flex mobile:flex-col  h-screen pb-[6rem] ">
      <NavigateToPrevContainer />
      <div className="p-4 flex flex-col gap-2">
        <p className="text-xl">지원 님 (자바스원)</p>
        <p>현재 모집중인 경게 참여하세요!</p>
      </div>
      <hr className="mobile:block tablet:hidden w-full" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6  mobile:w-full mobile:p-4 tablet:px-[13rem] tablet:w-[600px]"
      >
        <h4 className="font-bold">닉네임 수정</h4>
        <input
          type="text"
          id="nickname"
          required
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full "
          placeholder="닉네임을 입력해주세요."
          {...register("nickname", {
            required: true,
          })}
        />
        <button onClick={handleChangeNickname} type="button">
          닉네임 변경
        </button>
        <input
          type="password"
          id="password"
          required
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full "
          placeholder="현재 비밀번호를 입력해주세요."
          {...register("password", {
            required: true,
          })}
        />
        <input
          type="password"
          id="password_check"
          required
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full "
          placeholder="확인 비밀번호를 입력해주세요."
          {...register("password_check", {
            required: true,
          })}
        />
        <button className="rounded-xl w-full h-14 bg-gray-200">수정하기</button>
      </form>
      <hr className="mobile:block tablet:hidden w-full" />

      <div className="p-4 flex flex-col gap-4">
        <p className="text-red-400 font-bold">계정 삭제하기</p>
        <button
          onClick={handleDeleteAccount}
          className=" rounded-xl w-full  h-14 bg-gray-200"
        >
          회원탈퇴
        </button>
      </div>
    </div>
  );
};
