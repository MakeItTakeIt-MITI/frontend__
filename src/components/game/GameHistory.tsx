import { Link } from "react-router-dom";
import gameDetailBtn from "../../assets/More_Info_btn.svg";

import { GameDetailField, GuestGameField } from "../../interface/gameInterface";

// interface HostGameProps {
//   hostHistory: { data: [GameDetailField] };
// }

interface GuestGameProps {
  guestHistory: GuestGameField;
}

export const HostGameHistory = () => {
  return (
    <>
      {/* {hostHistory?.data.map((hostGame: GameDetailField) => {
        return (
          <Link
            to={`/games/detail/${hostGame.id}`}
            key={hostGame.id}
            className="mobile:w-full tablet:w-[480px]  flex   justify-between p-4 border border-[#E8E8E8] rounded-xl"
          >
            <div className=" flex flex-col gap-1">
              <div className="flex gap-2">
                <MatchTags {...HostTag.args} />
                {hostGame.game_status === "cancelled" ? (
                  <MatchTags {...CompletedTag.args} />
                ) : (
                  <MatchTags {...RecrutingTag.args} />
                )}
              </div>
              <h4>{hostGame?.title}</h4>
              <p className="text-[14px] text-[#999]">
                {`${hostGame?.startdate} ${hostGame?.starttime.slice(
                  0,
                  -3
                )} ~ ${hostGame?.endtime.slice(0, -3)}`}
              </p>
            </div>
            <div>
              <img src={gameDetailBtn} alt="" />
            </div>
          </Link>
        );
      })} */}
    </>
  );
};

export const GuestGameHistory = ({ guestHistory }: GuestGameProps) => {
  console.log(guestHistory.data);
  return (
    <>
      {guestHistory?.data.map((guest) => {
        return (
          <Link
            key={guest.game.id}
            to={`/games/detail/${guest.game.id}`}
            className="mobile:w-full tablet:w-[480px]  flex   justify-between p-4 border border-[#E8E8E8] rounded-xl"
          >
            <div className=" flex flex-col gap-1">
              <div className="flex gap-2">{/* match tags */}</div>
              <h4>{guest?.game.title}</h4>
              <p className="text-[14px] text-[#999]">
                {`${guest.game.startdate} ${guest.game.starttime} ~ ${guest.game.endtime}`}
              </p>
            </div>
            <div>
              <img src={gameDetailBtn} alt="" />
            </div>
          </Link>
        );
      })}
    </>
  );
};
