import { Link } from "react-router-dom";
import mitiLogo from "../../assets/MITI_logo.svg";
import { HeaderField } from "../home/Header";
import bars from "../../assets/tab-bars.svg";
import { useState } from "react";
import { HeaderTabContainer } from "../common/HeaderTabContainer";

const BrowserHeader = ({ handleLogout, isLoggedIn }: HeaderField) => {
  const [displayTabItems, setDisplayTabItems] = useState(false);

  const displayTab = () => {
    setDisplayTabItems(!displayTabItems);
  };

  return (
    <nav className="relative laptop:w-[1024px]  tablet:w-full z-[999] mobile:hidden tablet:flex h-[80px] items-center  justify-between  tablet:px-[4rem] laptop:px-[0px]   mx-auto">
      <div className="flex gap-4 items-center">
        <Link to="/">
          <img src={mitiLogo} alt="miti logo" />
        </Link>
      </div>
      <div className="flex items-center gap-6 text-[16px] font-[500]  ">
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>로그아웃</button>

            <Link to={`/user/profile`}>내 정보</Link>
          </>
        ) : (
          <>
            <Link to="/auth/login" className="text-[#707070]">
              로그인
            </Link>
            <Link to="/auth/signup" className="text-[#707070]">
              회원가입
            </Link>
          </>
        )}

        <div className="" onClick={displayTab}>
          <img src={bars} alt="tab icon" className="hover:cursor-pointer" />
          {displayTabItems && <HeaderTabContainer displayTab={displayTab} />}
        </div>
      </div>
    </nav>
  );
};

export default BrowserHeader;
