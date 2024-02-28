// import { useGetGamesDataQuery } from "../hooks/useGetGamesDataQuery";
// import viewArrow from "../assets/Chevron_Down_MD.svg";
// import { useState } from "react";
// import { NavigateToPrevContainer } from "../components/NavigateToPrevContainer";

// export const UserGameHistoryPage = () => {
//   const { data: allGamesData } = useGetGamesDataQuery();
//   const [title, setTitle] = useState("전체 보기");
//   const [displayFilterBox, setDisplayFilterBox] = useState(false);

//   const handleChangeTitle = (title: string) => {
//     setTitle(title);
//   };

//   const handleDisplayFilterBox = () => {
//     setDisplayFilterBox(!displayFilterBox);
//   };
//   console.log(allGamesData?.data);

//   return (
//     <div className=" mobile:w-full tablet:w-[560px] h-screen tablet:mb-0 mx-auto mobile:mb-[4rem] ">
//       <NavigateToPrevContainer />
//       {allGamesData?.data.length > 1 ? (
//         <>
//           <div className="flex justify-between p-4">
//             <h4>나의 매치 스케줄</h4>
//             <button
//               onClick={handleDisplayFilterBox}
//               className="flex gap-1 relative"
//             >
//               <h4 className="text-[14px] text-[#333333]">{title}</h4>
//               <img src={viewArrow} alt=" arrow down" />

//               {displayFilterBox && (
//                 <div className="flex items-start rounded-[4] flex-col gap-2 w-[157px] p-2  text-[14px] text-[#1c1c1c] absolute top-6  right-0 border border-[#E8E8E8]">
//                   {title === "전체 보기" ? (
//                     <span className="font-bold"> 전체 보기</span>
//                   ) : (
//                     <span onClick={() => handleChangeTitle("전체 보기")}>
//                       {" "}
//                       전체 보기
//                     </span>
//                   )}

//                   {title === "게스트만 보기" ? (
//                     <span className="font-bold"> 게스트만 보기</span>
//                   ) : (
//                     <span onClick={() => handleChangeTitle("게스트만 보기")}>
//                       {" "}
//                       게스트만 보기
//                     </span>
//                   )}
//                   {title === "호스트만 보기" ? (
//                     <span className="font-bold"> 호스트만 보기</span>
//                   ) : (
//                     <span onClick={() => handleChangeTitle("호스트만 보기")}>
//                       {" "}
//                       호스트만 보기
//                     </span>
//                   )}
//                 </div>
//               )}
//             </button>
//           </div>

//           <div className="flex flex-col gap-2 items-center justify-center h-full ">
//             <p className="text-4xl">🥲</p>
//             <p className="text-lg font-bold">아직 등록된 매치가 없어요</p>
//             <p className="text-[14px] text-[#333]">
//               새로운 매치 스케줄을 잡아볼까요?
//             </p>
//           </div>
//         </>
//       ) : (
//         <div>//</div>
//       )}
//     </div>
//   );
// };
