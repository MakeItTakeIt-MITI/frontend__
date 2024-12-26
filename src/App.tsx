import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navigation/Navbar.tsx";
import { ScrollToTop } from "./components/common/ScrollToTop.tsx";

function App() {
  return (
    <main
    // style={{
    //   backgroundColor: "#171717",
    // }}
    >
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
