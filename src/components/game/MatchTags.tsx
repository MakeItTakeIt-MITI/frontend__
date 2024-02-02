interface TagProp {
  children: string;
}
export const MatchTags = ({ children }: TagProp) => {
  return <span className="text-[11px] font-[600]">{children}</span>;
};
