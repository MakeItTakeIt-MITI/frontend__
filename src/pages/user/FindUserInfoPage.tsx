import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { FindEmailAuthCode } from "../../components/forms/EmailAuthCodeForm";
import { FindEmailForm } from "../../components/forms/FindEmailForm";
import { ResetPasswordForm } from "../../components/forms/ResetPasswordForm";

export const FindUserInfoPage = () => {
  return (
    <>
      <NavigateToPrevContainer />
      <div className="flex flex-col gap-10  w-full tablet:px-[13rem] mx-auto tablet:my-14 mobile:p-4  max-w-[90rem] tablet:mb-4 mobile:mb-16">
        <h1 className="text-2xl font-bold"> 이메일 및 비밀번호 찾기</h1>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className=" text-lg text-[#999]">
              휴대폰 인증 후 이메일을 안내해 드립니다.
            </h2>
            <FindEmailForm />
            <FindEmailAuthCode />
          </div>

          <div className="flex flex-col gap-6 ">
            <h2 className="text-lg text-[#999]">
              이메일로 비밀번호 재설정 링크가 전송됩니다.
            </h2>
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </>
  );
};
