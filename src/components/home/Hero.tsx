import Slider from "react-slick";

import MITI_BG_MAIN from "../../assets/banner-2.svg";
import MITI_HERO_COURT_BG from "../../assets/MITI_Hero_Court.svg";

export const HeroCarousel = () => {
  const data = [
    {
      id: 1,
      src: MITI_BG_MAIN,
      header: "MITI 서비스 런칭",
      bodyOne: "MITI와 함께, 경기 모집부터",
      bodyTwo: " 관리, 결제, 매칭까지 한번에",
    },
    {
      id: 2,
      src: MITI_HERO_COURT_BG,
      header: "MITI 서비스 런칭",
      bodyOne: "MITI로 주변의 경기를 찾아보고",
      bodyTwo: "경기에 참여해보세요",
    },
  ];
  const settings = {
    dots: true,
    waitForAnimate: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
  };
  return (
    <section className="mb-10 relative laptop:block tablet:block mobile:hidden">
      <Slider {...settings}>
        {data.map((hero) => {
          return (
            <div className="space-x-4 relative" key={hero.id}>
              <img
                src={hero.src}
                className="laptop:rounded-3xl tablet:rounded-sm "
              />
              <div className="absolute left-6 bottom-6 ">
                <h2 className="text-[#FFCF0A] text-[1rem] font-bold">
                  {hero.header}
                </h2>
                <p className="text-white text-[2rem] font-extrabold ">
                  {hero.bodyOne}
                </p>
                <p className="text-white text-[2rem] font-extrabold ">
                  {hero.bodyTwo}
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};
