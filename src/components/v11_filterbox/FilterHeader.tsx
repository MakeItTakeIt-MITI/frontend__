import close from "../../assets/v11/close.svg";
import useGameFilterStore from "../../store/useGameFilterStore";
import FilteredStatus from "./FilteredStatus";

type FilterHeaderProps = {
  handleCloseFilterBox: () => void;
};

const FilterHeader = ({ handleCloseFilterBox }: FilterHeaderProps) => {
  const { selectedStatus, selectedDate, selectedTimeDate } =
    useGameFilterStore();
  return (
    <div className="p-[1.25rem] w-full flex items-center justify-between">
      <div className="flex space-x-[0.5rem]">
        <FilteredStatus content={selectedDate} />
        <FilteredStatus content={selectedTimeDate} />
        <FilteredStatus content={selectedStatus} />
      </div>
      <button onClick={handleCloseFilterBox}>
        <img src={close} alt="close" />
      </button>
    </div>
  );
};

export default FilterHeader;
