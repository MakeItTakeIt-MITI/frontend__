import { useParams } from "react-router-dom";
import { useParticipatingUsersQuery } from "../../../hooks/useParticipatingUsersQuery";
import { UserRequestActionButton } from "./UserRequestActionButton";
import { RejectUserButton } from "../../../stories/UserRequestAction.stories";
import { updateParticipationStatus } from "../../../api/gameHost";

export const UsersRequestingTab = ({ refetch, participantsData }) => {
  // const { id } = useParams();
  // const gameIdParam = Number(id);

  // const { data: participantsData } = useParticipatingUsersQuery(gameIdParam);

  const handleConfirmToGame = (userId: number) => {
    updateParticipationStatus(participantsData?.data.id, userId);
    refetch();
  };

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
            <UserRequestActionButton
              {...RejectUserButton.args}
              handleConfirmToGame={() => handleConfirmToGame(user.id)}
            />
          </div>
        );
      })}
    </>
  );
};
