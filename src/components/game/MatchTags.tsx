interface TagProp {
  children: string;
  backgroundColor: string;
  textColor: string;
}
export const MatchTags = ({
  children,
  backgroundColor,
  textColor,
}: TagProp) => {
  return (
    <div>
      <span
        style={{
          backgroundColor,
          color: textColor,
        }}
        className="text-[10px] h-[15px] font-bold rounded-sm p-1 "
      >
        {children}
      </span>
    </div>
  );
};
