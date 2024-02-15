import { useParams } from "react-router-dom";
import { useParticipatingUsersQuery } from "../../../hooks/useParticipatingUsersQuery";
import { UserRequestActionButton } from "./UserRequestActionButton";
import { ApproveUserButton } from "../../../stories/UserRequestAction.stories";
import { cancelParticipationStatus } from "../../../api/gameHost";

export const UsersConfirmedTab = ({ refetch, participantsData }) => {
  // const { id } = useParams();
  // const gameIdParam = Number(id);

  // const { data: participantsData } = useParticipatingUsersQuery(gameIdParam);

  const handleRemoveFromGame = (userId: number) => {
    cancelParticipationStatus(participantsData?.data.id, userId);
    refetch();
  };

  return (
    <>
      {participantsData?.data.confirmed.map((user) => {
        return (
          <div key={user.id} className="flex justify-between text-[14px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#666]"></div>

              <div className="flex  flex-col ">
                <p>{user.player_name}</p>
                <p className="text-[#666]">010-2592-2414</p>
              </div>
            </div>
            <UserRequestActionButton
              {...ApproveUserButton.args}
              handleRemoveFromGame={() => handleRemoveFromGame(user.id)}
            />
          </div>
        );
      })}
    </>
  );
};
