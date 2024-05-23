import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AddressOptionsField {
  displayOptions: boolean;
  showOptions: () => void;
  closeOptions: () => void;
}

const useDisplayAddressOptionsStore = create(
  persist<AddressOptionsField>(
    (set) => ({
      displayOptions: false,
      showOptions: () => {
        set({ displayOptions: true });
      },
      closeOptions: () => {
        set({ displayOptions: false });
      },
    }),
    {
      name: "address optons",
    }
  )
);
export default useDisplayAddressOptionsStore;
