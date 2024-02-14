interface RequestButtonProp {
  textOne: string;
  textTwo: string;
  backgroundColor: string;
  userId: number;
  gameIdParam: number;
  handlePatchStatus: (arg1: number, arg2: number) => void;
}

export const UserRequestActionButton = ({
  textOne,
  textTwo,
  backgroundColor,
  userId,
  gameIdParam,
  handlePatchStatus,
}: RequestButtonProp) => {
  return (
    <button
      onClick={() => handlePatchStatus(gameIdParam, userId)}
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
