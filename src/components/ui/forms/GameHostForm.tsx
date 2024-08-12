// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useForm } from "react-hook-form";
// import { AddressField } from "../../../interface/gameInterface";
// import { useEffect, useState } from "react";
// import { useHostGameMutation } from "../../../hooks/games/useHostGameMutation";

// import { useDaumPostcodePopup } from "react-daum-postcode";
// import { FormLabel } from "./FormLabel";
// import { ErrorMessage } from "../../StatusMessages/ErrorMessage";
// import { useGetAllCourtsInfiniteQuery } from "../../../hooks/courts/useGetAllCourtsInfiniteQuery";
// import { MatchingCourtModal } from "../../game/MatchingCourtModal";
// import useDisplayAddressOptionsStore from "../../../store/_useDisplayAddressOptionsStore";
// import { SubmitButton } from "../../ui/buttons/SubmitButton";
// import { Active, Inactive } from "../../ui/buttons/Button.stories";
// import GameInput, { GameInputField } from "./GameInput";

// interface GameHostFormProps {
//   setSuccessfulSubmission?: (arg: boolean) => void;
// }

// export const GameHostForm = ({
//   setSuccessfulSubmission,
// }: GameHostFormProps) => {
//   const { handleSubmit, register, setValue, watch, formState } =
//     useForm<GameInputField>();
//   const [startDateTime, setStartDateTime] = useState("");
//   const [endDateTime, setEndDateTime] = useState("");

//   const [courtAddress, setCourtAddress] = useState<string | null>(null);
//   const [courtAddressDetail, setCourtAddressDetail] = useState<string | null>(
//     null
//   );

//   const { displayOptions, showOptions, closeOptions } =
//     useDisplayAddressOptionsStore();

//   const { data: matchingAddressData, refetch: refetchCourts } =
//     useGetAllCourtsInfiniteQuery(courtAddress);

//   const { mutate: hostGameMutation } = useHostGameMutation(
//     setSuccessfulSubmission ?? (() => {})
//   );
//   const maxParticipants = Number(watch("max_invitation"));
//   const minParticipants = Number(watch("min_invitation"));
//   const gameFee = Number(watch("fee"));

//   useEffect(() => {
//     const startDate = startDateTime.split("T")[0];
//     const startTime = startDateTime.split("T")[1];
//     const endDate = endDateTime.split("T")[0];
//     const endTime = endDateTime.split("T")[1];

//     matchingAddressData?.pages.map((page) => {
//       if (page.data.page_content.length === 0) {
//         setCourtAddress(null);
//         closeOptions();
//       } else if (
//         page.data.page_content.length >= 1 &&
//         typeof courtAddress === "string"
//       ) {
//         showOptions();
//       }
//     });

//     if (typeof courtAddressDetail === "string") {
//       setValue("court.address_detail", courtAddressDetail);
//     }

//     if (watch("court.address_detail")) {
//       closeOptions();
//     }

//     setValue("starttime", startTime);
//     setValue("startdate", startDate);
//     setValue("enddate", endDate);
//     setValue("endtime", endTime);
//     refetchCourts();
//   }, [
//     startDateTime,
//     endDateTime,
//     matchingAddressData,
//     setValue,
//     watch,
//     showOptions,
//     courtAddress,
//     courtAddressDetail,
//     displayOptions,
//     refetchCourts,
//     closeOptions,
//   ]);

//   const handleOpenAddressBox = useDaumPostcodePopup();
//   const handleComplete = (data: AddressField) => {
//     // 결가는 항상 도로명 주소로 변환
//     let fullAddress = data.roadAddress;
//     let extraAddress = "";

//     if (data.addressType === "R") {
//       if (data.bname !== "") {
//         extraAddress += data.bname;
//       }
//       if (data.buildingName !== "") {
//         extraAddress +=
//           extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
//       }
//       fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
//     }

//     setCourtAddress(fullAddress);
//     setValue("court.address", fullAddress);
//     setCourtAddressDetail("");
//     refetchCourts();
//   };

//   const handleClick = () => {
//     handleOpenAddressBox({ onComplete: handleComplete });
//   };

//   const onSubmitForm = (data: GameInputField) => {
//     hostGameMutation(data);
//   };

//   return (
//     <>
//       {displayOptions && courtAddress !== null && (
//         <MatchingCourtModal
//           setValue={setValue}
//           matchingAddressData={matchingAddressData}
//           setCourtAddressDetail={setCourtAddressDetail}
//           setCourtAddress={setCourtAddress}
//           refetchCourts={refetchCourts}
//         />
//       )}
//       <form
//         className="flex flex-col laptop:gap-[35px] mobile:gap-4 text-[14px]"
//         onSubmit={handleSubmit(onSubmitForm)}
//       >
//         <div className="space-y-2">
//           <FormLabel id="title" children="경기 제목" />
//           <GameInput
//             type="string"
//             id="title"
//             dataId="title-input"
//             placeholder="경기 제목을 입력해주세요."
//             register={register}
//             register_type="title"
//             height="59px"
//           />
//         </div>

//         <div className="space-y-2">
//           <FormLabel id="start_date" children="경기 시작" />

//           <div className="flex gap-2 w-full">
//             <div className="flex items-center  h-[59px] px-4 py-[17px]  bg-[#F7F7F7] text-[#969696] w-full rounded-lg text-sm font-medium ">
//               {startDateTime.length > 1 ? startDateTime.split("T")[0] : null}{" "}
//               {startDateTime.length > 1
//                 ? startDateTime.split("T")[1]
//                 : "경기 시간을 선택해주세요."}
//             </div>

//             <input
//               type="datetime-local"
//               id="start_date"
//               data-testid="start-datetime-input"
//               required
//               className="w-[54px] h-[59px] px-4   bg-[#DFEFFE] text-[#999] rounded-lg "
//               onChange={(e) => setStartDateTime(e.target.value)}
//             />

//             <input
//               hidden
//               type="text"
//               id="start_date"
//               className=""
//               {...register("startdate", {})}
//             />
//             <input
//               hidden
//               type="text"
//               id="start_time"
//               className=" input-primary"
//               {...register("starttime", {})}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col gap-2 justify-center ">
//           <FormLabel id="end_date" children="경기 종료" />

//           <div className="flex items-center gap-2 w-full">
//             <div className="flex items-center  h-[59px] px-4 py-[17px]  bg-[#F7F7F7] text-[#969696] w-full rounded-lg text-sm font-medium ">
//               {endDateTime.length > 1 ? endDateTime.split("T")[0] : null}{" "}
//               {endDateTime.length > 1
//                 ? endDateTime.split("T")[1]
//                 : "경기 시간을 선택해주세요."}
//             </div>
//             <input
//               type="datetime-local"
//               placeholder="Select date and time"
//               data-testid="end-datetime-input"
//               required
//               id="end_date"
//               onChange={(e) => setEndDateTime(e.target.value)}
//               className=" w-[54px] h-[59px] p-4  bg-[#DFEFFE] text-[#999] rounded-lg "
//             />

//             <input hidden type="text" {...register("enddate", {})} />
//             <input
//               hidden
//               type="text"
//               id="endtime"
//               step={900}
//               {...register("endtime", {})}
//             />
//           </div>
//         </div>

//         <div className="space-y-2">
//           <FormLabel id="address" children="경기 주소" />
//           <div className="relative">
//             <GameInput
//               type="string"
//               id="address"
//               dataId="address-input"
//               placeholder="주소를 검색해주세요."
//               register={register}
//               register_type="court.address"
//               height="51px"
//               pr="110px"
//             />
//             <button
//               onClick={handleClick}
//               type="button"
//               data-testid="search-address-button"
//               className=" bg-[#4065f6] w-[81px] h-[36px]  absolute right-2 top-2 bottom-2 m-auto text-[12px] text-white  rounded-lg"
//             >
//               주소검색
//             </button>{" "}
//           </div>
//         </div>

//         <div className="space-y-2">
//           <FormLabel id="address" children="경기 상세 주소" />
//           <GameInput
//             type="string"
//             id="address"
//             dataId="address-detail-input"
//             placeholder="상세 주소를 입해주세요."
//             register={register}
//             register_type="court.address_detail"
//             height="59px"
//           />
//         </div>
//         <div className="space-y-2">
//           <FormLabel id="court_name" children="경기장 이름" />
//           <GameInput
//             type="string"
//             id="court_name"
//             dataId="court-name-input"
//             placeholder="경기장 이름을 입력해주세요."
//             register={register}
//             register_type="court.name"
//             height="59px"
//           />
//         </div>

//         <div className="flex flex-col gap-2   mobile:justify-between ">
//           <div className="flex items-center mobile:justify-center gap-4 h-full">
//             <div className="space-y-2 tablet:w-full">
//               <FormLabel id="max_players" children="총 인원 모집" />
//               <input
//                 type="number"
//                 id="max_players"
//                 data-testid="max-participants-input"
//                 placeholder="00 명"
//                 className=" h-[50px] p-4  bg-[#F7F7F7] w-full rounded-lg text-center font-bold"
//                 {...register("max_invitation", {
//                   required: true,
//                 })}
//               />
//             </div>

//             {/* recruiting participants */}
//             <div className="space-y-2 tablet:w-full ">
//               <FormLabel id="min_players" children=" 최소 모집 인원" />

//               <input
//                 type="number"
//                 id="min_players"
//                 data-testid="min-participants-input"
//                 placeholder="00 명"
//                 className=" h-[50px] p-4  bg-[#F7F7F7] w-full rounded-lg text-center font-bold"
//                 {...register("min_invitation", {
//                   required: true,
//                 })}
//               />
//             </div>
//           </div>
//           {maxParticipants < minParticipants && (
//             <ErrorMessage children="총 모집 인원은 최소 모집 인원보다 많아야해요." />
//           )}
//         </div>

//         <div className="space-y-2">
//           <FormLabel id="fee" children="참가비" />
//           <div className="relative">
//             <GameInput
//               type="string"
//               id="fee"
//               dataId="fee-input"
//               placeholder="경기 참가비를 입해주세요."
//               register={register}
//               register_type="fee"
//               height="50px"
//             />
//             <div className="absolute right-4 top-4 bottom-4 text-[#999] ">
//               ₩
//             </div>
//           </div>
//           {gameFee < 0 && (
//             <ErrorMessage children="경기 참가비는 0 이상의 정수이어야합니다." />
//           )}
//         </div>

//         {/* information */}
//         <div className="flex flex-col gap-2">
//           <FormLabel id="" children=" 추가 정보" />
//           <textarea
//             id="info"
//             style={{ resize: "none" }}
//             data-testid="description-input"
//             placeholder="주차, 샤워 가능 여부, 경기 진행 방식, 필요한 유니폼 색상 등 참가들에게 공지할 정보들을 입력해주세요."
//             className="w-full h-[150px]   mobile:text-[14px] tablet:text-[16px] px-4 py-3 bg-[#F7F7F7] rounded-lg "
//             {...register("info", {
//               required: true,
//             })}
//           />
//         </div>

//         {!formState.isValid ||
//         gameFee < 0 ||
//         maxParticipants < minParticipants ? (
//           <SubmitButton children="매치 생성하기" {...Inactive.args} />
//         ) : (
//           <SubmitButton
//             children="매치 생성하기"
//             type="submit"
//             {...Active.args}
//           />
//         )}
//       </form>
//     </>
//   );
// };
