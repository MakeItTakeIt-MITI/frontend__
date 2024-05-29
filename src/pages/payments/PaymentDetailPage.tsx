// import { useParams } from "react-router-dom";
import { GameDetailBox } from "../../components/GameDetailBox";
import { GameTotalPaymentBox } from "../../components/GameTotalPaymentBox";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { ParticipantsPaymentStatusBox } from "../../components/ParticipantsPaymentStatusBox";

export const PaymentDetailPage = () => {
  //   const { settlement_id } = useParams();

  const detailData = {
    status_code: 200,
    message: "OK",
    data: {
      id: 11,
      amount: 0,
      status: "waiting",
      game: {
        id: 63,
        host: {
          id: 9,
          nickname: "miti super user",
          rating: {
            id: 2,
            num_of_reviews: 3,
            average_rating: 5.0,
          },
          reviews: [
            {
              id: 7,
              reviewee_nickname: "miti super user",
              rating: 5,
              comment: "음료수를 준비해주셨어요!",
              review_type: "host_review",
              reviewer_nickname: "testuser1",
            },
            // Add more reviews here if needed
          ],
        },
        court: {
          id: 7,
          address: "인천 동구 보세로 65 B동",
          address_detail: "왼측 건물",
          name: "농구연구소",
          info: null,
          latitude: "37.4854719147071",
          longitude: "126.617237911346",
        },
        game_status: "completed",
        title: "MITI 픽업게임",
        startdate: "2024-04-22",
        starttime: "17:00:00",
        enddate: "2024-04-22",
        endtime: "17:10:00",
        min_invitation: 1,
        max_invitation: 2,
        info: "주차 가능합니다. 실내화를 착용해주세요.",
        fee: 10000,
        created_at: "2024-04-22T14:43:27.593488",
        modified_at: "2024-04-22T14:43:27.593496",
        confirmed_participations: [
          {
            id: 56,
            nickname: "testuser1",
            participation_status: "confirmed",
          },
          // Add more confirmed participations here if needed
        ],
        num_of_confirmed_participations: 0,
      },
      participations: [
        {
          id: 56,
          nickname: "testuser1",
          fee: 10000,
          is_settled: false,
        },
        // Add more participations here if needed
      ],
      commission: 0,
      final_settlement_amount: 0,
    },
  };

  return (
    <section className="laptop:mt-[15px] laptop:mb-[38px]  mobile:my-0">
      <NavigateToPrevContainer children="정산 내역" />
      <div className="mx-auto w-[914px] max-h-[734px] space-y-5">
        <h1 className="text-[26px] font-bold">정산 내역</h1>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <GameDetailBox detailData={detailData} />
            <GameTotalPaymentBox detailData={detailData} />
          </div>
          <ParticipantsPaymentStatusBox detailData={detailData} />
        </div>
      </div>
    </section>
  );
};
