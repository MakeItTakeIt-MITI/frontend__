export const AdvertisementBanner = () => {
  return (
    <div className="bg-gray-200 relative mobile:w-screen mobile:px-[4rem] mobile:h-[200px] mobile:mb-[5rem] tablet:w-full tablet:px-[13rem] tablet:h-[180px] border border-2-[#E8E8E8] rounded-xl my-[40px]">
      <div className="absolute top-[16px] right-[16px] w-[60px] h-[32px] rounded-[4px] bg-[#FED500]">
        <span className="text-center text-white font-bold flex items-center justify-center h-full">
          Ad
        </span>
      </div>
    </div>
  );
};
