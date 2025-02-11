interface GameStatusField {
  status: "open" | "canceled" | "closed" | "completed";
}

export const GameStatus = ({ status }: GameStatusField) => {
  return (
    <span
      style={{
        backgroundColor:
          status === "open"
            ? "#b9dbdc"
            : status === "canceled"
              ? "#E3C6CB"
              : status === "closed"
                ? "#d3d3d3"
                : status === "completed"
                  ? "#B9DBDC"
                  : "",

        color:
          status === "open"
            ? "#4152EB"
            : status === "canceled"
              ? "#C93568"
              : status === "closed"
                ? "#d3d3d3"
                : status === "completed"
                  ? "#00979A"
                  : "",
      }}
      className=" p-1 text-[10px] rounded-[0.125rem] font-bold "
    >
      {(status === "open" && "모집중") ||
        (status === "canceled" && "경기 취소") ||
        (status === "closed" && "모집 마감") ||
        (status === "completed" && "모집 완료")}
    </span>
  );
};
