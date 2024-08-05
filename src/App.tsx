import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/ui/common/ScrollToTop";
import Footer from "./components/common/Footer";
import { Header } from "./components/\bv11_homepage/Header";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      {/* <AdvertisementBanner /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
