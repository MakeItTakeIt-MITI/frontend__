import { UserRequestActionButton } from "./UserRequestActionButton";
import {
  ApproveUserButton,
  CopyBankInfoButton,
  RejectUserButton,
} from "../../../stories/UserRequestAction.stories";

interface ParticipantsProp {
  participantsData: () => void;
}

export const UserRequestInfoBox = () => {
  return (
    <div className="flex justify-between text-[14px]">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#666]"></div>

        <div className="flex  flex-col ">
          <p>홍길동 님</p>
          <p className="text-[#666]">010-2592-2414</p>
        </div>
      </div>
      <UserRequestActionButton {...ApproveUserButton.args} />
    </div>
  );
};

export const UserRejectInfoBox = ({ participantsData }) => {
  return (
    <>
      {participantsData?.data.requested.map((user) => {
        return (
          <div key={user.id} className="flex justify-between text-[14px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#666]"></div>

              <div className="flex  flex-col ">
                <p> {user.player_name}</p>
                <p className="text-[#666]">{user.player_phone}</p>
              </div>
            </div>
            <UserRequestActionButton {...RejectUserButton.args} />
          </div>
        );
      })}
    </>
  );
};

export const UserRefundInfoBox = () => {
  return (
    <div className="flex justify-between  text-[14px]">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#666]"></div>

        <div className="flex  flex-col ">
          <p>홍길동 님</p>
          <p className="text-[#666] ">환불 금액 ₩24,000</p>
        </div>
      </div>
      <div className="flex gap-2">
        <UserRequestActionButton {...CopyBankInfoButton.args} />
        <UserRequestActionButton {...RejectUserButton.args} />
      </div>{" "}
    </div>
  );
};
