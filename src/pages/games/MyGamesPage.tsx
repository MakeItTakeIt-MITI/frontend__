import { Link } from "react-router-dom";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

export const MyGamesPage = () => {
  return (
    <>
      <NavigateToPrevContainer children="나의 경기" />

      <div className="relative laptop:w-[500px]  laptop:h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-5 ">
        <h1 className="font-bold">나의 경기</h1>
        <Link to="/games/guest-history">🏀 나의 참여 경기</Link>
        <Link to="/games/host-history">🏁 나의 호스팅 경기</Link>
        <Link to="/games/host">✉️ 경기 생성하기</Link>
      </div>
    </>
  );
};
