// import useAuthStore from "../../../store/_useAuthStore";
// import MITI_logo from "../../../assets/MITI_logo.svg";
// import {
//   CustomerSupport,
//   DeleteAccount,
//   EditProfile,
//   Faq,
//   FindCourts,
//   GuestHistory,
//   HostGame,
//   HostHistory,
//   MyReviews,
//   ReviewsAboutMe,
//   SettlementDetails,
//   TranscationHistory,
// } from "../../../stories/QuickLink.stories";
// import { QuickLinkTitle } from "./QuickLinkTitle";

// interface TabProps {
//   displayTab: () => void;
// }

// export const HeaderTabContainer: React.FC<TabProps> = ({ displayTab }) => {
//   const { isLoggedIn } = useAuthStore();

//   return (
//     <div
//       onMouseLeave={() => setTimeout(displayTab, 250)}
//       className="justify-center p-5 bg-white rounded-lg tablet:w-full  laptop:w-[1024px] mx-auto  absolute left-0  right-0 top-[58px] border border-gray-200"
//     >
//       <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//         <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
//           <img
//             loading="lazy"
//             src={MITI_logo}
//             className="shrink-0 self-stretch my-auto max-w-full aspect-[3.03] w-[107px] max-md:mt-10"
//           />
//         </div>
//         <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
//           <div className="grow max-md:mt-10 max-md:max-w-full">
//             <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//               <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col gap-1 text-xs tracking-tight leading-6 text-black max-md:mt-10">
//                   <div className="text-lg font-bold leading-6 h-[27px]">
//                     경기
//                   </div>
//                   <QuickLinkTitle {...GuestHistory.args} />
//                   <QuickLinkTitle {...HostHistory.args} />
//                   <QuickLinkTitle {...HostGame.args} />
//                 </div>
//               </div>
//               <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                 <div className="flex  flex-col gap-1  py-px tracking-tight text-black max-md:mt-10">
//                   <div className="text-lg font-bold leading-6 h-[27px]">
//                     경기장
//                   </div>
//                   <QuickLinkTitle {...FindCourts.args} />
//                 </div>
//               </div>
//               <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
//                 <div className="flex flex-col gap-1  grow text-xs tracking-tight leading-6 text-black max-md:mt-10">
//                   <div className="text-lg font-bold leading-6 h-[27px]">
//                     내 정보
//                   </div>
//                   <QuickLinkTitle {...ReviewsAboutMe.args} />
//                   <QuickLinkTitle {...MyReviews.args} />
//                   <QuickLinkTitle {...EditProfile.args} />
//                   <QuickLinkTitle {...SettlementDetails.args} />
//                   <QuickLinkTitle {...TranscationHistory.args} />
//                   <QuickLinkTitle {...Faq.args} />
//                   <QuickLinkTitle {...CustomerSupport.args} />
//                   {isLoggedIn && <QuickLinkTitle {...DeleteAccount.args} />}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
