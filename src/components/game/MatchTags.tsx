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
        className="text-[12px] font-bold rounded-sm px-1 py-1  "
      >
        {children}
      </span>
    </div>
  );
};
