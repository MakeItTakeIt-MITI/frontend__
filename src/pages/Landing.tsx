import Footer from "../components/common/Footer";
import Hero from "../components/landing/Hero";

import HeroMobile from "../components/landing/HeroMobile";
import Section from "../components/landing/Section";

import games from "../assets/v11/landing-games.png";
import mobile_games from "../assets/v11/landing-games-mobille.png";

import courts from "../assets/v11/landing-court.png";
import mobile_courts from "../assets/v11/landing-court-mobile.png";

import payment from "../assets/v11/landing-payment.png";
import mobile_payment from "../assets/v11/landing-payment-mobile.png";

const Landing = () => {
  return (
    <div className=" w-full bg-[#000]">
      <Hero />
      <HeroMobile />

      <Section
        title="경기 조회"
        subtitle="간편하게 경기를 조회하고 <br /> 바로 참여해보세요."
        description="지도를 통해 내 주변의 경기를 빠르게 찾아보고 클릭 몇번으로 <br /> 간편하게 경기에 참여해보세요!"
        buttonText="경기 보러 가기"
        desktopImage={games}
        mobileImage={mobile_games}
        mobileGap="102px"
        backgroundColor="dark-card"
        reverse={false}
        textPosition="right"
        isButton={true}
      />
      <Section
        title="경기장 조회"
        subtitle="우리 동네 농구 핫플레이스 <br /> 지금 찾아보세요!"
        description=" 우리 동네의 숨겨진 농구 경기장과 게스트를 모집 중인 경기를 <br />한 번에 조회하실 수 있습니다"
        buttonText="경기장 보러 가기"
        desktopImage={courts}
        mobileImage={mobile_courts}
        mobileGap="62px"
        backgroundColor="secondary-black"
        reverse={true}
        textPosition="left"
        isButton={true}
      />
      <Section
        title="경기 정산"
        subtitle="번거로운 정산은 MITI가, <br /> 농구만 즐기세요!"
        description="  수많은 게스트의 참가비 일일이 관리하기 힘드시죠? <br /> 이제 참가비는 MITI가 자동으로 정산해 드리니 농구만 즐기세요"
        buttonText=""
        desktopImage={payment}
        mobileImage={mobile_payment}
        mobileGap="113px"
        backgroundColor="light-dark"
        reverse={false}
        textPosition="right"
        isButton={false}
      />
      {/* <Games /> */}
      {/* <Courts /> */}
      {/* <Payments /> */}
      <div className="h-[32.5rem] w-full pt-[6.12rem] pb-[8.88rem] bg-primary-black">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
