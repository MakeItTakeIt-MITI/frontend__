import { Link } from "react-router-dom";

export const NotVerifiedUserPage = () => {
  return (
    <section className="laptop:my-4 mobile:my-0 h-full ">
      <div className=" laptop:w-[500px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col gap-6  justify-between">
        <div className="h-full w-full flex items-center flex-col justify-center my-auto">
          <h1 className="font-bold text-[24px]">❗️사용자 인증 미완료</h1>
          <p className="text-[#333] font-[400]">
            휴대전화번호를 통해 사용자 인증을 완료하시길 바랍니다.
          </p>
        </div>
        <Link
          to="/auth/authenticate-user-info"
          className="h-11 bg-[#4065F6] text-white flex items-center justify-center rounded-lg text-[14px]"
        >
          <button>인증하기</button>
        </Link>
      </div>
      ;
    </section>
  );
};
