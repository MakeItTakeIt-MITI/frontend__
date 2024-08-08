import { useState } from "react";

type GameStatusItemProps = {
  content: string;
  setStatus: (status: (prevStatus: string[]) => string[]) => void;
};

const GameStatusItem = ({ content, setStatus }: GameStatusItemProps) => {
  const [selected, isSelected] = useState(false);

  const addUniqueStatus = (newStatus: string) => {
    setStatus((prevStatus: string[]) => {
      if (prevStatus.includes(newStatus)) {
        isSelected(false);
        return prevStatus.filter((status) => status !== newStatus);
      } else {
        isSelected(true);
        return [...prevStatus, newStatus];
      }
    });
  };
  return (
    <button
      type="button"
      onClick={() => addUniqueStatus(content)}
      style={{
        border: !selected ? "1px solid #A3A3A3" : "1px solid #7FEEF0",
        color: !selected ? "#A3A3A3" : "#7FEEF0",
      }}
      className="flex items-center justify-center space-y-[0.62rem] font-[500] w-[10rem] h-[2.25rem] rounded-[1.25rem]"
    >
      {content}
    </button>
  );
};

export default GameStatusItem;
