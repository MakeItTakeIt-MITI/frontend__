import { useForm } from "react-hook-form";
import { AddressField, GameHostField } from "../../interface/gameInterface";
import { useEffect, useState } from "react";
import { useHostGameMutation } from "../../hooks/games/useHostGameMutation";

import { useDaumPostcodePopup } from "react-daum-postcode";
import { GameHostInputField } from "./FormInputContainer";
import { FormLabel } from "./FormLabel";
import { ErrorMessage } from "../StatusMessages/ErrorMessage";
import { useGetAllCourtsInfiniteQuery } from "../../hooks/courts/useGetAllCourtsInfiniteQuery";
import { MatchingCourtModal } from "../game/MatchingCourtModal";
import useDisplayAddressOptionsStore from "../../store/useDisplayAddressOptionsStore";

interface GameHostFormProps {
  setSuccessfulSubmission: (arg: boolean) => void;
}

export const GameHostForm = ({
  setSuccessfulSubmission,
}: GameHostFormProps) => {
  const { handleSubmit, register, setValue, watch, formState } =
    useForm<GameHostField>();
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");

  const [courtAddress, setCourtAddress] = useState<string | null>(null);
  const [courtAddressDetail, setCourtAddressDetail] = useState<string | null>(
    null
  );

  const { displayOptions, showOptions, closeOptions } =
    useDisplayAddressOptionsStore();

  const { data: matchingAddressData, refetch: refetchCourts } =
    useGetAllCourtsInfiniteQuery(courtAddress);

  const { mutate: hostGameMutation } = useHostGameMutation(
    setSuccessfulSubmission
  );
  const maxParticipants = Number(watch("max_invitation"));
  const minParticipants = Number(watch("min_invitation"));
  const gameFee = Number(watch("fee"));

  useEffect(() => {
    const startDate = startDateTime.split("T")[0];
    const startTime = startDateTime.split("T")[1];
    const endDate = endDateTime.split("T")[0];
    const endTime = endDateTime.split("T")[1];

    matchingAddressData?.pages.map((page) => {
      if (page.data.page_content.length === 0) {
        setCourtAddress(null);
        closeOptions();
      } else if (
        page.data.page_content.length >= 1 &&
        typeof courtAddress === "string"
      ) {
        showOptions();
      }
    });

    if (typeof courtAddressDetail === "string") {
      setValue("court.address_detail", courtAddressDetail);
    }

    if (watch("court.address_detail")) {
      closeOptions();
    }

    setValue("starttime", startTime);
    setValue("startdate", startDate);
    setValue("enddate", endDate);
    setValue("endtime", endTime);
    refetchCourts();
  }, [
    startDateTime,
    endDateTime,
    matchingAddressData,
    setValue,
    watch,
    showOptions,
    courtAddress,
    courtAddressDetail,
    displayOptions,
  ]);

  const watchValueLength = (value: any) => watch(value);
  const handleEraseValue = (value: any) => setValue(value, "");

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

    setCourtAddress(fullAddress);
    setValue("court.address", fullAddress);
    setCourtAddressDetail("");
    refetchCourts();
  };

  const handleClick = () => {
    handleOpenAddressBox({ onComplete: handleComplete });
  };

  const onSubmitForm = (data: GameHostField) => {
    hostGameMutation(data);
  };

  return (
    <>
      {displayOptions && courtAddress !== null && (
        <MatchingCourtModal
          setValue={setValue}
          matchingAddressData={matchingAddressData}
          setCourtAddressDetail={setCourtAddressDetail}
          setCourtAddress={setCourtAddress}
          refetchCourts={refetchCourts}
        />
      )}
      <form
        className="flex flex-col laptop:gap-[35px] mobile:gap-4 text-[14px]"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <GameHostInputField
          type="string"
          id="title"
          label="경기 제목"
          placeholder="경기 제목을 입력해주세요."
          register_value="title"
          isRequired={true}
          register={register}
          handleEraseValue={() => handleEraseValue("title")}
          gameHostValue={watchValueLength("title")}
        />

        {/* Game start date and time */}
        <div className="flex flex-col gap-2">
          <FormLabel id="start_date" children="경기 시작" />

          <div className="flex gap-2 w-full">
            <div className="flex items-center  h-[50px] p-4  bg-[#F7F7F7] text-[#969696] w-full rounded-lg ">
              {startDateTime.length > 1 ? startDateTime.split("T")[0] : null}{" "}
              {startDateTime.length > 1
                ? startDateTime.split("T")[1]
                : "경기 시간을 선택해주세요."}
            </div>

            <input
              type="datetime-local"
              id="start_date"
              required
              className="w-[54px] h-[54px] p-4  bg-[#DFEFFE] text-[#999] rounded-lg "
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
          <FormLabel id="end_date" children="경기 종료" />

          <div className="flex items-center gap-2 w-full">
            <div className="flex items-center  h-[50px] p-4  bg-[#F7F7F7] text-[#969696] w-full rounded-lg ">
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
              className=" w-[54px] h-[54px] p-4  bg-[#DFEFFE] text-[#999] rounded-lg "
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
        <GameHostInputField
          type="string"
          id="address"
          label="경기 주소"
          placeholder="주소를 검색해주세요."
          register_value="court.address"
          isRequired={true}
          register={register}
          gameHostValue={false}
          buttonField={true}
          handleFindAddress={handleClick}
        />
        <GameHostInputField
          type="string"
          id="address"
          label="경기 상세 주소"
          placeholder="상세 주소를 입해주세요."
          register_value="court.address_detail"
          isRequired={true}
          register={register}
          handleFindAddress={handleClick}
          handleEraseValue={() => handleEraseValue("court.address_detail")}
          gameHostValue={watchValueLength("court.address_detail")}
        />

        <GameHostInputField
          type="string"
          id="title"
          label="경기장 이름"
          placeholder="경기 이름을 입력해주세요."
          register_value="court.name"
          isRequired={true}
          register={register}
          handleEraseValue={() => handleEraseValue("court.name")}
          gameHostValue={watchValueLength("court.name")}
        />

        {/* max participants */}

        <div className="flex flex-col gap-2   mobile:justify-between ">
          <div className="flex items-center gap-4 h-full">
            <div className="flex flex-col gap-2 tablet:w-full">
              <FormLabel id="max_players" children="총 인원 모집" />
              <input
                type="number"
                id="max_players"
                placeholder="00 명"
                className=" h-[50px] p-4  bg-[#F7F7F7] w-full rounded-lg text-center font-bold"
                {...register("max_invitation", {
                  required: true,
                })}
              />
            </div>

            {/* recruiting participants */}
            <div className="flex flex-col gap-2 tablet:w-full ">
              <FormLabel id="min_players" children=" 최소 모집 인원" />

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
          {maxParticipants < minParticipants && (
            <ErrorMessage children="총 모집 인원은 최소 모집 인원보다 많아야해요." />
          )}
        </div>

        {/* participation fee */}
        <div className="space-y-2">
          <GameHostInputField
            type="string"
            id="string"
            label="참가비"
            placeholder="경기 참가비를 입해주세요."
            register_value="fee"
            isRequired={true}
            register={register}
            feeField={true}
          />
          {gameFee < 0 && (
            <ErrorMessage children="경기 참가비는 0 이상의 정수이어야합니다." />
          )}
        </div>

        {/* information */}
        <div className="flex flex-col gap-2">
          <FormLabel id="" children=" 추가 정보" />
          <textarea
            id="info"
            style={{ resize: "none" }}
            placeholder="주차, 샤워 가능 여부, 경기 진행 방식, 필요한 유니폼 색상 등 참가들에게 공지할 정보들을 입력해주세요."
            className="w-full h-[150px]   mobile:text-[14px] tablet:text-[16px] px-4 py-3 bg-[#F7F7F7] rounded-lg "
            {...register("info")}
          />
        </div>

        <button
          disabled={
            !formState.isValid ||
            gameFee < 0 ||
            maxParticipants < minParticipants
          }
          style={{
            backgroundColor:
              !formState.isValid || maxParticipants < minParticipants
                ? "#969696"
                : "#4065F6",
          }}
          type="submit"
          className=" w-full h-[50px] rounded-[8px] text-white"
        >
          매치 생성하기
        </button>
      </form>
    </>
  );
};
