import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/v11/logo.svg";
import focused_loco from "../../assets/v11/logo-focused.svg";
import { NAVITEMS } from "../../constants/navigation";

const BrowserNavbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="sm:hidden md:flex items-center justify-center;  w-full h-[3.75rem]  bg-primary-black ">
      <div className="w-[768px] mx-auto flex items-center gap-[3.75rem]">
        <Link to="/">
          {pathname === "/" ? (
            <img src={focused_loco} alt="logo" />
          ) : (
            <img src={logo} alt="logo" />
          )}
        </Link>{" "}
        <div className="space-x-[1.25rem] text-primary-white font-bold">
          {NAVITEMS.map((nav) => (
            <Link
              style={{
                color:
                  pathname.startsWith(nav.path) ||
                  (pathname.startsWith("/game") && nav.path === "/game/list") ||
                  (pathname.startsWith("/courts") &&
                    nav.path === "/courts/list")
                    ? "#7FEEF0"
                    : "#F1F1F1",
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
