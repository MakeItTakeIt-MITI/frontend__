import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface DisplayButtonInterface {
    displayPassword: boolean;
    setDisplayPassword: (arg: boolean) => void
}


const useDisplayPwStore = create(
    persist<DisplayButtonInterface>(
        (set) => ({
            displayPassword: false,
            setDisplayPassword: (displayPassword: boolean) => {
                set({ displayPassword: displayPassword });
            }
        }),
        {
            name: 'userData',
        }
    )
);

export default useDisplayPwStore;
