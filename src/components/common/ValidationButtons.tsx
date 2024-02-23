interface ValidateProps {
  isValid: boolean;
  validateFunction: (arg: boolean) => void;
  validation: () => void;
  role: string;
}

export const ValidateInputButton = ({
  isValid,
  validation,
  role,
}: ValidateProps) => {
  return (
    <button
      onClick={validation}
      type="button"
      role={role}
      style={{
        backgroundColor: !isValid ? "#4065f6" : "#E8E8E8",
      }}
      className="w-[81px] h-9 absolute right-2 bottom-2.5 text-[14px] text-white  rounded-lg"
    >
      {!isValid ? "중복확인" : "수정하기"}
    </button>
  );
};
