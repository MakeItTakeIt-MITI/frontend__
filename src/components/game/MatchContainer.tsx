// import {
//   CompletedTag,
//   GuestTag,
//   HostTag,
//   RecrutingTag,
// } from "../../stories/Tags.stories";
// import { MatchTags } from "./MatchTags";
// import gameDetailBtn from "../../assets/More_Info_btn.svg";
// import { Link } from "react-router-dom";
// import { GameDetailField } from "../../interface/gameInterface";

// interface MatchProps {
//   hostHistory?: { data: [GameDetailField] };
//   guestHistory?: { data: [GameDetailField] };
// }

// export const MyGameHistoryInfoBox = ({
//   hostHistory,
//   guestHistory,
// }: MatchProps) => {
//   return (
//     <>
//       {hostHistory?.data.map((hostGame: GameDetailField) => {
//         return (
//           <Link
//             to={`/games/detail/${hostGame.id}`}
//             className="mobile:w-full tablet:w-[480px]  flex   justify-between p-4 border border-[#E8E8E8] rounded-xl"
//           >
//             <div className=" flex flex-col gap-1">
//               <div className="flex gap-2">
//                 <MatchTags {...HostTag.args} />
//                 {hostGame.game_status === "cancelled" ? (
//                   <MatchTags {...CompletedTag.args} />
//                 ) : (
//                   <MatchTags {...RecrutingTag.args} />
//                 )}
//               </div>
//               <h4>{hostGame?.title}</h4>
//               <p className="text-[14px] text-[#999]">
//                 {`${hostGame.startdate} ${hostGame.starttime.slice(
//                   0,
//                   -3
//                 )} ~ ${hostGame.endtime.slice(0, -3)}`}
//               </p>
//             </div>
//             <div>
//               <img src={gameDetailBtn} alt="" />
//             </div>
//           </Link>
//         );
//       })}

//       {guestHistory?.data.map((guestGame: GameDetailField) => {
//         return (
//           <Link
//             to={`/games/detail/${guestGame.id}`}
//             className="mobile:w-full tablet:w-[480px]  flex   justify-between p-4 border border-[#E8E8E8] rounded-xl"
//           >
//             <div className=" flex flex-col gap-1">
//               <div className="flex gap-2">
//                 <MatchTags {...GuestTag.args} />
//                 {guestGame.game_status === "cancelled" ? (
//                   <MatchTags {...CompletedTag.args} />
//                 ) : (
//                   <MatchTags {...RecrutingTag.args} />
//                 )}
//               </div>
//               <h4>{guestGame?.title}</h4>
//               <p className="text-[14px] text-[#999]">
//                 {" "}
//                 {`${guestGame.startdate} ${guestGame.starttime.slice(
//                   0,
//                   -3
//                 )} ~ ${guestGame.endtime.slice(0, -3)}`}
//               </p>
//             </div>
//             <div>
//               <img src={gameDetailBtn} alt="" />
//             </div>
//           </Link>
//         );
//       })}
//     </>
//   );
// };
