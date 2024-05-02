interface LabelProps {
  id: string;
  children: string;
}
export const FormLabel: React.FC<LabelProps> = ({ id, children }) => {
  return (
    <label htmlFor={id} className=" text-[#1C1C1C]">
      {children}
    </label>
  );
};
