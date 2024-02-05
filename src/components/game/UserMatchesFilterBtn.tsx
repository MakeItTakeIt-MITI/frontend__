import { useState } from "react";
import viewArrow from "../../assets/Chevron_Down_MD.svg";
import { MatchesFilterBox } from "./MatchesFilterBox";

interface FilterMatches {
  children: string;
}

export const UserMatchesFilterBtn = ({ children }: FilterMatches) => {
  const [displayFilters, setDisplayFilters] = useState(false);

  const handleDisplayFilters = () => {
    setDisplayFilters(!displayFilters);
  };
  return (
    <button onClick={handleDisplayFilters} className="flex gap-1 relative">
      <h4 className="text-[14px] text-[#333333]"> {children}</h4>
      <img src={viewArrow} alt=" arrow down" />
      <MatchesFilterBox children={children} displayFilters={displayFilters} />
    </button>
  );
};
