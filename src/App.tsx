import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navigation/Navbar";
import { ScrollToTop } from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
