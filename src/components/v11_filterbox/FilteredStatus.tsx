import mobile_drop from "../../assets/v11/mobile-drop.svg";
import close from "../../assets/v11/close-mobile.svg";

type FilteredStatus = {
  content: string;
  handleDisplayFilterBox?: () => void;
  resetStatus: () => void;
};

const FilteredStatus = ({
  content,
  handleDisplayFilterBox,
  resetStatus,
}: FilteredStatus) => {
  const date = "날짜";
  const time = "경기 시작 시간";
  const status = "경기 상태";

  const filterDate = content === date;
  const filterTime = content === time;
  const filterStatus = content === status;

  return (
    <>
      {/* Non mobile devices */}
      <button
        type="button"
        onClick={() => {
          if (content == date || content === time || content === status) {
            if (handleDisplayFilterBox) {
              handleDisplayFilterBox();
            }
          } else {
            resetStatus();
          }
        }}
        className={`md:flex sm:hidden  items-center gap-1 py-[10px] px-4 ${filterDate || filterTime || filterStatus ? "text-[#fff]" : "text-primary-teal"}  text-sm 
      ${filterDate || filterTime || filterStatus ? "font-[500] " : "font-[600]"} 
      rounded-[50px] border border-[#737373]`}
      >
        {/* <div className="flex items-center gap-2"> {content}</div> */}
        {/* {content} */}
        <span>{content}</span>
        {filterDate || filterTime || filterStatus ? (
          false
        ) : (
          <img src={close} alt="close" />
        )}
      </button>

      {/* Mobile device */}
      <button
        type="button"
        // onClick={handleDisplayFilterBox}
        onClick={() => {
          if (content == date || content === time || content === status) {
            if (handleDisplayFilterBox) {
              handleDisplayFilterBox();
            }
          } else {
            resetStatus();
          }
        }}
        className={`whitespace-nowrap text-[14px] py-2.5 px-4  md:hidden   h-[34px]  sm:flex gap-2  items-center justify-center   ${filterDate || filterTime || filterStatus ? "text-[#fff]" : "text-primary-teal"}  
      ${filterDate || filterTime || filterStatus ? "font-[500] " : "font-[600]"} 
      rounded-[50px] border border-[#737373]`}
      >
        {/* <span> {content === '경기 시작 시간' && setSelectedTimeDate('시간')}</span> */}
        <div className="flex "> {content}</div>
        {filterDate || filterTime || filterStatus ? (
          <img src={mobile_drop} alt="drop" />
        ) : (
          <img src={close} alt="close" className="size-[10px]" />
        )}
      </button>
    </>
  );
};

export default FilteredStatus;
