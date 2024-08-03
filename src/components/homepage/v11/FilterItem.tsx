type FilterItem = {
  content: string;
};

const FilterItem = ({ content }: FilterItem) => {
  return (
    <button
      type="button"
      className="py-[10px] px-4 text-[#fff] text-sm font-[500] rounded-[50px] border border-[#737373]"
    >
      {content}
    </button>
  );
};

export default FilterItem;
