export const NotFoundPage = () => {
  return (
    <div className="h-screen  flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-5  font-bold">
        <h1 className="text-[112px] ">404</h1>
        <div className="text-center">
          <p className="font-bold text-[22px]">
            요청하신 페이지를 찾을 수 없습니다.
          </p>
          <p className="font-bold text-[22px]">관리자에게 문의해주세요.</p>
        </div>
      </div>
    </div>
  );
};
