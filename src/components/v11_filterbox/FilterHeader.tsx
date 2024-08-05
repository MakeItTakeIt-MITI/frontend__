import close from "../../assets/v11/close.svg";
import FilteredStatus from "./FilteredStatus";

type FilterHeaderProps = {
  handleCloseFilterBox: () => void;
  selectedDate: string;
  selectedStatus: string;
  selectedTimeDate: string;
};

const FilterHeader = ({
  handleCloseFilterBox,
  selectedDate,
  selectedStatus,
  selectedTimeDate,
}: FilterHeaderProps) => {
  return (
    <div className="p-[1.25rem] w-full flex items-center justify-between">
      <div className="space-x-[0.5rem]">
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
