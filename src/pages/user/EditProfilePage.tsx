// import { useNavigate } from "react-router-dom";
import useUserDataStore from "../../store/useUserDataStore";
import { useUserInfoQuery } from "../../hooks/games/useUserInfoQuery";

import { LoadingPage } from "../LoadingPage";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { useForm } from "react-hook-form";

import { UserEditField } from "../../interface/user-edit-interface";
import { useUpdateUserMutation } from "../../hooks/auth/useUpdateUserMutation";
import { useState } from "react";

export const EditProfilePage = () => {
  const [nicknameVerification, setNicknameVerification] = useState("");
  const [passVerification, setPassVerification] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { userId } = useUserDataStore();
  const { data, isPending } = useUserInfoQuery(userId);

  // const { mutate: nicknameMutation, data: duplicateData } =
  //   useValidateDuplicateNickname(setNicknameVerification);

  const { register, handleSubmit, getValues, formState } =
    useForm<UserEditField>();

  const { mutate: updateUserInfoMutation } = useUpdateUserMutation(
    userId,
    setPassVerification,
    setNicknameVerification,
    setNewPassword
  );

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

  const handleValidateNick = () => {
    // const nickname = { nickname: getValues("nickname") };
    // nicknameMutation(nickname);
  };

  return (
    <section className="laptop:my-4 mobile:my-0">
      <NavigateToPrevContainer children="내 정보" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="laptop:w-[500px] min-h-[735px]   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-10 laptop:px-12 mobile:p-4 rounded-lg flex flex-col justify-between "
      >
        <h1 className="text-center font-bold text-xl">내 정보</h1>
        <div className="flex items-center justify-center w-full">
          {/* empty profile icon  */}
          <div className="h-[64px] w-[64px] rounded-full bg-[#D9D9D9]"></div>
        </div>
        {/* nickname field */}
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-1">
            <div className="relative flex flex-col gap-2">
              <label htmlFor="nickname" className="text-[#999]">
                닉네임
              </label>
              <input
                type="text"
                id="nickname"
                // readOnly={
                //   duplicateData?.data.nickname.is_duplicated === false
                //     ? true
                //     : false
                // }
                role="input-nickname"
                className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full relative"
                placeholder={data?.data.nickname}
                {...register("nickname")}
              />
              <button
                className="text-sm absolute right-2 bottom-2 ml-2 w-[81px] rounded-xl tablet:mx-auto h-[36px] "
                type="button"
                role="change-nickname"
                onClick={handleValidateNick}
                // style={{
                //   backgroundColor:
                //     duplicateData?.data.nickname.is_duplicated === false
                //       ? "#E8E8E8"
                //       : "#4065F6",
                //   color:
                //     duplicateData?.data.nickname.is_duplicated === false
                //       ? "black"
                //       : "white",
                // }}
              >
                중복확인
              </button>
            </div>
            {nicknameVerification && (
              <p className="text-[#E92C2C] text-[13px]">
                {nicknameVerification}
              </p>
            )}
            {/* {duplicateData?.data.nickname.is_duplicated === true && (
              <p className="text-[#E92C2C] text-[13px]">
                이미 사용중인 닉네임입니다.
              </p>
            )}
            {duplicateData?.data.nickname.is_duplicated === false && (
              <p className="text-green-400 text-[13px]">
                사용 가능한 닉네임입니다.
              </p>
            )} */}
          </div>

          {/* passworld field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-[#999]">
              기존 비밀번호
            </label>
            <input
              type="password"
              id="password"
              role="input-password"
              className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
              placeholder="기존 비밀번호를 입력해주세요"
              // {...register("password")}
              {...register("password", {
                required: true,
              })}
            />
            {passVerification && (
              <p className="text-[#E92C2C] text-[13px]">{passVerification}</p>
            )}
          </div>
          <div className="flex flex-col gap-4">
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
          </div>
        </div>
        {formState.isValid ? (
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
        )}{" "}
      </form>
    </section>
  );
};
