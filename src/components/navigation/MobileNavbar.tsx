import { Link } from "react-router-dom";
import logo from "../../assets/v11/logo.svg";
import hamburger from "../../assets/v11/hamburger.svg";

const MobileNavbar = () => {
  return (
    <nav className="sm:flex h-[3.75rem] w-full justify-between md:hidden px-[1.25rem] py-[1rem] bg-primary-black">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <button type="button">
        <img src={hamburger} alt="hamburger" />
      </button>
    </nav>
  );
};

export default MobileNavbar;
