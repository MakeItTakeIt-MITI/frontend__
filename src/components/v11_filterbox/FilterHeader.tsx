import close from "../../assets/v11/close.svg";
import useDateSelectionStore from "../../store/useDateSelectionStore";
import useGameFilterStore from "../../store/useGameFilterStore";
import useStatusSelectionStore from "../../store/useStatusSelectionStore";
import useTimeFieldStore from "../../store/useTimeStore";
import FilteredStatus from "./FilteredStatus";

type FilterHeaderProps = {
  handleCloseFilterBox: () => void;
};

const FilterHeader = ({ handleCloseFilterBox }: FilterHeaderProps) => {
  const {
    selectedStatus,
    selectedDate,
    selectedTimeDate,
    resetSelectedDate,
    resetSelectedTimeDate,
    resetSelectedStatus,
  } = useGameFilterStore();

  const { resetTimeField } = useTimeFieldStore();
  const { resetStatuses } = useStatusSelectionStore();
  const { resetDateField } = useDateSelectionStore();

  const handleResetDateField = () => {
    resetSelectedDate();
    resetDateField();
  };

  const handleResetTimeField = () => {
    resetSelectedTimeDate();
    resetTimeField();
  };

  const handleResetGameStatus = () => {
    resetSelectedStatus();
    resetStatuses();
  };
  return (
    <div className="p-[1.25rem] w-full flex items-center justify-between ">
      <div className="flex space-x-[0.5rem] ">
        <FilteredStatus
          content={selectedDate}
          resetStatus={handleResetDateField}
        />
        <FilteredStatus
          content={selectedTimeDate}
          resetStatus={handleResetTimeField}
        />
        <FilteredStatus
          content={selectedStatus}
          resetStatus={handleResetGameStatus}
        />
      </div>
      <button onClick={handleCloseFilterBox}>
        <img src={close} alt="close" />
      </button>
    </div>
  );
};

export default FilterHeader;
