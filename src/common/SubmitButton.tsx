interface ButtonProps {
  children: string;
  errors: boolean;
}

export const SubmitButton = ({ children, errors }: ButtonProps) => {
  return (
    <>
      {errors ? (
        <button
          type="submit"
          disabled
          className=" w-full  h-[50px] bg-[#969696] text-white rounded-[8px]"
        >
          {children}
        </button>
      ) : (
        <button
          type="submit"
          className=" w-full  h-[50px] bg-[#4065F6] rounded-[8px] text-white"
        >
          {children}
        </button>
      )}
    </>
  );
};
