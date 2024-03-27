import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import useUserDataStore from "../../store/useUserDataStore";
import { useUserInfoQuery } from "../../hooks/useUserInfoQuery";
import { LoadingPage } from "../LoadingPage";
import profileImg from "../../assets/profile_circle (1).svg";
import { Link } from "react-router-dom";

export const UserMyPage = () => {
  const { userId } = useUserDataStore();
  const { data, isPending, isError } = useUserInfoQuery(userId);

  if (isPending) {
    return <LoadingPage />;
  }
  if (isError) {
    return <p>Error..</p>;
  }

  return (
    <>
      {/* <div className=" w-full tablet:max-w-[90rem] laptop:px-[13rem] tablet:px-[2rem] tablet:mb-0 mx-auto  mobile:mb-[4rem] py-3"> */}
      {/* // <div className=" mobile:w-full mx-auto h-full "> */}
      {/* FAQ  */}
      {/* 프로필 수정 */}
      <NavigateToPrevContainer />

      <div className="w-[600px] mx-auto mobile:p-3 laptop:p-0">
        <div className="flex  flex-col mobile:py-6 mobile:px-2">
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
          </div>

          <div className="flex flex-col gap-2  my-4 text-white">
            <div className="flex  gap-2 h-[54px] ">
              <div className="bg-[#74BCFF] w-full py-1 px-2 rounded-lg">
                <p className="text-sm">⭐️ 리뷰 평점</p>
                <div className="text-right font-bold">
                  <span>4.5</span>
                  <span>/</span>
                  <span>5.0</span>
                </div>
              </div>
              <div className="bg-[#FFA674] w-full py-1 px-2 rounded-lg">
                <p className="text-sm">🎯 유저 레벨</p>
                <div className="text-right font-bold">
                  <span>상위 10%</span>
                  <span>-</span>
                  <span>MVP</span>
                </div>
              </div>
            </div>
            <div className="bg-[#FFC774] h-[54px] py-1 px-2 rounded-lg">
              <p className="text-sm">💰 나의 지갑</p>
              <p className="text-right font-bold">₩ 130,000</p>
            </div>
          </div>
          <hr className="w-full bg-[#fff] my-5" />
          {/* <EditProfile /> */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[20px] font-bold">메뉴</h2>
            <Link to="/">🗒 작성 리뷰</Link>
            <Link to="/">📭 내 리뷰</Link>
            <Link to={`/profile/${userId}/edit`}>🏀 프로필 수정</Link>
            <Link to="/">⁉️ FAQ</Link>
            <Link to="/">📢 고객센터</Link>
          </div>
        </div>
      </div>
    </>
  );
};
