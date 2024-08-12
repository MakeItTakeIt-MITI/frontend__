// import { useMutation } from "@tanstack/react-query";
// import axiosUrl from "../../utils/axios";
// import { RequestTransferField } from "../../components/payment/BankTransferBox";

// export const useMutateTransferMoney = (user_id: number | null) => {
//   return useMutation({
//     mutationFn: async (data: RequestTransferField) => {
//       try {
//         const response = await axiosUrl.post(
//           `/users/${user_id}/accounts/bank-transfers`,
//           data
//         );
//         return response.data;
//       } catch {
//         throw new Error();
//       }
//     },
//     onSuccess: (response) => {
//       if (response?.status_code === 200) {
//         alert("송금 신청완료.");
//         window.location.reload();
//       }

//       if (response?.status_code === 400) {
//         alert(response?.error_code);
//       }
//     },
//   });
// };
