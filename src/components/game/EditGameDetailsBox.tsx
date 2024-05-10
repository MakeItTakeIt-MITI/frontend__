import { useState } from "react";
import { GameDetailBoxProp } from "../../interface/gameInterface";

export const EditGameDetailsBox = ({ gameDetail }: GameDetailBoxProp) => {
  const [minParticipants, setMinParticipants] = useState(false);
  const [maxParticipants, setmaxParticipants] = useState(false);
  const [editInfo, setEditInfo] = useState(false);

  return (
    <div className="w-full h-[447px] border border-gray-200 p-3 rounded-lg">
      <h2 className="font-bold text-[#040000] text-[16px]">경기 수정</h2>
      <div className="space-y-5 ">
        <h3 className="font-bold text-[12px] text-[#040000]">경기 인원 수정</h3>
        <div className="flex items-center justify-center gap-[60px]">
          <div
            onClick={() => setMinParticipants(true)}
            className="flex flex-col text-[14px]"
          >
            <label htmlFor="" className="text-[#969696]">
              총 모집 인원
            </label>
            {!minParticipants ? (
              <div className="w-[142px] h-[44px] text-[#969696] text-[14px] bg-[#F7F7F7] flex items-center justify-center">
                {gameDetail?.min_invitation} 명
              </div>
            ) : (
              <input
                className="w-[142px] h-[44px] bg-[#F7F7F7] text-center flex items-center justify-center"
                type="number"
                placeholder="명"
              />
            )}
          </div>
          <div
            onClick={() => setmaxParticipants(true)}
            className="flex flex-col text-[14px]"
          >
            <label htmlFor="" className="text-[#969696]">
              최소 모집 인원
            </label>
            {!maxParticipants ? (
              <div className="w-[142px] h-[44px] text-[#969696] text-[14px] bg-[#F7F7F7] flex items-center justify-center">
                {gameDetail?.max_invitation} 명
              </div>
            ) : (
              <input
                className="w-[142px] h-[44px] bg-[#F7F7F7] text-center flex items-center justify-center"
                type="number"
                placeholder="명"
              />
            )}
          </div>
        </div>
        <h3 className="font-bold text-[12px] text-[#040000]">모집 정보</h3>

        <textarea
          style={{ resize: "none" }}
          placeholder={gameDetail?.info}
          className="p-4 bg-[#f7f7f7] h-[218px] w-full overflow-y-auto"
        ></textarea>
      </div>
    </div>
  );
};
