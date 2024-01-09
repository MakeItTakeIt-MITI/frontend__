import { useForm } from "react-hook-form";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import close from "../../assets/clarity_eye-hide-line.svg";
import open from "../../assets/clarity_eye-show-line.svg";
import { useState } from "react";

interface LoginField {
  email: string;
  password: string;
  token?: string;
  access_token?: string;
  refresh_token?: string;
  data?: () => void;
}

const testData = [
  {
    id: 1,
    email: "test@test.co",
    password: "Test123!@#",
    nickname: "TestUser",
  },
  {
    id: 2,
    email: "test2@test.co",
    password: "Test123!@#",
    nickname: "TestUser2",
  },
];

export const LoginForm = () => {
  const [displayPassword, setDisplayPassword] = useState(false);
  const { register, handleSubmit } = useForm<LoginField>();
  const { login, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleDisplayPassword = () => setDisplayPassword(!displayPassword);

  const onSubmit = (data: LoginField) => {
    const user = testData.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      console.log("Login successful", user);
      const accessToken = "a1r1eagtatgt32tg32g32g23g2g";
      const refreshToken = "basgasg3gg32g23g2g2g22g2";
      const response = {
        status_code: 200,
        message: "OK",
        data: {
          user: {
            id: user.id,
            email: user.email,
            nickname: user.nickname,
          },
          token: {
            access: accessToken,
            refresh: refreshToken,
          },
        },
      };
      // setLoginState(true);
      localStorage.setItem("accessToken", accessToken);
      login();
      console.log(response);
      navigate("/");

      // You can perform further actions here, e.g., redirect to another page
    } else {
      console.log("Login failed");
      logout();
      // setLoginState(false);
      // Handle unsuccessful login, e.g., show an error message
    }
  };
  return (
    <form
      className="flex flex-col gap-6  w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[12px] text-[#1c1c1c]">
          이메일
        </label>
        <input
          type="email"
          id="email"
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-[12px] text-[#1c1c1c]">
          비밀번호
        </label>
        <div className="relative">
          <input
            type={`${displayPassword ? "text" : "password"}`}
            id="password"
            className="h-[58px] p-4 bg-[#F7F7F7] rounded-lg w-full pr-10"
            placeholder="8자리 이상의 PW를 입력해주세요."
            {...register("password", {
              required: true,
            })}
          />
          <button onClick={handleDisplayPassword}>
            <img
              src={`${displayPassword ? open : close}`}
              alt="hide password"
              className="w-[24px] absolute right-2 top-4 cursor-pointer "
            />
          </button>
        </div>
      </div>
      <button className=" h-[58px] p-4 bg-[#4065F6] rounded-lg text-white">
        로그인 하기
      </button>
    </form>
  );
};
