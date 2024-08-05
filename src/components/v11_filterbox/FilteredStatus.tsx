type FilteredStatus = {
  content: string;
};

const FilteredStatus = ({ content }: FilteredStatus) => {
  return (
    <button
      type="button"
      className="py-[10px] px-4 text-[#fff] text-sm font-[500] rounded-[50px] border border-[#737373]"
    >
      {content}
    </button>
  );
};

export default FilteredStatus;
