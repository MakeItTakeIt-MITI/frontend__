import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface TimeField {
    timeField: string[]
    setTimeField: (games: string[]) => void;
}


const useTimeFieldStore = create(
    persist<TimeField>(
        (set) => ({
            timeField: [],
            setTimeField: (time) => {
                set((state) => ({ timeField: [...state.timeField, ...time] }));
            },

        }),
        {
            name: 'filter time field',
        }
    )
);

export default useTimeFieldStore;
