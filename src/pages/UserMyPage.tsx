import { NavigateToPrevContainer } from "../components/NavigateToPrevContainer";
import useUserDataStore from "../store/useUserDataStore";
import { deleteAccount } from "../api/users";
import { useNavigate } from "react-router-dom";
import { useUserInfoQuery } from "../hooks/useUserInfoQuery";
import { LoadingPage } from "./LoadingPage";
import { NicknameEditForm } from "../components/forms/NicknameEditForm";
import { PasswordUpdateForm } from "../components/forms/PasswordUpdateForm";

export const UserMyPage = () => {
  const { userId } = useUserDataStore();
  const id = userId;

  const navigate = useNavigate();
  const { data, isLoading, refetch } = useUserInfoQuery(userId);

  const handleDeleteAccount = () => {
    if (window.confirm("정말 계정을 삭제하기겠습니까?")) {
      alert("계정 삭제되었습니다");
      const id = data?.data.id;
      deleteAccount(id);
      localStorage.clear();
      navigate("/user/login");
    } else {
      alert("취소합니다.");
      return;
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className=" w-full tablet:max-w-[90rem] tablet:px-[13rem] tablet:mb-0 mx-auto  mobile:mb-[4rem] py-3">
      <hr className="  w-full tablet:block mobile:hidden" />

      <div className="flex mobile:flex-col tablet:flex-row">
        <div className="mobile:hidden tablet:block min-w-[250px]">
          <div className="p-4 flex flex-col gap-4 ">
            <p className="text-xl font-bold">
              {data?.data.name} 님 ({data?.data.nickname})
            </p>
            <p>{data?.data.birthday}</p>
            <p>{data?.data.email}</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <button>프로필 수정</button>
            {/* <button className="hover:text-red-400">회원탈퇴</button> */}
          </div>
        </div>
        <div className="w-full">
          <NavigateToPrevContainer />
          <div className="tablet:hidden mobile:block p-4 flex flex-col gap-2">
            <p className="text-xl">
              {data?.data.name} 님 ({data?.data.nickname})
            </p>
            <p>{data?.data.birthday}</p>
            <p>{data?.data.email}</p>
          </div>
          <hr className="  w-full tablet:hidden mobile:block" />

          <NicknameEditForm id={id} refetch={refetch} data={data} />
          <PasswordUpdateForm id={id} refetch={refetch} />
          <div className="flex flex-col gap-6  mobile:w-full mobile:p-4 "></div>
          <hr className="mobile:block tablet:hidden w-full" />

          <div className="flex flex-col gap-6 p-4 mobile:w-full ">
            <h4 className="font-bold">계정 삭제</h4>
            <button
              type="button"
              onClick={handleDeleteAccount}
              className=" rounded-xl mobile:w-full tablet:w-[400px] tablet:mx-auto  h-14 bg-[#db5e5e] text-white"
            >
              회원탈퇴
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
