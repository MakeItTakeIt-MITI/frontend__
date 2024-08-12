// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import downArrow from "../../../assets/Chevron_Down_MD.svg";
// import useUserDataStore from "../../../store/_useUserDataStore";
// import { useGetPaymentHistory } from "../../../hooks/account/useGetPaymentHistory";
// import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
// import { MatchTags } from "../../../components/game/MatchTags";

// import {
//   AwaitingPayment,
//   PaymentPartiallyFulfilled,
//   TransferFulfilled,
// } from "../../../stories/Tags.stories";
// import { NoListFoundMessageBox } from "../../../components/ui/common/NoListFoundMessageBox";

// export interface PaymentHistoryField {
//   id: number;
//   comission: number;
//   status: string;
//   game: {
//     id: number;
//     court: {
//       id: number;
//       address: string;
//       address_detail: string;
//       latitude: number;
//       longitude: number;
//     };
//     game_status: string;
//     title: string;
//     startdate: string;
//     starttime: string;
//     enddate: string;
//     endtime: string;
//     max_invitation: number;
//     min_invitation: number;
//     fee: number;
//   };
// }

// export const PaymentHistory = () => {
//   const [defaultTabName, setDefaultTabName] = useState("전체 보기");
//   const [gameStatusQuery, setGameStatusQuery] = useState("");
//   const [openList, setOpenList] = useState(false);
//   const { userId } = useUserDataStore();

//   const { data: paymentHistoryData, refetch } = useGetPaymentHistory(
//     userId,
//     gameStatusQuery
//   );

//   useEffect(() => {
//     if (defaultTabName === "전체 보기") {
//       setGameStatusQuery("");
//     } else if (defaultTabName === "정산 완료") {
//       setGameStatusQuery("completed");
//     } else if (defaultTabName === "대기중") {
//       setGameStatusQuery("waiting");
//     }
//     refetch();
//   }, [defaultTabName, gameStatusQuery, refetch]);

//   const tabList = ["전체보기", "정산 완료", "대기중"];
//   const handleOpenList = () => setOpenList(!openList);
//   const handleChangeTab = (tab: string) => setDefaultTabName(tab);

//   return (
//     <section className="laptop:mt-[69px] mobile:mb-16  mobile:my-0 tablet:px-[80px] laptop:px-0 tablet:h-screen ">
//       <NavigateToPrevContainer children="정산 내역" />

//       <div className="laptop:w-[593px] mobile:w-full mx-auto flex flex-col gap-[22px]">
//         <div className="flex justify-between">
//           <h1 className="text-[26px] w-full font-bold laptop:block mobile:hidden">
//             정산 내역
//           </h1>
//           <div className="flex justify-end w-full ">
//             <div
//               onClick={handleOpenList}
//               style={{
//                 borderRadius: !openList ? "8px 8px 8px 8px" : "8px 8px 0px 0px",
//               }}
//               className="flex items-center  w-[90px] h-[32px] py-2.5 px-1.5 bg-[#f7f7f7]  relative hover:cursor-pointer"
//             >
//               <p className="text-[14px]">{defaultTabName}</p>
//               <img
//                 src={downArrow}
//                 alt="open tab icon"
//                 style={{ rotate: openList ? "180deg" : "0deg" }}
//               />

//               {openList && tabList && (
//                 <ul className="absolute left-0 top-8 w-full bg-[#f7f7f7] text-[#969696] text-[14px]  px-2 py-1 flex flex-col gap-1 rounded-br-lg">
//                   {tabList.map((tab) => {
//                     return (
//                       <li
//                         onClick={() => handleChangeTab(tab)}
//                         className="hover:cursor-pointer"
//                       >
//                         {tab}
//                       </li>
//                     );
//                   })}
//                 </ul>
//               )}
//             </div>
//           </div>
//         </div>
//         <div
//           style={{ scrollbarWidth: "thin" }}
//           className="overflow-y-auto laptop:w-[593px] bg-[#FBFBFB]  laptop:h-[653px] mobile:h-full   mobile:w-full mx-auto   p-3 rounded-lg flex flex-col gap-[15px] "
//         >
//           {paymentHistoryData?.data?.page_content.length !== 0 ? (
//             paymentHistoryData?.data?.page_content.map(
//               (page: PaymentHistoryField) => {
//                 return (
//                   <Link
//                     to={`detail/${page.id}`}
//                     className="p-3 rounded-lg border space-y-[7px] border-gray-200 bg-white"
//                   >
//                     <h2 className="text-[10px]">
//                       {page.status === "waiting" && (
//                         <MatchTags {...AwaitingPayment.args} />
//                       )}
//                       {page.status === "confirmed" && (
//                         <MatchTags {...TransferFulfilled.args} />
//                       )}
//                       {page.status === "partial_completed" && (
//                         <MatchTags {...PaymentPartiallyFulfilled.args} />
//                       )}
//                     </h2>
//                     <h3 className="font-bold">{page.game.title}</h3>
//                     <p className="text-xs text-[#99999999]">
//                       {page.game.startdate} {page.game.starttime} ~{" "}
//                       {page.game.enddate} {page.game.endtime}
//                     </p>
//                     <div className="flex justify-between">
//                       <span className="text-xs text-[#99999999]">
//                         {page.game.court.address}{" "}
//                         {page.game.court.address_detail}
//                       </span>
//                       <span className="text-[#4065F5] font-bold">
//                         {page.game.fee.toLocaleString("ko-KR", {
//                           style: "currency",
//                           currency: "KRW",
//                         })}
//                       </span>
//                     </div>
//                   </Link>
//                 );
//               }
//             )
//           ) : (
//             <NoListFoundMessageBox
//               title="정산내역이 없습니다."
//               content="경기를 호스팅하고 정산을 받아보세요!"
//             />
//           )}
//         </div>
//       </div>
//       {/* </div> */}
//     </section>
//   );
// };
