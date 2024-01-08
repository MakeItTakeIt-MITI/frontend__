import { Link } from "react-router-dom";

export const MatchSubmittedPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col bg-[#E2F1FF] h-[200px]">
        <p className="font-bold text-[24px]">🎉 매치 참가 완료!</p>
        <p className="text-[#333]">아래에서 경기 정보를 확인하세요</p>
      </div>
      <div className=" flex flex-col gap-4 px-4 py-[40px]">
        <h4 className="font-bold">매치 참가 신청 이후 일정</h4>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h5 className="font-bold">매치 비용 입금하기</h5>
            <p className="text-[14px] text-[#666]">
              안내드린 예금주의 계좌번호로 매치 참가 비용을 입금해주세요. 입금
              후 최대 48시간 이후에도 호스트에게 연락이 오지 않는다면
              ‘문의하기’를 통해 MITI에 문의해주세요.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="font-bold">매치 참가하기</h5>
            <p className="text-[14px]  text-[#666]">
              일정에 맞게 경기장으로 방문 후 즐겁게 경기를 즐기세요! 혹시나 매치
              장소와 일정이 기억나시지 않는다면 참가 내역에서 언제든지 다시 확인
              할 수 있어요.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="font-bold">매치 리뷰 남기기</h5>
            <p className="text-[14px]  text-[#666]">
              즐겁게 매치를 즐기셨다면, 매치 리뷰를 남겨주세요. 리뷰는
              호스트에게도, MITI에게도 큰 도움이 됩니다!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 mx-auto">
        <Link to="/">
          <button className=" rounded-lg bg-[#4065F6] h-[48px] w-full text-white">
            메인 화면으로
          </button>
        </Link>
      </div>
    </div>
  );
};
