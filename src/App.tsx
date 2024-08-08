import { Outlet } from "react-router-dom";
import { ScrollToTop } from "./components/ui/common/ScrollToTop";
import { Navbar } from "./components/v11_navigation/Navbar";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      {/* <AdvertisementBanner /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
