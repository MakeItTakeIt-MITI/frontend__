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
        className="text-[11px] font-[600] rounded-md px-2 py-1  "
      >
        {children}
      </span>
    </div>
  );
};
