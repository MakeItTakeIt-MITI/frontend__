import { Outlet } from "react-router-dom";
import { Header } from "./components/main/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
