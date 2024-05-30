// import { useNavigate } from "react-router-dom";
import useUserDataStore from "../../store/useUserDataStore";
import { useUserInfoQuery } from "../../hooks/games/useUserInfoQuery";
import profileIcon from "../../assets/svg/profile_icon_64.svg";

import { LoadingPage } from "../LoadingPage";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { useForm } from "react-hook-form";

import { UserEditField } from "../../interface/user-edit-interface";
import { useUpdateUserMutation } from "../../hooks/auth/useUpdateUserMutation";

import { useNicknameChangeMutation } from "../../hooks/user/useNicknameChangeMutation";
import { ErrorMessage } from "../../components/StatusMessages/ErrorMessage";
import { ExistingNickname } from "../../components/StatusMessages/ErrorMessage.stories";
import { SuccessMessage } from "../../components/StatusMessages/SuccessMessage";
import { NicknameAllowed } from "../../components/StatusMessages/SuccessMessage.stories";

export const EditProfilePage = () => {
  const { userId } = useUserDataStore();
  const { data, isPending } = useUserInfoQuery(userId);

  const { register, handleSubmit, getValues, watch, formState } =
    useForm<UserEditField>();

  const { mutate: updateUserInfoMutation } = useUpdateUserMutation(userId);
  const { mutate: mutateNickname, data: nicknameResponse } =
    useNicknameChangeMutation(userId);
  console.log(nicknameResponse);

  // const { mutate: verifyNickname, data: nicknameDuplicateResponse } =
  //   useCheckNicknameDuplicateMutation();

  const removeEmptyFields = (data: UserEditField) => {
    Object.entries(data).forEach(([key, value]) => {
      if (value === "") {
        delete data[key as keyof UserEditField];
      }
    });
  };
  const onSubmit = (userData: UserEditField) => {
    removeEmptyFields(userData);
    updateUserInfoMutation(userData);
  };

  if (isPending) {
    return <LoadingPage />;
  }

  const handleValidateNickname = () => {
    const nicknameData = { nickname: getValues("nickname") };
    if (nicknameData) {
      mutateNickname(nicknameData);
    }
  };

  const watchNickname = watch("nickname");

  return (
    <section className="laptop:mt-[15px] laptop:mb-[667px] mobile:my-0">
      <NavigateToPrevContainer children="내 정보" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="laptop:w-[500px] gap-[30px]   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-[50px] laptop:px-[60px] mobile:p-4 rounded-lg flex flex-col justify-between "
      >
        <div className="flex items-center justify-center w-full">
          {/* empty profile icon  */}
          <img
            src={profileIcon}
            className="h-[64px] w-[64px] rounded-full bg-[#D9D9D9]"
          ></img>
        </div>
        {/* nickname field */}
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-1">
            <div className="space-y-3">
              <label
                className="text-neutral-400 text-sm font-normal"
                id="nickname"
                children="닉네임"
              />
              <div className="relative">
                <input
                  type="text"
                  id="nickname"
                  autoComplete="disabled"
                  className="input-primary"
                  placeholder={data?.data.nickname}
                  {...register("nickname")}
                />
                {/* bg-[#4065F0] */}
                <button
                  onClick={handleValidateNickname}
                  type="button"
                  disabled={watchNickname ? false : true}
                  style={{
                    backgroundColor: watchNickname ? "#4065F0" : "#E8E8E8",
                    color: watchNickname ? "#fff" : "#969696",
                  }}
                  className="w-[81px] h-[36px] top-0 bottom-0 m-auto bg-[#E8E8E8]  text-neutral-400 text-xs absolute right-[9px]   rounded-lg"
                >
                  변경하기
                </button>
                {/* <button
                  onClick={handleValidateNickname}
                  type="button"
                  style={{
                    backgroundColor: nicknameDuplicateResponse?.data.nickname
                      .is_duplicated
                      ? "#f7f7f7"
                      : "#4065F0",
                    color: nicknameDuplicateResponse?.data.nickname
                      .is_duplicated
                      ? "#d9d9d9"
                      : "#fff",
                  }}
                  className="w-[81px] absolute right-4 bottom-[11px] top-[11px] text-[12px]  rounded-lg"
                >
                  중복확인
                </button> */}
              </div>
              {nicknameResponse?.status_code === 400 && (
                <ErrorMessage {...ExistingNickname.args} />
              )}{" "}
              {nicknameResponse?.status_code === 200 && (
                <SuccessMessage {...NicknameAllowed.args} />
              )}
            </div>
            {/* {nicknameDuplicateResponse?.data.nickname.is_duplicated && (
              <ErrorMessage {...ExistingNickname.args} />
            )}
            {nicknameDuplicateResponse?.status_code === 400 &&
              nicknameDuplicateResponse?.error_code === 101 && (
                <ErrorMessage {...NicknameRegexFailure.args} />
              )}
            {nicknameDuplicateResponse?.status_code === 200 &&
              !nicknameDuplicateResponse?.data.nickname.is_duplicated && (
                <SuccessMessage {...NicknameAllowed.args} />
              )} */}
          </div>

          {/* passworld field */}
          {/* <div className="flex flex-col gap-2">
            <FormLabel id="password" children="기존 비밀번호" />
            <input
              type="password"
              id="password"
              role="input-password"
              className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
              placeholder="기존 비밀번호를 입력해주세요"
              {...register("password", {
                required: true,
              })}
            />
            {passVerification && (
              <p className="text-[#E92C2C] text-[13px]">{passVerification}</p>
            )}
          </div> */}
          {/* <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="new_password" className="text-[#999]">
                새로운 비밀번호
              </label>
              <input
                type="password"
                id="new_password"
                role="input-password"
                className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
                placeholder="변경할 비밀번호를 입력해주세요."
                {...register("new_password")}
              />
              {newPassword && (
                <p className="text-[#E92C2C] text-[13px]">{newPassword}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="new_check_password" className="text-[#999]">
                새로운 비밀번호 확인
              </label>
              <input
                type="password"
                id="new_check_password"
                role="input-password"
                className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
                placeholder="변경할 비밀번호를 입력해주세요."
                {...register("new_password_check")}
              />
              {getValues("new_password") !==
                getValues("new_password_check") && (
                <p className="text-[#E92C2C] text-[13px]">
                  비밀번호가 일치하지 않습니다.
                </p>
              )}
            </div>
          </div> */}
        </div>
        {/* {formState.isValid ? (
          <button
            type="submit"
            className="h-[56px] w-full rounded-lg bg-[#4065F6] text-white "
          >
            {" "}
            저장하기
          </button>
        ) : (
          <button disabled className="h-[56px] w-full rounded-lg bg-[#E8E8E8] ">
            저장하기
          </button>
        )}{" "} */}
      </form>
    </section>
  );
};
