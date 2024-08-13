import { create } from 'zustand';

interface GameFilterState {
    selectedDate: string;
    selectedTimeDate: string;
    selectedStatus: string;
    setSelectedDate: (date: string) => void;
    setSelectedTimeDate: (timeDate: string) => void;
    setSelectedStatus: (status: string) => void;
    resetFilterHeader: () => void
    resetSelectedDate: () => void
    resetSelectedTimeDate: () => void
    resetSelectedStatus: () => void
}

const useGameFilterStore = create<GameFilterState>((set) => ({
    selectedDate: "날짜",
    selectedTimeDate: "경기 시작 시간",
    selectedStatus: "경기 상태",
    setSelectedDate: (date) => set({ selectedDate: date }),
    setSelectedTimeDate: (timeDate) => set({ selectedTimeDate: timeDate }),
    setSelectedStatus: (status) => set({ selectedStatus: status }),
    resetFilterHeader: () => set({
        selectedDate: "날짜",
        selectedTimeDate: "경기 시작 시간",
        selectedStatus: "경기 상태",
    }),
    resetSelectedDate: () => set({
        selectedDate: "날짜",
    }),
    resetSelectedTimeDate: () => set({
        selectedTimeDate: "경기 시작 시간",
    }),
    resetSelectedStatus: () => set({
        selectedStatus: "경기 상태",
    }),
}));

export default useGameFilterStore;
