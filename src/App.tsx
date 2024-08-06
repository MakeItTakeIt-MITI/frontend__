import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/ui/common/ScrollToTop";
import { Header } from "./components/\bv11_homepage/Header";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      {/* <AdvertisementBanner /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
