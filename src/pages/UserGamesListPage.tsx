import { NavigateToPrevContainer } from "../components/NavigateToPrevContainer";
import downarrow from "../assets/Chevron_Down_MD.svg";
export const UserGamesListPage = () => {
  return (
    <div>
      <NavigateToPrevContainer />
      <div className="flex justify-between p-4 ">
        <h4 className="text-[18px] font-bold">나의 매치 스케줄</h4>
        <div className="relative">
          <button className="flex gap-4 ">
            <span>전체보기</span>
            <img src={downarrow} alt="down arrow" />
          </button>
          <div
            style={{
              boxShadow:
                "0px 11px 15px 0px rgba(0, 0, 0, 0.10), 0px 9px 46px 0px rgba(0, 0, 0, 0.06), 0px 24px 38px 0px rgba(0, 0, 0, 0.04)",
            }}
            className=" text-[14px] py-1 px-2 flex flex-col justify-around items-start bg-[#fff] absolute  right-1 w-[157px] h-[102px]"
          >
            <button>전체보기</button>
            <button>게스트만 보기</button>
            <button>호스트만 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
};
