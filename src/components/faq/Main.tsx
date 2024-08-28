const Main = () => {
  return (
    <div className="h-[57.8125rem] flex flex-col w-full  gap-[2.5rem] px-[36rem] pt-[3.75rem] pb-[6.25rem] bg-secondary-black">
      {/* upper */}
      <div className="space-y-[1.25rem] text-primary-white">
        <h1 className="text-[32px] font-[600] ">자주 묻는 질문</h1>
        <h2 className="text-[20px]">궁금하신 내용의 답변을 모아두었어요.</h2>
      </div>
      <div></div>
      {/* bottom */}
      <div
        style={{
          background: "linear-gradient(97deg, #DAFEFF 11.57%, #9EEFF0 88.43%)",
        }}
        className="w-full h-[100px] rounded-xl px-10 sm:hidden md:flex items-center justify-between"
      >
        <p className="font-bold">
          편하게 농구게임에 참여하고 싶다면 <br />
          MITI를 이용해보세요!
        </p>
        <button
          style={{
            background:
              "linear-gradient(94deg, rgba(255, 255, 255, 0.42) 4.64%, rgba(255, 255, 255, 0.60) 96.13%)",
          }}
          className="px-4 py-3 rounded-lg text-sm font-[700] text-dark-card  "
        >
          MITI 앱으로 열기
        </button>
      </div>
    </div>
  );
};

export default Main;
