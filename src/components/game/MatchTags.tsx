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
        className="text-[10px] h-[15px] text-center  font-semibold rounded-sm p-1  leading-[13px]"
      >
        {children}
      </span>
    </div>
  );
};
