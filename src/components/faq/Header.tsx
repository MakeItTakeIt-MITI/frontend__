import hero from "../../assets/v11/faq-wallpaper.png";

const Header = () => {
  return (
    <div className="sm:h-[16rem] md:h-[20rem] flex justify-center items-center bg-[#000] relative">
      <img src={hero} alt="hero" className="h-full " />
      {/* content */}
      <div className="absolute md:w-[768px] flex flex-col sm:items-center md:items-start justify-center gap-[1.25rem] text-[#fff] ">
        {/* <div className="absolute top-0 bottom-0 left-[28.5rem] flex flex-col sm:items-center md:items-start justify-center gap-[1.25rem] text-[#fff] "> */}
        <p className="sm:text-sm md:text-base font-bold">MITI 서비스 런칭</p>
        <h1 className="font-bold  sm:text-[24px] md:text-[44px]">
          무엇을 도와드릴까요?{" "}
        </h1>
        <p className="sm:font-[300] md:font-[400] sm:text-[14px] md:text-[20px]">
          궁금한 내용을 해결해드려요.
        </p>
      </div>
    </div>
  );
};

export default Header;
