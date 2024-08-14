import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navigation/Navbar";

function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Outlet />
      {/* <AdvertisementBanner /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
