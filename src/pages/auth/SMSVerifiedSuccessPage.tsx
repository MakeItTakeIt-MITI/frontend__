import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { SuccessBadgeContainer } from "../../components/common/SuccessBadgeContainer";
import { SubmitButton } from "../../components/ui/buttons/SubmitButton";
import { Active } from "../../components/ui/buttons/Button.stories";

export const SMSVerifiedSuccessPage = () => {
  const navigate = useNavigate();
  const authentication_token = localStorage.getItem("authentication_token");

  const handleRemoveAuthCode = () => {
    localStorage.removeItem("authentication_token");
  };

  useEffect(() => {
    if (!authentication_token) {
      navigate("/");
    }
  }, []);
  return (
    <section className="laptop:my-[69px] mobile:m-0">
      <NavigateToPrevContainer children="" />
      <div className="relative laptop:w-[500px]  laptop:min-h-[735px] h-full    mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 mobile:py-4 rounded-lg flex flex-col laptop:justify-center  gap-6  mobile:justify-between">
        <SuccessBadgeContainer
          title="사용자 인증 완료"
          context_one="사용자 인증이 완료되었어요!"
          context_two="로그인을 통해 경기에 참여해보세요!"
        />
        <div className="laptop:absolute   bottom-0 left-0 right-0 laptop:px-[76px]   laptop:pb-[74px] mobile:pb-0">
          <Link to="/auth/login">
            <SubmitButton
              onClick={handleRemoveAuthCode}
              children="로그인하기"
              {...Active.args}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
