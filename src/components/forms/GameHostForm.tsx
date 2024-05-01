import { useForm } from "react-hook-form";
import {
  AddressField,
  Court,
  GameHostField,
} from "../../interface/gameInterface";
import { useEffect, useState } from "react";
import { useHostGameMutation } from "../../hooks/games/useHostGameMutation";
import { useCourtDetailsQuery } from "../../hooks/games/useCourtDetailsQuery";

import { useDaumPostcodePopup } from "react-daum-postcode";

interface GameHostFormProps {
  setShowModal: (arg: boolean) => void;
}

export const GameHostForm = ({ setShowModal }: GameHostFormProps) => {
  const { handleSubmit, register, setValue, watch, formState } =
    useForm<GameHostField>();
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  // const [exisitingAddresses, setExistingAddresses] = useState("");

  // tanstack query
  const courtAddress = watch("court.address") || "";
  const { data: getCourtInformation, refetch } =
    useCourtDetailsQuery(courtAddress);

  const { mutate: hostGameMutation } = useHostGameMutation();

  useEffect(() => {
    const startDate = startDateTime.split("T")[0];
    const startTime = startDateTime.split("T")[1];
    const endDate = endDateTime.split("T")[0];
    const endTime = endDateTime.split("T")[1];

    setValue("starttime", startTime);
    setValue("startdate", startDate);
    setValue("enddate", endDate);
    setValue("endtime", endTime);

    const emptyAddressList: string[] = [];
    // if address already exists, automatically add address_detail
    getCourtInformation?.data.page_content.map((address: Court) => {
      if (courtAddress === address.address) {
        emptyAddressList.push(address.address_detail);
        setShowModal(true);
      }
    });

    refetch();
  }, [
    courtAddress,
    refetch,
    setValue,
    startDateTime,
    endDateTime,
    getCourtInformation,
    setShowModal,
  ]);

  // const handleOpenAddressBox = useDaumPostcodePopup();
  const handleOpenAddressBox = useDaumPostcodePopup();

  const handleComplete = (data: AddressField) => {
    // 결가는 항상 도로명 주소로 변환
    let fullAddress = data.roadAddress;
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

    setValue("court.address", fullAddress);
  };

  const handleClick = () => {
    handleOpenAddressBox({ onComplete: handleComplete });
  };

  const onSubmitForm = (data: GameHostField) => {
    hostGameMutation(data);
  };

  return (
    <form
      className="flex flex-col gap-4 "
      onSubmit={handleSubmit(onSubmitForm)}
    >
      {/* <InputField
        id="title"
        label="경기 제목"
        type="text"
        placeholder="경기 제목을 입력해주세요."
        register={register}
        register_type="title"
        requiredValue={true}
      /> */}
      {/* Game start date and time */}
      <div className="flex flex-col gap-2">
        <label htmlFor="start_date" className="text-[#999]">
          경기 시작
        </label>
        <div className="flex gap-2 w-full">
          <div className=" h-[50px] p-4  bg-[#F7F7F7] text-[#969696] w-full rounded-lg ">
            {startDateTime.length > 1 ? startDateTime.split("T")[0] : null}{" "}
            {startDateTime.length > 1
              ? startDateTime.split("T")[1]
              : "경기 시간을 선택해주세요."}
          </div>

          <input
            type="datetime-local"
            id="start_date"
            required
            className=" w-[54px] h-[50px] p-4  bg-[#DFEFFE] text-[#999] rounded-lg "
            onChange={(e) => setStartDateTime(e.target.value)}
          />

          <input
            hidden
            type="text"
            id="start_date"
            className=""
            {...register("startdate", {})}
          />
          <input
            hidden
            type="text"
            id="start_time"
            className=" input-primary"
            {...register("starttime", {})}
          />
        </div>
      </div>
      {/* 경기 종료 */}
      <div className="flex flex-col gap-2 justify-center ">
        <label htmlFor="end_date" className="text-[#999]">
          경기 종료
        </label>

        <div className="flex items-center gap-2 w-full">
          <div className=" h-[50px] p-4  bg-[#F7F7F7] text-[#969696] w-full rounded-lg ">
            {/* {endDateTime.split("T")[0]} {endDateTime.split("T")[1]} */}
            {endDateTime.length > 1 ? endDateTime.split("T")[0] : null}{" "}
            {endDateTime.length > 1
              ? endDateTime.split("T")[1]
              : "경기 시간을 선택해주세요."}
          </div>
          <input
            type="datetime-local"
            placeholder="Select date and time"
            required
            id="end_date"
            onChange={(e) => setEndDateTime(e.target.value)}
            className="w-[54px] h-[50px] p-4  bg-[#DFEFFE] text-[#999] rounded-lg "
          />

          <input
            hidden
            type="text"
            // className="input-primary"
            {...register("enddate", {})}
          />
          <input
            hidden
            type="text"
            id="endtime"
            className=" input-primary"
            step={900}
            {...register("endtime", {})}
          />
        </div>
      </div>
      {/* game address */}
      <div className="flex flex-col gap-2">
        <label htmlFor="address" className=" text-[#999] ]">
          경기 주소
        </label>

        <div className=" h-[50px] p-4     bg-[#F7F7F7] text-[#969696] ] rounded-lg  relative ">
          <p className=" max-w-[300px] truncate"> {watch("court.address")}</p>

          <button
            type="button"
            onClick={handleClick}
            className=" w-[81px] h-9 absolute  right-2 top-2   text-[14px] bg-[#4065f6] text-[#FFF] font-[400]  rounded-lg"
          >
            주소찾기
          </button>
        </div>

        <input hidden type="text" {...register("court.address")} readOnly />
      </div>
      {/* address detail */}
      <InputField
        id="address_detail"
        label="상세 주소"
        type="text"
        placeholder="상세 주소를 입력해주세요."
        register={register}
        register_type="court.address_detail"
        requiredValue={true}
      />
      {/* court name */}
      <InputField
        id="title"
        label="경기장 이름"
        type="text"
        placeholder="경기장 이름을 입력해주세요"
        register={register}
        register_type="court.name"
        requiredValue={true}
      />

      {/* max participants */}

      <div className="flex gap-4  items-center mobile:justify-between ">
        <div className="flex flex-col gap-2 tablet:w-full">
          <label htmlFor="max_players" className=" text-[#999]">
            총 모집 인원
          </label>
          <input
            type="number"
            id="max_players"
            placeholder="00 명"
            className=" input-primary  w-full text-center font-bold"
            {...register("max_invitation", {
              required: true,
            })}
          />
        </div>

        {/* recruiting participants */}
        <div className="flex flex-col gap-2 tablet:w-full ">
          <label htmlFor="min_players" className=" text-[#999]">
            최소 모집 인원
          </label>
          <input
            type="number"
            id="min_players"
            placeholder="00 명"
            className=" h-[50px] p-4  bg-[#F7F7F7] w-full rounded-lg text-center font-bold"
            {...register("min_invitation", {
              required: true,
            })}
          />
        </div>
      </div>

      {/* participation fee */}
      <div className="flex w-full px-0 flex-col gap-2">
        <label htmlFor="fee" className=" text-[#999]">
          참가비
        </label>

        <div className="relative ">
          <input
            type="string"
            id="fee"
            placeholder="경기 참여비를 입력해주세요."
            className=" input-primary w-full"
            {...register("fee", {
              required: true,
            })}
          />
          <span className="absolute top-4 botom-4 right-4 text-[14px] text-[#999]">
            ₩
          </span>
        </div>
      </div>
      {/* information */}
      <div className="flex flex-col gap-2">
        <label htmlFor="announcement" className=" text-[#999] ">
          추가 정보
        </label>
        <textarea
          id="announcement"
          placeholder="주차 4자리 가능, 샤워 불가, 4 vs 4, 파란 유니폼 지참, 남녀 모두 참가 가능한 매치입니다"
          className="w-full   mobile:text-[14px] tablet:text-[16px] px-4 py-3 bg-[#F7F7F7] rounded-lg "
          {...register("info")}
        />
      </div>

      <button
        disabled={!formState.isValid}
        style={{
          backgroundColor: !formState.isValid ? "#969696" : "#4065F6",
        }}
        type="submit"
        className=" w-full h-[50px] rounded-[8px] text-white"
      >
        매치 생성하기
      </button>
    </form>
  );
};
