interface LabelProps {
  id: string;
  children: string;
}
export const FormLabel: React.FC<LabelProps> = ({ id, children }) => {
  return (
    <label
      htmlFor={id}
      className="text-zinc-900 text-sm font-normal leading-tight "
    >
      {children}
    </label>
  );
};
