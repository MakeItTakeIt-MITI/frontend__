type GameStautsItemProps = {
  isSelected: boolean;
  content: string;
};

const GameStatusItem = ({ isSelected, content }: GameStautsItemProps) => {
  return (
    <button
      type="button"
      style={{
        border: !isSelected ? "1px solid #A3A3A3" : "1px solid #A3A3A3",
        color: !isSelected ? "#A3A3A3" : "#7FEEF0",
      }}
      className="flex items-center justify-center space-y-[0.62rem] font-[500] w-[10rem] h-[2.25rem] rounded-[1.25rem]"
    >
      {content}
    </button>
  );
};

export default GameStatusItem;
