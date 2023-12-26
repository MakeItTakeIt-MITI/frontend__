import { NavLink } from "react-router-dom";
import { SignupForm } from "../components/auth/SignupForm";

export const UserSignup = () => {
  return (
    <div className="flex flex-col gap-4 mobile:my-[2rem]">
      <h1 className="text-center font-bold text-2xl ">회원가입</h1>
      <SignupForm />
      <div className="text-center">
        <p className=" text-gray-600">
          이미 회원이신가요?{" "}
          <NavLink
            to="/login"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            로그인
          </NavLink>
        </p>
      </div>
      {/* <hr className="" /> */}
      {/* <KakaoLoginButton /> */}
    </div>
  );
};
