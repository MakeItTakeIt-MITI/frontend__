import { create } from 'zustand';
import { DAYSTATUS } from '../constants/calender';

interface TimeField {
    selectedDayStatus: string;
    selectedHour: string;
    selectedMinute: string;
    setSelectedDayStatus: (dayStatus: string) => void;
    setSelectedHour: (hour: string) => void;
    setSelectedMinute: (minute: string) => void;
    resetTimeField: () => void

}

const DEFAULT_DAY_STATUS = DAYSTATUS();
const DEFAULT_HOUR = "00";
const DEFAULT_MINUTE = "00";

const useTimeFieldStore = create<TimeField>((set) => ({
    selectedDayStatus: DEFAULT_DAY_STATUS,
    selectedHour: DEFAULT_HOUR,
    selectedMinute: DEFAULT_MINUTE,
    setSelectedDayStatus: (dayStatus) => set({ selectedDayStatus: dayStatus }),
    setSelectedHour: (hour) => set({ selectedHour: hour }),
    setSelectedMinute: (minute) => set({ selectedMinute: minute }),
    resetTimeField: () => set({
        selectedDayStatus: DEFAULT_DAY_STATUS,
        selectedHour: DEFAULT_HOUR,
        selectedMinute: DEFAULT_MINUTE,
    }),
}));

export default useTimeFieldStore;
