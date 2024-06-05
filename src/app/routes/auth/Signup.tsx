import mitiLogo from "../../../assets/MITI_logo.svg";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { AuthLayout } from "../../../components/layouts/AuthLayout";
import { SignupForm } from "../../../components/ui/forms/SignupForm";

export const Signup = () => {
  return (
    <AuthLayout>
      <NavigateToPrevContainer children="" />
      <div className="relative laptop:w-[495px]  tablet:w-full tablet:px-[9rem] min-h-[735px]  mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-[50px] laptop:px-[76px] mobile:px-4 mobile:pt-9 mobile:pb-20 rounded-lg flex flex-col laptop:justify-center gap-[35px] mobile:justify-between">
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
    </AuthLayout>
  );
};
