import { SignupForm } from "../../components/forms/SignupForm";
import mitiLogo from "../../assets/MITI_logo.svg";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

export const UserSignup = () => {
  return (
    <section className="laptop:mt-4 mobile:mt-0 h-full ">
      <NavigateToPrevContainer children="회원가입" />
      <div className="relative laptop:w-[500px]  min-h-[735px] pb-[80px]   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col laptop:justify-center gap-10 mobile:justify-between">
        <div className="">
          <div
            role="miti-logo"
            className="mb-[36px] flex flex-col items-center gap-2"
          >
            <img src={mitiLogo} alt="miti logo" className="w-[88px]" />
            <h5 className="text-[14px] text-[#1c1c1c]">Make it, Take it!</h5>
          </div>
          <SignupForm />
        </div>
      </div>
    </section>
  );
};
