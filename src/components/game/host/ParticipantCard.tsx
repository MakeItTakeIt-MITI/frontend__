import blankProfile from "../../../assets/blank_profile.png";
import { ParticipantField } from "../../../interface/gameInterface";

export interface ProfileCardProp {
  user: ParticipantField;
}

export const ParticipantCard = ({ user }: ProfileCardProp) => {
  return (
    <div key={user.id} className="flex flex-col items-center gap-2">
      {/* <div className="w-10 h-10 rounded-full bg-[#666]"></div> */}
      <img
        src={blankProfile}
        alt="profile pic"
        className="w-10 h-10 rounded-full"
      />
      <span className="w-[52px] text-[14px] text-[#666]">
        {user.player_account_holder} 님
      </span>
    </div>
  );
};
