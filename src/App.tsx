import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navigation/Navbar";
import { ScrollToTop } from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default App;
