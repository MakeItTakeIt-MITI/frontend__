import { useForm } from "react-hook-form";
import { AddressField, GameHostField } from "../../interface/gameInterface";
import { useEffect, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

export const GameHostForm = () => {
  const { handleSubmit, register, setValue, watch } = useForm<GameHostField>();
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");

  // const onInvalid = (errors) => console.error(errors);
  useEffect(() => {
    const startDate = startDateTime.split("T")[0];
    const startTime = startDateTime.split("T")[1];
    const endDate = endDateTime.split("T")[0];
    const endTime = endDateTime.split("T")[1];

    setValue("starttime", startTime);
    setValue("startdate", startDate);
    setValue("enddate", endDate);
    setValue("endtime", endTime);
  }, [setValue, startDateTime, endDateTime]);

  const handleOpenAddressBox = useDaumPostcodePopup();

  const handleComplete = (data: AddressField) => {
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

    setValue("address", fullAddress);
  };

  const handleClick = () => {
    handleOpenAddressBox({ onComplete: handleComplete });
  };

  const onSubmit = (data: GameHostField) => {
    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-4  justify-between mobile:w-full  mobile:text-[14px] tablet:text-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4 className="font-bold">경기 정보</h4>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className=" text-[#999]">
          경기 제목
        </label>

        <input
          type="text"
          id="title"
          placeholder="ex.) 수원 매탄 공원 4 vs 4 (주차 12자리)"
          className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
          {...register("title", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className=" text-[#999]">
          경기장 이름
        </label>

        <input
          type="text"
          id="title"
          placeholder="경기장 이름을 입력해주세요"
          className=" h-[50px] px-4 py-[17px] rounded-lg bg-[#F7F7F7] w-full"
          {...register("court_title", {
            required: true,
          })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[#999]">경기 시작</label>
        <div className="flex gap-4 w-full">
          <div className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full">
            {endDateTime.split("T")[0]} {endDateTime.split("T")[1]}
          </div>
          <input
            type="datetime-local"
            id="start_date"
            required
            className="w-[54px] h-[50px] p-4 py-[17px] bg-[#DFEFFE]  "
            onChange={(e) => setStartDateTime(e.target.value)}
            // {...register("start_date", {
            //   required: true,
            // })}
          />
          <input
            hidden
            type="text"
            id="start_date"
            className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full"
            {...register("startdate", {})}
          />
          <input
            hidden
            type="text"
            id="start_time"
            className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] rounded-lg"
            {...register("starttime", {})}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2"></div>
      <div className="flex flex-col gap-2 justify-center ">
        <label className="text-[#999]">경기 종료</label>

        <div className="flex items-center gap-4 w-full">
          <div className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full">
            {endDateTime.split("T")[0]} {endDateTime.split("T")[1]}
          </div>
          <input
            type="datetime-local"
            required
            onChange={(e) => setEndDateTime(e.target.value)}
            className="w-[54px] h-[50px] p-4 py-[17px] bg-[#DFEFFE]  "
          />

          <input
            hidden
            type="text"
            id="end_date"
            className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] \"
            {...register("enddate", {})}
          />
          <input
            hidden
            type="text"
            id="endtime"
            className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] rounded-lg"
            step={900}
            {...register("endtime", {})}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="end_time" className=" text-[#999]">
          경기 종료 시간
        </label>
      </div>

      {/* <DaumAddressSearcher register={register} /> */}

      <div className="flex flex-col gap-2 relative">
        <label htmlFor="address" className=" text-[#999]">
          경기 주소
        </label>

        <input
          className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full  pr-[90px]"
          type="text"
          {...register("address")}
          value={watch("address")}
          readOnly
          placeholder="경기장 주소를 입력해주세요."
        />
        <button
          type="button"
          onClick={handleClick}
          className="w-[81px] h-[36px]  bg-[#4065F6] mobile:text-[12px] tablet:text-[14px] rounded-xl text-white absolute right-0 bottom-1.5"
        >
          주소찾기
        </button>
      </div>

      {/*  */}

      <div className="flex flex-col gap-2">
        <label htmlFor="address_detail" className=" text-[#999]">
          상세 주소
        </label>
        <input
          type="text"
          id="address_detail"
          className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] rounded-lg"
          placeholder="상세 주소를 입력해주세요."
          {...register("address_detail")}
        />
      </div>

      <div className="flex tablet:gap-4  items-center mobile:justify-between ">
        <div className="flex flex-col gap-2 tablet:w-full">
          <label htmlFor="max_players" className=" text-[#999]">
            총 모집 인원
          </label>
          <input
            type="number"
            id="max_players"
            placeholder="00명"
            className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full text-center font-bold"
            {...register("max_players", {
              required: true,
            })}
          />
        </div>
        <div className="flex flex-col gap-2 tablet:w-full">
          <label htmlFor="min_players" className=" text-[#999]">
            최소 모집 인원
          </label>

          <input
            type="number"
            id="min_players"
            placeholder="00명"
            className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full rounded-lg text-center font-bold"
            {...register("min_players", {
              required: true,
            })}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="announcement" className=" text-[#999]">
          추가 정보
        </label>
        <textarea
          id="announcement"
          placeholder="주차 4자리 가능, 샤워 불가, 4 vs 4, 파란 유니폼 지참, 남녀 모두 참가 가능한 매치입니다"
          className="w-full   mobile:text-[14px] tablet:text-[16px] px-4 py-3 bg-[#F7F7F7] rounded-lg "
          {...register("announcement", {
            required: true,
          })}
        />
      </div>

      <hr className="h-[8px] w-full bg-gray-200" />

      <h4 className="font-bold">경기 정보</h4>
      <div className="flex w-full px-0 flex-col gap-2">
        <label htmlFor="fee" className=" text-[#999]">
          참여비
        </label>
        <input
          type="number"
          id="fee"
          placeholder="경기 참여비를 입력해주세요."
          className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] rounded-lg"
          {...register("fee", {
            required: true,
          })}
        />
      </div>

      <div className="flex items-center mobile:justify-between tablet:justify-center tablet:gap-4 tablet:w-full">
        <div className="flex flex-col gap-2 tablet:w-full">
          <h5 className="text-[#969696] ">예금 은행</h5>
          <input
            {...register("account_bank", {
              required: true,
            })}
            className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full rounded-lg text-center font-bold"
          />
        </div>
        <div className="flex flex-col gap-2 tablet:w-full">
          <h5 className="text-[#969696]">예금주</h5>
          <input
            {...register("account_holder", {
              required: true,
            })}
            className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] w-full rounded-lg text-center font-bold"
          />
        </div>
      </div>

      <div className="flex w-full px-0 flex-col gap-2">
        <label htmlFor="account_number" className=" text-[#999]">
          계좌번호
        </label>
        <input
          type="number"
          id="account_number"
          // placeholder="'-'을 제외한 계좌번호를 입력해주세요."
          placeholder="계좌번호를 입력해주세요."
          className=" h-[50px] p-4 py-[17px] bg-[#F7F7F7] rounded-lg"
          {...register("account_number", {
            required: true,
          })}
        />
      </div>

      <button
        type="submit"
        className=" w-full h-[50px] bg-[#4065F6] rounded-[8px] text-white"
      >
        경기 생성하기
      </button>
    </form>
  );
};
