import { Outlet } from "react-router-dom";
import { Header } from "./components/home/Header";
import { AdvertisementBanner } from "./components/AdvertisementBanner";
import { ScrollToTop } from "./components/common/ScrollToTop";

function App() {
  return (
    <main className="mb-[19px]">
      <ScrollToTop />
      <Header />
      <Outlet />
      <AdvertisementBanner />
    </main>
  );
}

export default App;
