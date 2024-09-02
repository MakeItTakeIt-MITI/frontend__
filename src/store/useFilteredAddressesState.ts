import { create } from 'zustand';

interface useFilteredAddressesState {
    filteredAddresses: string[];
    setFilteredAddresses: (addresses: string[]) => void;
}

const useFilteredAddressesStore = create<useFilteredAddressesState>((set) => ({
    filteredAddresses: [],
    setFilteredAddresses: (addresses) => set({ filteredAddresses: [...addresses] }),
}));

export default useFilteredAddressesStore;
