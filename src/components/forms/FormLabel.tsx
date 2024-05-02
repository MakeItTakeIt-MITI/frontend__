export const FormLabel = ({ id, children }) => {
  return (
    <label htmlFor={id} className=" text-[#1C1C1C]">
      {children}
    </label>
  );
};
