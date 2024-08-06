import share from "../../assets/v11/share.svg";
const GameDetailFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[4.375rem]  z-99 bg-primary-black flex items-center  justify-center py-[0.81rem]">
      <div className="flex items-center gap-[8.12rem]">
        <p className="text-primary-white font-bold text-lg">
          경기에 참여하고 싶다면?
        </p>
        <div className="flex items-center gap-[2.5rem]">
          <button className="w-[25rem] bg-[#7FEEF0] text-[#262626] font-bold text-lg py-[0.81rem] rounded-[6.24rem]">
            앱 다운로드하고 자세한 정보 확인하기
          </button>
          <img src={share} alt="share" />
        </div>
      </div>
    </footer>
  );
};

export default GameDetailFooter;
