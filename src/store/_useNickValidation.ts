// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface NicknameValidation {
//     nickValidation: boolean;
//     setNickValidation: () => void;
//     resetNickValidation: () => void;
// }


// const useNickValidation = create(
//     persist<NicknameValidation>(
//         (set) => ({
//             nickValidation: false,
//             setNickValidation: () => {
//                 set({ nickValidation: true });
//             },
//             resetNickValidation: () => {
//                 set({ nickValidation: false });
//             },
//         }),
//         {
//             name: 'nicknameValidation',
//         }
//     )
// );
// export default useNickValidation;

