import viewArrow from "../../assets/Chevron_Down_MD.svg";

interface FilterMatches {
  children: string;
}

export const UserMatchesFilterBtn = ({ children }: FilterMatches) => {
  return (
    <div className="flex gap-1">
      <button className="text-[14px] text-[#333333]"> {children}</button>
      <button>
        <img src={viewArrow} alt=" arrow down" />
      </button>
    </div>
  );
};
