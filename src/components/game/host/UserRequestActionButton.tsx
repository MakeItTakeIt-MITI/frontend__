interface RequestButtonProp {
  textOne: string;
  textTwo: string;
  backgroundColor: string;
  handleRemoveFromGame?: (userId: number) => void;
  handleConfirmToGame?: (userId: number) => void;
  handleCopyClipBoard?: (arg: string) => void;
}

export const UserRequestActionButton = ({
  textOne,
  textTwo,
  backgroundColor,
  handleConfirmToGame,
  handleRemoveFromGame,
  handleCopyClipBoard,
}: RequestButtonProp) => {
  return (
    <button
      onClick={
        handleConfirmToGame || handleRemoveFromGame || handleCopyClipBoard
      }
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
