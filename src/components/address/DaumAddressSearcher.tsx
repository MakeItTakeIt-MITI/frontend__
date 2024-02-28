// import { useDaumPostcodePopup } from "react-daum-postcode";

// interface FindAddress {
//   address: string;
//   addressType: string;
//   bname: string;
//   buildingName: string;
// }

// export const DaumAddressSearcher = () => {
//   const open = useDaumPostcodePopup();

//   const handleComplete = (data: FindAddress) => {
//     let fullAddress = data.address;
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

//     setShowAddressPopup(fullAddress);
//   };

//   const handleClick = () => {
//     open({ onComplete: handleComplete });
//   };

//   return (
//     <>
//       <button
//         type="button"
//         onClick={handleClick}
//         className=" w-[81px] h-9 absolute right-2 bottom-2.5 text-[14px] bg-[#4065f6] text-white  rounded-lg"
//       >
//         주소찾기
//       </button>
//     </>
//   );
// };
