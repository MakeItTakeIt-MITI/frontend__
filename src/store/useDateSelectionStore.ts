
import { create } from 'zustand';
import { DATES } from '../constants/calender';

type DatesSelectionStore = {
    selectedStatuses: string;
    dateField: string;
    setDateField: (dateField: string) => void;
    resetDateField: () => void;
};

const INITIAL_DATES = DATES()

const FIRST_DATE = INITIAL_DATES[0]
const initialDateField = `${FIRST_DATE.month}.${FIRST_DATE.date} (${FIRST_DATE.dayKorean})`;


const useDateSelectionStore = create<DatesSelectionStore>((set) => ({
    selectedStatuses: "",
    dateField: initialDateField,
    setDateField: (dateField: string) => set({ dateField }),
    resetDateField: () => set({ dateField: initialDateField }),
}));
export default useDateSelectionStore;
