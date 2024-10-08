const NotFound = () => {
  return (
    <section className="bg-secondary-black h-screen pt-[60px] pb-[60px] ">
      <div className="md:w-[768px] sm:w-full md:px-0 sm:px-5 space-y-[42px] mx-auto ">
        <div className="space-y-[25px] py-[50px] h-[530px]">
          <h1 className="text-[#7feef0] md:text-[120px] sm:text-[60px] font-bold ">
            404
          </h1>
          <div className="space-y-3">
            <h2 className=" text-white md:text-4xl sm:text-md font-bold">
              페이지를 찾을 수 없습니다.
            </h2>
            <p className=" text-white md:text-2xl sm:text-smfont-normal ">
              요청하신 페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
              <br />
              입력하신 주소를 다시 한 번 확인해주세요.
            </p>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(97deg, #DAFEFF 11.57%, #9EEFF0 88.43%)",
          }}
          className="w-full h-[100px] rounded-xl sm:px-5 md:px-10  flex items-center justify-between"
        >
          <p className="font-bold sm:text-sm md:text-base">
            편하게 농구게임에 참여하고 싶다면 <br />
            MITI를 이용해보세요!
          </p>
          <button
            type="button"
            style={{
              background:
                "linear-gradient(94deg, rgba(255, 255, 255, 0.42) 4.64%, rgba(255, 255, 255, 0.60) 96.13%)",
            }}
            className="px-4 py-3 rounded-lg sm:text-[10px] md:text-sm font-[700] text-dark-card  "
          >
            MITI 앱으로 열기
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
