export const ModalAddUserToMatch = () => {
  return (
    <div className=" h-full   fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center">
      <div className="bg-white   border border-gray-400 rounded-lg  tablet:w-[340px] mobile:w-full mobile:h-[236px]  p-4 flex  flex-col justify-between items-center text-[14px] ">
        <div>
          {" "}
          <p className="text-[16px]">
            <span className="font-bold">황희찬</span>님으로부터
          </p>
          <p>매치 초대가 왔어요!</p>
        </div>
        <p className="text-center px-12 text-[14px]">
          지금 수락하시면 별도의 회원가입 없이 초대하신 분의 스케줄에 추가
          인원으로 배정되어 경기를 즐기실 수 있어요 😃
        </p>
        <div className="w-full flex gap-2 text-center rounded-lg h-[50px] ">
          <button className="w-full bg-[#F7F7F7] text-[#444444] rounded-lg">
            다음에 할게요
          </button>
          <button className="w-full bg-[#4065F6] text-white rounded-lg">
            참가할게요!
          </button>
        </div>
      </div>
    </div>
  );
};
