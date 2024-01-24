import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import closeButton from "../../assets/x_button.svg";
import { userLogout } from "../../api/users";

import homeIcon from "../../assets/header_home_icon.svg";
import gamesIcon from "../../assets/header_games_icon.svg";
import profileIcon from "../../assets/header_profile_icon.svg";
import { useUserInfoQuery } from "../../hooks/useUserInfoQuery";
import "./sidebar.css";
import useUserDataStore from "../../store/useUserDataStore";

interface DisplayTab {
  setDisplayTab: (arg: boolean) => void;
}

export const Sidebar = ({ setDisplayTab }: DisplayTab) => {
  const { isLoggedIn, logout } = useAuthStore();
  const { userId } = useUserDataStore();
  const navigate = useNavigate();

  const { data } = useUserInfoQuery(userId);

  if (userId) {
    console.log(data);
  }
  const closeTab = () => setDisplayTab(false);

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다.");
      logout();
      userLogout();
      setDisplayTab(false);
      navigate("/");
    } else {
      alert("취소합니다.");
      return;
    }
  };

  return (
    <div className="bg-black bg-opacity-50 fixed top-0 bottom-0 right-0 left-0  ">
      <div
        id="fill-left-to-right"
        className="flex flex-col gap-6 justify-around px-4 py-6 fixed  top-0 left-0 bottom-0   w-[18rem] bg-white rounded-tr-xl rounded-br-xl "
      >
        <div className="h-8 flex justify-between">
          <div>
            {isLoggedIn ? (
              <div className="flex flex-col">
                <Link
                  to="/profile"
                  className="font-[600] text-xl"
                  onClick={closeTab}
                >
                  {data?.data.name} 님 ({data?.data.nickname})
                </Link>{" "}
                <p className="font-[400] text-sm">{data?.data.email}</p>
              </div>
            ) : (
              <Link
                to="/login"
                className="font-[600] text-2xl"
                onClick={closeTab}
              >
                로그인
              </Link>
            )}
          </div>
          <button onClick={closeTab}>
            <img src={closeButton} alt="close tab" className="w-6 " />
          </button>
        </div>
        <hr />
        <div className="p-2 flex flex-col gap-4 text-md h-full ">
          <div className="flex flex-col gap-2">
            {/* <div>
              <img src={homeIcon} alt="home icon" />
            </div> */}
            <div className="flex flex-col gap-2 text-[15px] ">
              <div className="flex items-center gap-2">
                <img src={homeIcon} alt="home icon" />
                <div className="ml-1">
                  <Link
                    to="/"
                    className=" hover:underline mt-1"
                    onClick={closeTab}
                  >
                    홈페이지
                  </Link>
                </div>
              </div>
            </div>
            {/* <hr className="" /> */}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 text-[15px] ">
              <div className="flex items-start  gap-2">
                <img src={gamesIcon} alt="game icon" />
                <div className="flex flex-col gap-3 ml-1">
                  <Link
                    to="/"
                    className="mt-1 hover:underline"
                    onClick={closeTab}
                  >
                    경기 매칭
                  </Link>
                  <Link
                    to="/operate"
                    className="hover:underline"
                    onClick={closeTab}
                  >
                    경기 호스팅
                  </Link>
                  <Link
                    to="/operate"
                    className="hover:underline"
                    onClick={closeTab}
                  >
                    참여중인 경기
                  </Link>
                </div>
              </div>
            </div>
            {/* <hr className="" /> */}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2 text-[15px] ">
              <div className="flex items-start  gap-2">
                <img src={profileIcon} alt="profile icon" />
                <div className="flex flex-col gap-3 ml-1">
                  {isLoggedIn ? (
                    <Link
                      to="/profile"
                      className="hover:underline"
                      onClick={closeTab}
                    >
                      마이페이지
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="hover:underline"
                        onClick={closeTab}
                      >
                        로그인
                      </Link>
                      <Link
                        to="/signup"
                        className="hover:underline"
                        onClick={closeTab}
                      >
                        회원가입
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* <hr className="" /> */}
          </div>

          {/* <div>
            <img src={profileIcon} alt="profile icon" />
          </div> */}
        </div>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="text-red-400">
            로그아웃
          </button>
        ) : (
          <Link onClick={closeTab} to="/login" className="text-center">
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};
