// import { useState } from "react";
import useStatusSelectionStore from "../../store/useStatusSelectionStore";

type GameStatusItemProps = {
  content: string;
};

const GameStatusItem = ({ content }: GameStatusItemProps) => {
  const { selectedStatuses, toggleStatus } = useStatusSelectionStore();
  const isSelected = selectedStatuses.includes(content);
  //

  return (
    <button
      type="button"
      onClick={() => toggleStatus(content)}
      style={{
        border: !isSelected ? "1px solid #A3A3A3" : "1px solid #7FEEF0",
        color: !isSelected ? "#A3A3A3" : "#7FEEF0",
      }}
      className="flex items-center justify-center sm:text-sm md:text-base sm:font-[400] md:font-[500] sm:w-[4.8125rem] sm:h-[2.25rem]  md:w-[10rem] md:h-[2.25rem] sm:rounded-[0.5rem] md:rounded-[1.25rem]"
    >
      {content}
    </button>
  );
};

export default GameStatusItem;
