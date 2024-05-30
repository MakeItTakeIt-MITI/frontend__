import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface GamesField {
    addressData: string[]
    setAddressData: (games: string[]) => void;
}

const useAddressDataStore = create(
    persist<GamesField>(
        (set) => ({
            addressData: [],
            setAddressData: (games) => {
                set((state) => ({ addressData: [...state.addressData, ...games] }));
            },

        }),
        {
            name: 'game addresses',
        }
    )
);

export default useAddressDataStore;
