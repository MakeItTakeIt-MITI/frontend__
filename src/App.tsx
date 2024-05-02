import { Outlet } from "react-router-dom";
import { Header } from "./components/home/Header";
import { AdvertisementBanner } from "./components/AdvertisementBanner";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <AdvertisementBanner />
    </div>
  );
}

export default App;
