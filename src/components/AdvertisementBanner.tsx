export const AdvertisementBanner = () => {
  return (
    <div className="bg-gray-200 relative mobile:px-4  w-full  h-[180px]   border border-2-[#E8E8E8] rounded-xl">
      <div className="absolute top-4 right-4 w-[60px] h-[32px] rounded-[4px] bg-[#FED500]">
        <span className="text-center text-white font-bold flex items-center justify-center h-full">
          Ad
        </span>
      </div>
    </div>
  );
};
