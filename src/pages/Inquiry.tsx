import { useState } from "react";
import open from "../assets/v11/display-password.svg";
import close from "../assets/v11/hide-password.svg";
import Footer from "../components/common/Footer";

import { useForm, SubmitHandler } from "react-hook-form";
import { PrivateInquiryField } from "../interfaces/support";

const Inquiry = () => {
  const [displayPassword, setDisplayPassword] = useState(false);

  const {
    register,
    handleSubmit,

    // formState: { errors },
  } = useForm<PrivateInquiryField>();

  const onSubmit: SubmitHandler<PrivateInquiryField> = (data) =>
    console.log(data);

  const handleTogglePassword = () => setDisplayPassword(!displayPassword);
  return (
    <section className="bg-secondary-black  pt-[3.75rem]  space-y-[100px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[767px] space-y-[42px] mx-auto"
      >
        {/* title */}
        <div className="space-y-5">
          <h1 className="text-white text-[32px] font-semibold  leading-loose">
            문의하기
          </h1>
          <p className="text-white text-xl font-normal  leading-tight">
            서비스 이용에 어려움이 있다면 문의를 작성해주세요!
          </p>
        </div>
        {/* description2 */}
        <div className="space-y-[20px]">
          <p className="h-[54px] text-white text-sm font-normal leading-[21px]">
            계정과 관련된 문의라면 “계정 문의 (로그인, 인증, 제재, 탈퇴, 신고
            등)” 내용을 문의 내용에 작성해주세요. 자세히 작성 할수록 정확한
            답변이 가능합니다.
          </p>
          <div className="flex gap-5 h-[64px] text-lg font-normal leading-[18px] text-primary-white">
            <input
              {...register("title")}
              autoComplete="off"
              placeholder="문의의 제목을 입력해주세요."
              type="text"
              className="w-full p-5 border border-[#737373] bg-secondary-black rounded-[10px]"
            />
            <div className="relative ">
              {" "}
              <input
                {...register("password")}
                autoComplete="new-password"
                placeholder="비밀번호"
                type={displayPassword ? "text" : "password"}
                className="  bg-secondary-black border border-[#737373] p-5  rounded-[10px]"
              />
              <button onClick={handleTogglePassword}>
                <img
                  src={displayPassword ? open : close}
                  alt="show password"
                  className=" absolute right-5 top-0 bottom-0 my-auto "
                />
              </button>
            </div>
          </div>
        </div>

        {/* inquiry */}
        <textarea
          {...register("content")}
          style={{
            resize: "none",
          }}
          placeholder="문의 내용을 입력해주세요."
          className="w-full h-[262px] border border-[#737373] p-5 text-[18px] font-[400] rounded-[10px] bg-secondary-black text-primary-white"
        />

        <hr className="text-[#525252] w-full" />

        {/* 안내사항 */}
        <div className="space-y-[10px] text-primary-white ">
          <h2 className="h-[30px] text-xl font-bold font-['Pretendard'] leading-tight">
            안내사항
          </h2>
          <ul className="list-disc pl-5 custom-dotted-list space-y-[5px] font-medium leading-none">
            <li>답변에는 시간이 소요됩니다. 조금만 기다려주세요!</li>
            <li>
              문의 내용을 상세히 작성해주시면 더욱 정확한 답변이 가능합니다.
            </li>
            <li>욕설이나 비방이 담긴 문의에는 답변이 작성되지 않습니다.</li>
          </ul>
        </div>

        <button
          type="submit"
          className="w-full h-[48px]  text-[#f4f4f4] bg-[#737373] rounded-lg"
        >
          작성하기
        </button>
      </form>
      <Footer />
    </section>
  );
};

export default Inquiry;
