import hero from "../../assets/v11/faq-wallpaper.png";

const Header = () => {
  return (
    <div className="flex  items-center justify-center relative ">
      <img src={hero} alt="hero" />
      <div className="absolute     left-0 flex flex-col justify-center    space-y-[1.25rem]  text-primary-white">
        <h3 className="font-bold">MITI 서비스 런칭</h3>
        <h1 className="font-bold text-[44px] ">무엇을 도와드릴까요?</h1>
        <h2 className="font-[400] text-[20px]">궁금한 내용을 해결해드려요.</h2>
      </div>
    </div>
  );
};

export default Header;
