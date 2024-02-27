import { NavigateToPrevContainer } from "../components/NavigateToPrevContainer";
import useUserDataStore from "../store/useUserDataStore";
import { deleteAccount } from "../api/users";
import { useNavigate } from "react-router-dom";
import { useUserInfoQuery } from "../hooks/useUserInfoQuery";
import { LoadingPage } from "./LoadingPage";
import { NicknameEditForm } from "../components/forms/NicknameEditForm";
import { PasswordUpdateForm } from "../components/forms/PasswordUpdateForm";
import profileImg from "../assets/profile_circle (1).svg";

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
    // <div className=" w-full tablet:max-w-[90rem] tablet:px-[13rem] tablet:mb-0 mx-auto  mobile:mb-[4rem] py-3">
    <div className="tablet:w-[500px] mobile:w-full mx-auto h-full ">
      {/* FAQ  */}
      {/* 프로필 수정 */}
      <NavigateToPrevContainer />
      <div className="flex  mobile:flex-col tablet:flex-row  mobile:p-6">
        {/* 사용자 정보 */}
        <div className="w-full">
          <div className="flex items-center gap-1.5  ">
            <div>
              <img src={profileImg} alt="profile icon" />
            </div>
            <div className=" flex flex-col ">
              <p className="text-2xl font-bold">{data?.data.nickname}</p>
              <p className="text-[12px] text-[#969696]">{data?.data.email}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mobile:p-6 tablet:py-6 tablet:mx-13  text-white ">
            <div className="flex gap-7 ">
              <div className="w-full h-[52px] bg-[#74BCFF] p-2 rounded-lg">
                <p className="text-[10px] ">평점</p>
                <p className="text-right">/</p>
              </div>
              <div className="w-full h-[52px] bg-[#FFA674] p-2 rounded-lg">
                <p className="text-[10px] ">레벨</p>
                <p className="text-right">/</p>
              </div>
            </div>
            <div className="w-full bg-[#FFC774] p-2 rounded-lg">
              <p className="text-[10px] ">나의 지갑</p>
              <p className="text-right">/</p>
            </div>
          </div>
          <hr />
          {/* 바로가기 메뉴 */}
          <div className="px-2 py-3 w-full">
            <h4 className="text-[28px] font-bold">내 정보</h4>
            <ul className="flex flex-col gap-2.5 list-disc	p-5 text-[16px]">
              <li>작성 리뷰</li>
              <li>내 리뷰</li>
              <li>프로필 수정</li>
              <li>FAQ</li>
              <li>고객센터</li>
            </ul>
          </div>
        </div>
        <div className="w-full hidden">
          <NavigateToPrevContainer />
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
