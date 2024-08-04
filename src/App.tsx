import { Outlet } from "react-router-dom";
import { Header } from "./components/homepage/v11/Header";
import { AdvertisementBanner } from "./components/ui/advertisement/AdvertisementBanner";
import { ScrollToTop } from "./components/ui/common/ScrollToTop";
import Footer from "./components/common/Footer";

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
