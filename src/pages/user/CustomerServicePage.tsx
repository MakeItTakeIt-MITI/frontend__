import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import rightArrow from "../../assets/Chevron_Right_MD.svg";
import { Link } from "react-router-dom";

export const CustomerServicePage = () => {
  return (
    <section className="mt-4">
      <NavigateToPrevContainer children="고객센터" />
      <div className="laptop:w-[600px] mobile:w-full mx-auto mobile:px-4 tablet:px-0">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          고객센터
        </h1>

        <div className="py-5 flex flex-col gap-4">
          <Link to="/user-query">
            <button className="h-[48px] w-full border border-gray-300 rounded-lg font-bold">
              문의하기
            </button>
          </Link>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[20px] font-bold">나의 문의 내역</h2>
            <Link
              to="/"
              className=" w-full p-4 flex justify-between items-center  rounded-xl border border-gray-300"
            >
              <div className="flex flex-col gap-1 max-w-[90%]">
                <h2 className="truncate">
                  경기를 주최해서 게스트들을 모집하고 싶어요.
                  가나다다라다라다라하고 싶어요. 가나다다라다라다라v
                </h2>
                <p className="text-[#666]">2024.02.16 오후 4시 31분</p>
                <p>
                  답변 : <span>1</span> 개
                </p>
              </div>

              <img src={rightArrow} alt="" className="text-black " />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
