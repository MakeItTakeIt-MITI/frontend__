import { Outlet } from "react-router-dom";
import { Header } from "./components/home/Header";
import { AdvertisementBanner } from "./components/AdvertisementBanner";
import { ScrollToTop } from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <AdvertisementBanner />
    </>
  );
}

export default App;
