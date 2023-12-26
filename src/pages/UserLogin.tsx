import { NavLink } from "react-router-dom";
import { LoginForm } from "../components/auth/LoginForm";

export const UserLogin = () => {
  return (
    <div className="flex flex-col gap-4 mobile:my-[2rem]">
      <h1 className="text-center font-bold text-2xl ">로그인</h1>
      <LoginForm />
      <div className="text-center">
        <p className=" text-gray-600  hover:underline cursor-pointer">
          아이디/비밀번호를 잊으셨나요?
        </p>
        <p className=" text-gray-600">
          계정이 없으신가요?{" "}
          <NavLink
            to="/signup"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            회원가입
          </NavLink>
        </p>
      </div>
      {/* <hr className="" /> */}
      {/* <KakaoLoginButton /> */}
    </div>
  );
};
