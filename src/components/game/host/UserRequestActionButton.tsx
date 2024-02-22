interface RequestButtonProp {
  textOne: string;
  textTwo: string;
  backgroundColor: string;
  handleRemoveFromGame?: (userId: number) => void;
  handleConfirmToGame?: (userId: number) => void;
  handleCopyClipBoard?: (arg: string) => void;
  userId: number;
}

export const UserRequestActionButton = ({
  textOne,
  textTwo,
  backgroundColor,
  handleRemoveFromGame,
  handleCopyClipBoard,
  userId,
}: RequestButtonProp) => {
  const handleConfirmToGame = (userId: number) => {
    updateParticipationStatus(participantsData?.data.id, userId);
    refetch();
  };

  return (
    // || handleRemoveFromGame || handleCopyClipBoard
    <button
      onClick={() => handleConfirmToGame(userId)}
      style={{
        backgroundColor,
      }}
      className="flex flex-col items-center justify-center w-[48px] h-[40px]  text-white rounded-lg text-[12px] font-bold"
    >
      <span>{textOne}</span>
      <span>{textTwo}</span>
    </button>
  );
};
