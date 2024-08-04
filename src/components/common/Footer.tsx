import instagram from "../../assets/v11/instagram.svg";
import miti_logo from "../../assets/v11/logo.svg";
import miti_text from "../../assets/v11/makeittakeit.png";
import playstore from "../../assets/v11/google-play.svg";
import applestore from "../../assets/v11/apple-store.svg";

const Footer = () => {
  return (
    <footer className="h-[17.5rem] w-full bg-primary-black pt-[3.75rem] pb-[5rem]">
      <div className="flex items-center justify-between w-[768px] mx-auto ">
        {/* LEFT Container */}
        <div className="space-y-[2rem]">
          {/* top text */}
          <div className="space-y-[1.25rem]">
            {/* 이용약관 / 개인정보 / 위치기반 이용약관 */}
            <div className="space-x-[1.25rem] text-[#E5E5E5] text-[12px] font-bold">
              <span>이용약관</span>
              <span>|</span>
              <span>개인정보처리방침</span>
              <span>|</span>
              <span>위치기반서비스 이용약관</span>
            </div>

            {/* contact */}
            <div className="space-y-[0.75rem] font-[400] text-[12px] text-[#D4D4D4]">
              <div className="space-x-[1.25rem] ">
                <span>대표 : 전재완</span>
                <span>사업자번호 : 000-00-00000</span>
                <span>전화 : 02-123-1234</span>
              </div>
              <div className="space-x-[1.25rem] ">
                <span>주소 : 서울특별시 여의도동 여의대로 65 22호</span>
                <span>메일 : miti.makeittakeit@gmail.com</span>
              </div>
            </div>
          </div>
          {/* icon */}
          <div>
            <a
              href="https://www.instagram.com/miti_makeittakeit_official/"
              target="_blank"
            >
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
        {/* RIGHT container */}
        <div className="flex flex-col items-center w-[16.5rem] h-[8rem] space-y-[2.88rem]">
          <div className="space-y-[0.5rem]">
            <img src={miti_logo} alt="logo" />
            <img src={miti_text} alt="miti text" />
          </div>
          <div className="flex gap-[0.75rem]">
            <button className="flex  text-[#fff] space-x-[8px] py-2 px-4">
              <img src={playstore} alt="google playstore" />
              <span className="text-[12px] font-bold">Google Play</span>
            </button>
            <button className="flex  text-[#fff] space-x-[8px] py-2 px-4">
              <img src={applestore} alt="app store" />
              <span className="text-[12px] font-bold">App Store</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
