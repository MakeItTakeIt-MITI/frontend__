import { NavigateToPrevContainer } from "../components/NavigateToPrevContainer";
import useUserDataStore from "../store/useUserDataStore";
import { useUserInfoQuery } from "../hooks/useUserInfoQuery";
import { LoadingPage } from "./LoadingPage";
import profileImg from "../assets/profile_circle (1).svg";
import { EditProfile } from "../components/profile/EditProfile";

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
    <div className=" w-full tablet:max-w-[90rem] laptop:px-[13rem] tablet:px-[2rem] tablet:mb-0 mx-auto  mobile:mb-[4rem] py-3">
      {/* // <div className=" mobile:w-full mx-auto h-full "> */}
      {/* FAQ  */}
      {/* 프로필 수정 */}
      <NavigateToPrevContainer />

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
        <EditProfile />
      </div>
    </div>
  );
};
