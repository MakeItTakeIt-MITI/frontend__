import { Outlet } from "react-router-dom";
import { Header } from "./components/home/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
