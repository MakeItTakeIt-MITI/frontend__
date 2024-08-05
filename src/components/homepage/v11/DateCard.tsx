const DateCard = () => {
  return (
    <>
      {/* header */}

      {/* dates */}
      <div className="flex items-center gap-[0.5rem]">
        {/* date item */}
        <div className="flex flex-col items-center gap-[0.5rem]">
          <h2 className="text-[12px] font-[300] text-primary-white">월</h2>
          <div className="size-[2rem] flex items-center justify-center font-bold text-sm rounded-full bg-[#7FEEF0]">
            9
          </div>
        </div>
      </div>
    </>
  );
};

export default DateCard;
