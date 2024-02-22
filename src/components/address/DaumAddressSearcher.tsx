import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

// interface Register {
// register: any; // eslint-disable-line @typescript-eslint/no-explicit-any
//   register: () => void;
// }

interface FindAddress {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
}

export const DaumAddressSearcher = () => {
  const [showAddressPopup, setShowAddressPopup] = useState("");
  const open = useDaumPostcodePopup();

  const handleComplete = (data: FindAddress) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setShowAddressPopup(fullAddress);
    // console.log(showAddressPopup);
    // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor="address" className=" text-[#999]">
        경기 주소
      </label>

      <input
        className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full  pr-[90px]"
        type="text"
        // {...register("address")}
        value={showAddressPopup}
        readOnly
        placeholder="경기장 주소를 입력해주세요."
      />
      <button
        type="button"
        onClick={handleClick}
        className="w-[81px] h-[36px]  bg-[#4065F6] text-[12px] rounded-xl text-white absolute right-0 bottom-1.5"
      >
        주소찾기
      </button>
    </div>
  );
};
