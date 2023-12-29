import { useState } from "react";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm<LoginField>();
  const [loginState, setLoginState] = useState(true);

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
      setLoginState(true);
      localStorage.setItem("accessToken", accessToken);
      console.log(response);

      // You can perform further actions here, e.g., redirect to another page
    } else {
      console.log("Login failed");
      setLoginState(false);
      // Handle unsuccessful login, e.g., show an error message
    }
  };
  return (
    <form
      className="flex flex-col gap-4 mobile:text-[12px] tablet:text-[16px] "
      onSubmit={handleSubmit(onSubmit)}
    >
      {!loginState && (
        <p className="text-center text-red-500">
          로그인 실패. 이메일 또는 비밀번호 확인해주세요.
        </p>
      )}
      <input
        className="mobile:w-[250px] mobile:mx-auto tablet:w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="email"
        placeholder="이메일"
        {...register("email", {
          required: true,
        })}
      />
      <input
        className="mobile:w-[250px]  mobile:mx-auto tablet:w-[350px] h-[35px] bg-[#F3F5F7] rounded-lg border border-gray-200 p-2"
        type="password"
        placeholder="비밀번호"
        {...register("password", {
          required: true,
        })}
      />
      <button className="bg-[#4065F6] mobile:w-[250px]  mobile:mx-auto tablet:w-[350px]  text-white p-[0.5rem] rounded-lg	">
        로그인
      </button>
    </form>
  );
};
