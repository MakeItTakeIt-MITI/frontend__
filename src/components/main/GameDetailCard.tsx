import cardImg from "../../assets/game_info.svg";

export const GameDetailCard = () => {
  return (
    <div className="w-[220px] h-[205px] ">
      <img src={cardImg} alt="game info pic" />
      <p className="text-lg font-bold leading-7 truncate">
        수원 매탄 공원 코트 (주차 12...)
      </p>
      <p className="text-base font-semibold leading-5">
        빠른 매칭 16:00 ~ 18:00
      </p>
      <div>
        <span className="p-[2px]  rounded-[2px] text-[11px] font-semibold leading-[13px] bg-[#C1E1FF] text-[#4065F6]">
          1명 남음
        </span>
      </div>
      <p className="text-base font-medium leading-5">
        남녀모두 · 5vs5 · 풀코트 · 뉴비
      </p>
    </div>
  );
};
