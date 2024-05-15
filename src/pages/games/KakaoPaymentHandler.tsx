import { useEffect } from "react";
import { useKakaoPayApprovedMutation } from "../../hooks/payments/useKakaoPayApprovedMutation";
import { Link } from "react-router-dom";
import { LoadingPage } from "../LoadingPage";
import { NotFoundPage } from "../NotFoundPage";
import { AlertModal } from "../../components/common/AlertModal";
import {
  KakaoPayFailureToJoin,
  KakaoPaymentFailure,
} from "../../stories/Modal.stories";

export const KakaoPaymentHandler = () => {
  const payment_request_id = new URL(
    document.location.toString()
  ).searchParams.get("payment_request_id");
  const pg_token = new URL(document.location.toString()).searchParams.get(
    "pg_token"
  );

  const { mutate, data, isPending, isError } = useKakaoPayApprovedMutation(
    payment_request_id,
    pg_token
  );
  console.log();

  useEffect(() => {
    mutate();
  }, []);

  if (isPending) {
    return <LoadingPage />;
  }

  if (isError) {
    return <NotFoundPage />;
  }

  return (
    <section className="laptop:my-[69px] mobile:my-0">
      {data?.status_code === 403 && (
        <AlertModal {...KakaoPayFailureToJoin.args} />
      )}
      {data?.status_code === 500 && (
        <AlertModal {...KakaoPaymentFailure.args} />
      )}
      {data?.status_code === 201 && (
        <div className=" bg-[#E2F1FF] relative laptop:w-[495px]  laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto mobile:py-8    mobile:px-4 laptop:py-[50px] laptop:px-[76px] rounded-lg flex flex-col laptop:justify-center mobile:gap-0 laptop:gap-[35px] mobile:justify-between">
          <div className="z-99 flex flex-col items-center justify-center gap-2 w-full">
            <h1 className="font-bold text-[24px]">🎉 매치 참여 완료!</h1>
            <p className="text-[14px]">아래에서 경기 정보를 확인하세요</p>
          </div>

          <div className="absolute bottom-[74px] left-[76px] right-[76px]">
            <Link
              to="/"
              className="   w-full h-[48px] text-white bg-[#4065F5] flex items-center justify-center rounded-lg"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};
