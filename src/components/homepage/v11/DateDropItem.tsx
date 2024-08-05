import drop from "../../../assets/v11/drop.svg";

type DateDropItemProps = {
  content: string;
  timeFormat?: "시" | "분";
};

const DateDropItem = ({ content, timeFormat }: DateDropItemProps) => {
  return (
    <div className="space-x-[0.5rem] flex items-center">
      <div className="pl-[1.25rem] pr-[0.25rem] py-[0.25rem] w-[10rem] h-[2rem] rounded-[0.75rem] border border-dark-card flex items-center justify-between">
        <span className="text-primary-white font-bold">{content}</span>
        <img src={drop} alt="drop" />
      </div>
      <span className="font-[300] text-[#A3A3A3]">{timeFormat}</span>
    </div>
  );
};

export default DateDropItem;
