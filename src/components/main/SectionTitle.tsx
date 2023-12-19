interface TitleProps {
  title: string;
}

export const SectionTitle = ({ title }: TitleProps) => {
  return <p className="text-[20px] font-[700] ">{title}</p>;
};
