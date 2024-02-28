import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { EmailAuthCodeForm } from "../../components/forms/EmailAuthCodeForm";
import { FindEmailForm } from "../../components/forms/FindEmailForm";

export const FindUserInfoPage = () => {
  return (
    <>
      <NavigateToPrevContainer />
      <div className="flex flex-col gap-10  w-full tablet:px-[13rem] mx-auto tablet:my-14 mobile:p-4  max-w-[90rem] tablet:mb-4 mobile:mb-16">
        <h1 className="text-2xl font-bold"> 이메일 및 비밀번호 찾기</h1>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className=" text-lg text-[#999]">
              휴대폰 인증을 하시면 이메일을 알려드립니다
            </p>
            <FindEmailForm />
            <EmailAuthCodeForm />
          </div>

          <div>
            <p className="text-lg text-[#999]">
              이메일로 비밀번호 초기화가 전달됩니다
            </p>
            {/* <FindEmailForm /> */}
          </div>
        </div>
      </div>
    </>
  );
};
