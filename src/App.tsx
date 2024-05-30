import { Outlet } from "react-router-dom";
import { Header } from "./components/home/Header";
import { AdvertisementBanner } from "./components/ui/advertisement/AdvertisementBanner";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <AdvertisementBanner />
      <Footer />
    </>
  );
}

export default App;
