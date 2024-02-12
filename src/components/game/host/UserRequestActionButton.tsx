interface RequestButtonProp {
  textOne: string;
  textTwo: string;
  backgroundColor: string;
}

export const UserRequestActionButton = ({
  textOne,
  textTwo,
  backgroundColor,
}: RequestButtonProp) => {
  return (
    <button
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
