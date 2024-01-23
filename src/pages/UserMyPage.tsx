import { useState } from "react";
import { useNicknameMutation } from "../hooks/useNicknameMutation";
import { useDeleteAccMutation } from "../hooks/useDeleteAccMutation";

export const UserMyPage = () => {
  const [nickname, setNickname] = useState("");
  // const id = localStorage.getItem("id");
  // console.log(id);

  const handleChangeNickname = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateNickname(nickname);
  };

  const handleDeleteAccount = () => {
    mutateDelete();
  };

  const { mutate: mutateNickname, isPending, isError } = useNicknameMutation();
  const { mutate: mutateDelete } = useDeleteAccMutation();

  if (isPending) {
    console.log("Pending..");
  }

  if (isError) {
    console.log(isError);
  }

  return (
    <div className=" mobile:w-full tablet:px-[13rem] flex flex-col gap-4">
      <div>
        {" "}
        <h1 className="p-4">지원님 안녕하세요</h1>
        <hr className="w-full h-2 bg-gray-200" />
      </div>
      <form onSubmit={handleChangeNickname} className="flex flex-col gap-4 p-4">
        <div className="flex gap-2">
          <label htmlFor="nickname">닉네임</label>
          <input
            className="bg-gray-100 border"
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder={nickname}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">현재 비밀번호</label>
          <input
            className="bg-gray-100 border"
            type="password"
            name=""
            id="password"
          />
          <label htmlFor="password_check">비밀번호 확인</label>
          <input
            className="bg-gray-100 border"
            type="password"
            name=""
            id="password_check"
          />
        </div>

        <button className="bg-blue-400 border-white h-[54px] text-white rounded-xl">
          닉네임 수정
        </button>
      </form>
      <div onClick={handleDeleteAccount}>
        <button className="w-full bg-gray-200 h-14">회원탈퇴</button>
      </div>
    </div>
  );
};
