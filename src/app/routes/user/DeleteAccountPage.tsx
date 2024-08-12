// import { useNavigate } from "react-router-dom";
// import { useDeleteAccountMutation } from "../../../hooks/auth/useDeleteAccountMutation";
// import useAuthStore from "../../../store/_useAuthStore";
// import useUserDataStore from "../../../store/_useUserDataStore";
// import { useEffect, useState } from "react";
// import {
//   DeleteAccountGuestFailure,
//   DeleteAccountHostingFailure,
// } from "../../../stories/Modal.stories";
// import { AlertModal } from "../../../components/ui/common/AlertModal";

// export const DeleteAccountPage = () => {
//   const [displayModal, setDisplayModal] = useState(false);
//   const { userId } = useUserDataStore();
//   const { isLoggedIn } = useAuthStore();
//   const { mutate, data } = useDeleteAccountMutation();
//   const navigate = useNavigate();

//   const handleDeleteUser = () => {
//     mutate(userId);
//   };

//   const handleCloseModal = () => {
//     setDisplayModal(false);
//   };

//   useEffect(() => {
//     if (!isLoggedIn) {
//       navigate("success");
//     }

//     if (data?.status_code === 403) {
//       setDisplayModal(true);
//     }
//   }, [data?.status_code, data?.error_code]);

//   return (
//     <>
//       <section className="laptop:mt-[15px] mobile:my-0 space-y-[15px] tablet:h-screen">
//         <h1 className="w-[496px] mx-auto text-[26px] font-bold text-[#000]">
//           회원탈퇴
//         </h1>
//         <div className="w-[496px] mx-auto h-[565px] space-y-[55px] rounded-lg border border-gray-200 py-[100px] px-[60px]">
//           <div className="p-3 space-y-5">
//             <h2 className="text-[24px] font-bold">회원 탈퇴 안내</h2>
//             <p className="text-[14px] text-[#1C1C1C] leading-[22px]">
//               고객님께서 회원 탈퇴를 신청하시면, 관련 법령에 따라 회원님의
//               정보는 30일간 보관 후 완전히 삭제됩니다. 이 기간 동안 재가입
//               신청은 불가능하며, 이후 재가입 시 일정 기간 동안 제한이 있을 수
//               있습니다.
//               <br />
//               <br />
//               회원 탈퇴를 진행하시려면, 아래의 '회원 탈퇴' 버튼을 클릭해 주시기
//               바랍니다. 탈퇴 관련 문의 사항이 있으시면 메뉴의 고객센터를 통해
//               문의해주시기 바랍니다.{" "}
//             </p>
//           </div>
//           <button
//             onClick={handleDeleteUser}
//             className="h-[48px] w-[343px] mx-auto bg-[#F64061] text-white flex items-center justify-center rounded-2xl"
//           >
//             탈퇴하기
//           </button>
//         </div>
//         {data?.status_code === 403 && data?.error_code === 940 && (
//           <AlertModal
//             modal={displayModal}
//             handleCloseModal={handleCloseModal}
//             {...DeleteAccountHostingFailure.args}
//           />
//         )}

//         {data?.status_code === 403 && data?.error_code === 941 && (
//           <AlertModal
//             modal={displayModal}
//             handleCloseModal={handleCloseModal}
//             {...DeleteAccountGuestFailure.args}
//           />
//         )}
//       </section>
//     </>
//   );
// };
