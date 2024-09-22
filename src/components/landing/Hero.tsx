import hero from "../../assets/v11/landing.png";
import Layout from "./Layout";

const Hero = () => {
  return (
    <Layout>
      <div className="mx-auto w-full flex justify-center items-center">
        <img src={hero} alt="landing" />
      </div>
    </Layout>
  );
};

export default Hero;
