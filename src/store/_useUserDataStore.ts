// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface UserIdField {
//     userId: number | null;
//     setUserId: (userId: number) => void;
// }

// const useUserDataStore = create(
//     persist<UserIdField>(
//         (set) => ({
//             userId: null,
//             setUserId: (userId: number) => {
//                 set({ userId: userId });
//             }
//         }),
//         {
//             name: 'userData',
//         }
//     )
// );

// export default useUserDataStore;
