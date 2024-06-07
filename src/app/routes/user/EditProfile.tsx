// import { useNavigate } from "react-router-dom";
import useUserDataStore from "../../../store/useUserDataStore";
import { useUserInfoQuery } from "../../../hooks/games/useUserInfoQuery";
import profileIcon from "../../../assets/svg/profile_icon_64.svg";

import { LoadingPage } from "../LoadingPage";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { useForm } from "react-hook-form";

import { UserEditField } from "../../../interface/user-edit-interface";

import { useNicknameChangeMutation } from "../../../hooks/user/useNicknameChangeMutation";
import { ErrorMessage } from "../../../components/StatusMessages/ErrorMessage";
import {
  ExistingNickname,
  PasswordConfirmNotMatching,
  PasswordRegexFailure,
  WrongPassword,
} from "../../../components/StatusMessages/ErrorMessage.stories";
import { SuccessMessage } from "../../../components/StatusMessages/SuccessMessage";
import {
  NicknameAllowed,
  SafePassword,
} from "../../../components/StatusMessages/SuccessMessage.stories";
import { usePasswordChangeMutation } from "../../../hooks/user/usePasswordChangeMutation";
import { PasswordField } from "../../../interface/usersInterface";
import { AlertModal } from "../../../components/common/AlertModal";
import { ProfileEditSuccess } from "../../../stories/Modal.stories";

export const EditProfile = () => {
  const { userId } = useUserDataStore();
  const { data, isPending } = useUserInfoQuery(userId);

  const { register, handleSubmit, getValues, watch } = useForm<PasswordField>();

  const { mutate: mutatePassword, data: passwordResponse } =
    usePasswordChangeMutation(userId);
  const { mutate: mutateNickname, data: nicknameResponse } =
    useNicknameChangeMutation(userId);

  const removeEmptyFields = (data: UserEditField) => {
    Object.entries(data).forEach(([key, value]) => {
      if (value === "") {
        delete data[key as keyof UserEditField];
      }
    });
  };
  const onSubmit = (userData: PasswordField) => {
    removeEmptyFields(userData);
    mutatePassword(userData);
    console.log(passwordResponse);
  };

  if (isPending) {
    return <LoadingPage />;
  }

  const handleChangeNickname = () => {
    const nicknameData: any = { nickname: getValues("nickname") };
    if (nicknameData) {
      mutateNickname(nicknameData);
    }
  };

  const watchNickname = watch("nickname");
  const watchValidation =
    !watch("password") ||
    !watch("new_password") ||
    !watch("new_password_check");

  if (passwordResponse?.status_code === 200) {
    return <AlertModal {...ProfileEditSuccess.args} />;
  }

  return (
    <section
      style={{
        marginBottom: data?.data.oauth === null ? "100px" : "667px",
      }}
      className={"laptop:mt-[15px] mobile:my-0"}
    >
      <NavigateToPrevContainer children="내 정보" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ minHeight: data?.data.oauth === null ? "700px" : "200px" }}
        className="laptop:w-[500px]   gap-[30px]   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-[50px] laptop:px-[60px] mobile:p-4 rounded-lg flex flex-col  "
      >
        <div className="flex items-center justify-center w-full">
          <img
            src={profileIcon}
            className="h-[64px] w-[64px] rounded-full bg-[#D9D9D9]"
          ></img>
        </div>
        <div className="flex flex-col justify-between gap-[30px]">
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
                  className="h-[50px] w-full p-4 text-neutral-400 text-sm font-medium  leading-none  bg-[#F7F7F7] rounded-lg"
                  placeholder={data?.data.nickname}
                  {...register("nickname", {
                    required: false,
                  })}
                />
                <button
                  onClick={handleChangeNickname}
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
              </div>
              {nicknameResponse?.status_code === 400 && (
                <ErrorMessage {...ExistingNickname.args} />
              )}{" "}
              {nicknameResponse?.status_code === 200 && (
                <SuccessMessage {...NicknameAllowed.args} />
              )}
            </div>
          </div>

          {data?.data.oauth === null && (
            <>
              <div className="flex flex-col gap-1">
                <div className="space-y-3">
                  <label
                    className="text-neutral-400 text-sm font-normal"
                    id="password"
                    children="기존 비밀번호"
                  />
                  <input
                    type="password"
                    id="password"
                    autoComplete="disabled"
                    className="h-[50px] w-full p-4 text-neutral-400 text-sm font-medium  leading-none  bg-[#F7F7F7] rounded-lg"
                    placeholder="기존 비밀번호를 입력해주세요"
                    {...register("password", {
                      required: true,
                    })}
                  />

                  {passwordResponse?.status_code === 401 &&
                    passwordResponse?.error_code === 940 && (
                      <ErrorMessage {...WrongPassword.args} />
                    )}
                </div>
              </div>
              {/* new password */}
              <div className="flex flex-col gap-1">
                <div className="space-y-3">
                  <label
                    className="text-neutral-400 text-sm font-normal"
                    id="new_password"
                    children="새로운 비밀번호"
                  />
                  <input
                    type="password"
                    id="new_password"
                    autoComplete="disabled"
                    className="h-[50px] w-full p-4 text-neutral-400 text-sm font-medium  leading-none  bg-[#F7F7F7] rounded-lg"
                    placeholder="변경할 비밀번호를 입력해주세요."
                    {...register("new_password", {
                      required: true,
                    })}
                  />

                  {passwordResponse?.status_code === 400 &&
                    passwordResponse?.error_code === 101 && (
                      <ErrorMessage {...PasswordRegexFailure.args} />
                    )}
                  {passwordResponse?.status_code === 200 && (
                    <SuccessMessage {...SafePassword.args} />
                  )}
                </div>
              </div>
              {/* new pass confirm */}
              <div className="flex flex-col gap-1">
                <div className="space-y-3">
                  <label
                    className="text-neutral-400 text-sm font-normal"
                    id="new_password_check"
                    children="새로운 비밀번호 확인"
                  />
                  <input
                    type="password"
                    id="new_password_check"
                    autoComplete="disabled"
                    className="h-[50px] w-full p-4 text-neutral-400 text-sm font-medium  leading-none bg-[#F7F7F7] rounded-lg"
                    placeholder="변경할 비밀번호를 입력해주세요."
                    {...register("new_password_check", {
                      required: true,
                    })}
                  />
                </div>
                {watch("new_password") !== watch("new_password_check") && (
                  <ErrorMessage {...PasswordConfirmNotMatching.args} />
                )}
              </div>
            </>
          )}
        </div>
        {data?.data.oauth === null && (
          <button
            type="submit"
            disabled={watchValidation ? true : false}
            style={{
              backgroundColor: watchValidation ? "#f7f7f7" : "#4065F6",
              color: watchValidation ? "#969696" : "#fff",
            }}
            className="h-[50px] w-full p-4  rounded-lg text-sm text-[#969696]"
          >
            저장하기
          </button>
        )}
      </form>
    </section>
  );
};
