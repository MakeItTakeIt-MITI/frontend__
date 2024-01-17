import { useForm } from "react-hook-form";
import { emailSchema, userRegisterSchema } from "../../modals/userSignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterField, ValidationField } from "../../interface/usersInterface";
import axiosUrl from "../../utils/axios";

import { useState } from "react";

export const SignupForm = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [validNickname, setValidNickname] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<RegisterField>({ resolver: zodResolver(userRegisterSchema) });

  const userValidation = async (data: ValidationField) => {
    try {
      const response = await axiosUrl.post("/users/signup-check/", data);

      if (response.data.status_code === 200) {
        console.log(response.data);

        const emailData = response.data.data.email;
        const nicknameData = response.data.data.nickname;

        if (emailData && emailData.is_duplicated === true) {
          setValidEmail(false);
          alert("이미 존재하는 이메일입니다.");
        } else if (emailData && emailData.is_duplicated === false) {
          setValidEmail(true);
          alert("사용 가능한 이메일입니다.");
        } else if (nicknameData && nicknameData.is_duplicated === true) {
          setValidNickname(false);
          alert("이미 존재하는 닉네임입니다.");
        } else if (nicknameData && nicknameData.is_duplicated === false) {
          setValidNickname(true);
          alert("사용 가능한 닉네임입니다.");
        }

        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleValidateEmail = () =>
    userValidation({ email: getValues("email") });

  const handleValidateNick = () =>
    userValidation({ nickname: getValues("nickname") });

  const onSubmit = async (data: RegisterField) => {
    try {
      userRegisterSchema.parse(data);
      // userSignup(data);
      const response = await axiosUrl.post("/users/", data);
      console.log(response.data);
      return response.data;
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6  mobile:w-full tablet:w-[600px]"
    >
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="email" className="text-[12px] text-[#1c1c1c]">
          이메일
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="email"
          id="email"
          disabled={validEmail ? true : false}
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: true,
          })}
        />

        <button
          onClick={
            !validEmail ? handleValidateEmail : () => setValidEmail(false)
          }
          type="button"
          style={
            !validEmail
              ? { backgroundColor: "#4065f6" }
              : { backgroundColor: "#E8E8E8" }
          }
          className="absolute right-2 bottom-2.5 text-[14px] text-white w-[81px] h-[36px] rounded-[8px]"
        >
          {!validEmail ? "중복확인" : "수정하기"}
        </button>
      </div>
      {errors.email?.message && (
        <p className=" text-red-500">{errors.email?.message}</p>
      )}
      {validEmail && (
        <p className="text-green-400 text-[13px] font-[400]">
          사용 가능한 이메일이에요!
        </p>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-[12px] text-[#1c1c1c]">
          비빌번호
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          id="password-check"
          {...register("password", {
            required: true,
          })}
        />
      </div>
      {errors.password?.message && (
        <p className=" text-red-500">{errors.password?.message}</p>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="password_check" className="text-[12px] text-[#1c1c1c]">
          비빌번호 확인
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요."
          id="password_check"
          {...register("password_check", {
            required: true,
          })}
        />
      </div>
      {errors.password_check?.message && (
        <p className=" text-red-500">{errors.password_check?.message}</p>
      )}
      <div className="flex flex-col gap-2 ">
        <label htmlFor="name" className="text-[12px] text-[#1c1c1c]">
          이름
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="text"
          id="name"
          placeholder="이름을 입력해주세요."
          {...register("name", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="nickname" className="text-[12px] text-[#1c1c1c]">
          닉네임
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="text"
          id="nickname"
          disabled={validNickname ? true : false}
          placeholder="닉네임을 입력해주세요."
          {...register("nickname", {
            required: true,
          })}
        />

        <button
          onClick={
            !validNickname ? handleValidateNick : () => setValidNickname(false)
          }
          type="button"
          style={
            !validNickname
              ? { backgroundColor: "#4065f6" }
              : { backgroundColor: "#E8E8E8" }
          }
          className="absolute right-2 bottom-2.5 text-[14px] text-white w-[81px] h-[36px] rounded-[8px]"
        >
          {!validNickname ? "중복확인" : "수정하기"}
        </button>
      </div>
      {errors.nickname?.message && (
        <p className=" text-red-500">{errors.nickname?.message}</p>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="birthday" className="text-[12px] text-[#1c1c1c]">
          생년월일
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="date"
          id="birthday"
          {...register("birthday", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="phone_number" className="text-[12px] text-[#1c1c1c]">
          핸드폰 번호
        </label>
        <input
          className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
          type="number"
          id="phone_number"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          placeholder="번호를 입력해주세요."
          {...register("phone", {
            required: true,
          })}
        />
        {/* <button
          type="button"
          className="absolute right-2 bottom-2.5 text-[14px] text-white bg-[#4065F6] w-[81px] h-[36px] rounded-[8px]"
        >
          인증하기
        </button> */}
      </div>
      {/* <input
        className=" h-[58px] p-4 bg-[#F7F7F7] rounded-lg"
        type="number"
        placeholder="인증번호"
        {...register("confirmation_code", {
          required: true,
        })}
      /> */}
      <button
        // type="submit"
        // disabled={!emailValidation && !nickValidation}
        // style={
        //   !emailValidation
        //     ? { backgroundColor: "#eee" }
        //     : { backgroundColor: "#4065f6" }
        // }
        className=" h-[58px] p-4 bg-[#4065F6] rounded-lg text-white"
      >
        가입하기
      </button>
    </form>
  );
};
