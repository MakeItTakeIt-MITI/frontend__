import Footer from "../components/common/Footer";
import Hero from "../components/courts/Hero";
import Main from "../components/courts/Main";

const Courts = () => {
  return (
    <section className="bg-secondary-black ">
      {/* hero */}
      <Hero />
      {/* main */}
      <Main />

      <Footer />
    </section>
  );
};

export default Courts;
