import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

interface Register {
  register: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface FindAddress {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
}

export const DaumAddressSearcher = ({ register }: Register) => {
  const [showAddressPopup, setShowAddressPopup] = useState<string | false>(
    false
  );
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
    <div className="flex    gap-4">
      {/* <Label htmlFor="addressBar">경기장 주소</Label> */}
      <button
        onClick={handleClick}
        className="hover:cursor-pointer border border-gray-200 w-[5rem] p-2 text-[14px] rounded-md "
      >
        주소찾기
      </button>
      <input
        className=" w-[450px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="text"
        {...register("address", {
          required: true,
        })}
        value={showAddressPopup ? showAddressPopup : ""}
        readOnly
      />
    </div>
  );
};
