import { useMemo } from "react";
import useDateSelectionStore from "../../store/useDateSelectionStore";
import useStatusSelectionStore from "../../store/useStatusSelectionStore";
import useTimeFieldStore from "../../store/useTimeStore";
import useGameFilterStore from "../../store/useGameFilterStore";
import { initialDateField, yearMonthToDate } from "../../constants/calender";

export const useFilterBoxSettings = (
  setDisplayFilterBox: (arg: boolean) => void
) => {
  const { setYearMonthDay, setDateField, dateField } = useDateSelectionStore();
  const { resetTimeField, selectedDayStatus, selectedHour, selectedMinute } =
    useTimeFieldStore();
  const { selectedStatuses, resetStatuses } = useStatusSelectionStore();
  const {
    setSelectedDate,
    resetFilterHeader,
    setSelectedTimeDate,
    setSelectedStatus,
  } = useGameFilterStore();

  const handleResetFilters = () => {
    setYearMonthDay(yearMonthToDate);
    setSelectedDate(initialDateField);
    setDateField(initialDateField);
    resetFilterHeader();
    resetTimeField();
    resetStatuses();
  };

  const timeFormat = useMemo(
    () => `${selectedDayStatus} ${selectedHour}:${selectedMinute}`,
    [selectedDayStatus, selectedHour, selectedMinute]
  );

  const handleApplyFilters = () => {
    if (dateField.length > 1) {
      setSelectedDate(dateField);
    }
    setSelectedTimeDate(timeFormat);

    if (selectedStatuses.length >= 1 && selectedStatuses.length < 2) {
      setSelectedStatus(`${selectedStatuses}`);
    } else if (selectedStatuses.length > 1 && selectedStatuses.length <= 4) {
      const statusSpacing = `${selectedStatuses} `;
      setSelectedStatus(statusSpacing);
    }
    setDisplayFilterBox(false);
  };

  return {
    handleResetFilters,
    handleApplyFilters,
  };
};
