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
    <span
      style={{
        backgroundColor,
        color: textColor,
      }}
      className="text-[11px] font-[600] rounded-[2px] p-1 "
    >
      {children}
    </span>
  );
};
