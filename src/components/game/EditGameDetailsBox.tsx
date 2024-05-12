import { useState } from "react";
import {
  GameDetailField,
  GameEditParameters,
} from "../../interface/gameInterface";
import { UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "../common/ErrorMessage";
import { MinParticipants } from "../../stories/ErrorMessage.stories";

interface EditGameDetailBoxProp {
  gameDetail: GameDetailField;
  register: UseFormRegister<GameEditParameters>;
  editGameResponse: any;
}

export const EditGameDetailsBox = ({
  gameDetail,
  register,
  editGameResponse,
}: EditGameDetailBoxProp) => {
  const [minParticipants, setMinParticipants] = useState(false);
  const [maxParticipants, setmaxParticipants] = useState(false);
  const [editInfo, setEditInfo] = useState(false);

  return (
    <div className="w-full  laptop:border laptop:border-gray-200  p-3 rounded-lg">
      <h2 className="font-bold text-[#040000] text-[16px]">경기 수정</h2>
      <form className="space-y-5 ">
        <h3 className="font-bold text-[12px] text-[#040000]">경기 인원 수정</h3>
        <div className="flex items-center justify-center gap-[60px]">
          <div className="flex flex-col text-[14px]">
            <label
              onClick={() => setmaxParticipants(true)}
              htmlFor="max_invitation"
              className="text-[#969696]"
            >
              총 모집 인원
            </label>
            {!maxParticipants ? (
              <button
                onClick={() => setmaxParticipants(true)}
                className="w-[142px] h-[44px] text-[#969696] text-[14px] bg-[#F7F7F7] flex items-center justify-center"
              >
                {gameDetail?.max_invitation} 명
              </button>
            ) : (
              <input
                id="max_invitation"
                autoFocus
                className="w-[142px] h-[44px] bg-[#F7F7F7] text-center flex items-center justify-center"
                type="number"
                value={maxParticipants ? undefined : gameDetail?.max_invitation}
                {...register("max_invitation")}
              />
            )}
          </div>
          <div className="flex flex-col text-[14px]">
            <label
              onClick={() => setMinParticipants(true)}
              htmlFor="min_invitation"
              className="text-[#969696]"
            >
              최소 모집 인원
            </label>
            {!minParticipants ? (
              <button
                onClick={() => setMinParticipants(true)}
                className="w-[142px] h-[44px] text-[#969696] text-[14px] bg-[#F7F7F7] flex items-center justify-center"
              >
                {gameDetail?.min_invitation} 명
              </button>
            ) : (
              <input
                id="min_invitation"
                autoFocus
                className="w-[142px] h-[44px] bg-[#F7F7F7] text-center flex items-center justify-center"
                type="number"
                value={minParticipants ? undefined : gameDetail?.min_invitation}
                {...register("min_invitation")}
              />
            )}
          </div>
        </div>
        {editGameResponse?.status_code === 400 && (
          <ErrorMessage {...MinParticipants.args} />
        )}
        <h3 className="font-bold text-[12px] text-[#040000]">모집 정보</h3>

        {!editInfo ? (
          <div
            className="p-4 bg-[#f7f7f7] h-[218px] w-full overflow-y-auto"
            onClick={() => setEditInfo(true)}
          >
            {gameDetail?.info}
          </div>
        ) : (
          <textarea
            autoFocus
            style={{ resize: "none" }}
            placeholder={gameDetail?.info}
            className="p-4 bg-[#f7f7f7] h-[218px] w-full overflow-y-auto"
            {...register("info")}
          />
        )}
      </form>
    </div>
  );
};
