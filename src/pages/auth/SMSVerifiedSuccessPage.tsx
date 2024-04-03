import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <section className="laptop:my-4 mobile:my-0 h-full ">
      <div className="bg-[#E2F1FF] laptop:w-[500px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-6  justify-between">
        <div className="h-full w-full flex items-center flex-col justify-center my-auto">
          <h1 className="font-bold text-[24px]">🎉 사용자 인증 완료!</h1>
          <p className="text-[#333] font-[400]">
            로그인을 완료하고 MITI를 사용해보세요.
          </p>
        </div>
        <Link
          onClick={handleRemoveAuthCode}
          to="/auth/login"
          className="h-11 bg-[#4065F6] text-white flex items-center justify-center rounded-lg text-[14px]"
        >
          <button>로그인하기</button>
        </Link>
      </div>
      ;
    </section>
  );
};
