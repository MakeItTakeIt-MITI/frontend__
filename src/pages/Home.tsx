import { Hero } from "../components/main/Hero";
import banner from "../assets/banner-2.svg";

export const Home = () => {
  return (
    <div className="w-screen bg-red-200">
      <Hero
        backgroundImage={banner}
        launchText="MITI 서비스 런칭"
        recruitText="MITI와 함께, 경기 모집부터"
        managementText="관리, 결제, 매칭까지 한번에."
      />
    </div>
  );
};
