import { NavigateToPrevContainer } from "../components/NavigateToPrevContainer";
import { useForm } from "react-hook-form";
import { UserEditField } from "../interface/usersInterface";
import useUserDataStore from "../store/useUserDataStore";
import {
  deleteAccount,
  userEditNickname,
  userEditPassword,
} from "../api/users";
import { useNavigate } from "react-router-dom";
import { useUserInfoQuery } from "../hooks/useUserInfoQuery";
import { useState } from "react";

export const UserMyPage = () => {
  const { register, watch } = useForm<UserEditField>();
  const { userId } = useUserDataStore();
  const navigate = useNavigate();
  const { data } = useUserInfoQuery(userId);
  const [passwordError, setPasswordError] = useState("");

  console.log("mypage user data query", data);

  const handleDeleteAccount = () => {
    if (window.confirm("정말 계정을 삭제하기겠습니까?")) {
      alert("계정 삭제되었습니다");
      const id = data?.data.id;
      deleteAccount(id);
      localStorage.clear();
      // window.location.reload();
      navigate("/login");
    } else {
      alert("취소합니다.");
      return;
    }
  };

  const handleChangeNickname = () => {
    const watchNick = watch("nickname");
    const id = data?.data.id;

    if (id != null && watchNick != null) {
      const userEditField: UserEditField = {
        id: id,
        nickname: watchNick,
      };

      userEditNickname(id, userEditField);
      window.location.reload();
    }
  };

  const handleChangePassword = () => {
    const watchPassword = watch("password");
    const watchPasswordCheck = watch("password_check");
    const id = data?.data.id;

    if (watchPassword !== watchPasswordCheck) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (id != null && watchPassword != null && watchPasswordCheck !== null) {
      const userEditField: UserEditField = {
        id: id,
        password: watchPassword,
        password_check: watchPasswordCheck,
      };

      const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;
      if (!passwordRegex.test(watchPassword)) {
        setPasswordError(
          "비밀번호는 8자 이상의 영문 대소문자와 숫자, 특수문자를 포함하여야 합니다."
        );
        return;
      }

      setPasswordError("");
      userEditPassword(id, userEditField);
      window.location.reload();
    }
  };

  return (
    <div className="tablet:p-10 mobile:flex mobile:flex-col  h-screen pb-[6rem] ">
      <NavigateToPrevContainer />
      <div className="p-4 flex flex-col gap-2">
        <p className="text-xl">
          {data?.data.name} 님 ({data?.data.nickname})
        </p>
        <p>현재 모집중인 경기에 참여하기!</p>
      </div>
      <hr className="mobile:block tablet:hidden w-full" />

      <form className="flex flex-col gap-6  mobile:w-full mobile:p-4 tablet:px-[13rem] tablet:w-[600px]">
        <h4 className="font-bold">닉네임 수정</h4>
        <input
          type="text"
          id="nickname"
          required
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full "
          placeholder={data?.data.nickname}
          {...register("nickname", {
            required: true,
          })}
        />
        <button
          className=" rounded-xl w-full  h-14 bg-gray-200"
          onClick={handleChangeNickname}
          type="button"
        >
          닉네임 수정
        </button>
        <input
          type="password"
          id="password"
          required
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full "
          placeholder="새로운 비밀번호를 입력해주세요."
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
        {passwordError && <p className="text-red-400">{passwordError}</p>}

        <button
          type="button"
          onClick={handleChangePassword}
          className="rounded-xl w-full h-14 bg-gray-200"
        >
          비밀번호 수정
        </button>
      </form>
      <hr className="mobile:block tablet:hidden w-full" />

      <div className="p-4 flex flex-col gap-4">
        <p className="text-red-400 ">계정 삭제하기</p>
        <button
          type="button"
          onClick={handleDeleteAccount}
          className=" rounded-xl w-full  h-14 bg-gray-200"
        >
          회원탈퇴
        </button>
      </div>
    </div>
  );
};
