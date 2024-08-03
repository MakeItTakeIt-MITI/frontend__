import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/v11/logo.svg";
import { NAVITEMS } from "../../constants";

const BrowserNavbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="w-full h-[3.75rem]  bg-primary-black flexCenter">
      <div className="w-[768px] mx-auto flex items-center gap-[3.75rem]">
        <img src={logo} alt="logo" />
        <div className="space-x-[1.25rem] text-primary-white font-bold">
          {NAVITEMS.map((nav) => (
            <Link
              style={{
                color: pathname === nav.path ? "#7FEEF0" : "#F1F1F1",
              }}
              to={nav.path}
              key={nav.title}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BrowserNavbar;
