import { useParams } from "react-router-dom";
import { useGetQuestionDetailQuery } from "../../../hooks/support/useGetQuestionDetailQuery";
import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { NoListFoundMessageBox } from "../../../components/common/NoListFoundMessageBox";

export const UserInquiryDetailPage = () => {
  const { id } = useParams();
  const inquiryId = Number(id);
  const { data: inquiryData } = useGetQuestionDetailQuery(inquiryId);

  return (
    <section className="laptop:mt-[15px] laptop:mb-[257px] mobile:my-0">
      <NavigateToPrevContainer children="고객센터" />
      <div className="space-y-5">
        <div className="w-[495px] mx-auto space-y-3">
          <h1 className="text-[26px] font-bold">문의내역</h1>
          <div className="p-3 border border-gray-200 rounded-lg w-full h-[354px] space-y-3">
            <h2 className="w-full text-sm truncate text-[#000]">
              {inquiryData?.data.title}
            </h2>
            <hr />
            <div className="w-full h-[220px] overflow-y-auto text-[#666] text-xs   leading-[18px]">
              {inquiryData?.data.content}
            </div>
          </div>
        </div>
        <div className="w-[495px] mx-auto space-y-3">
          <h1 className="text-[26px] font-bold">답변</h1>
          {inquiryData?.data.num_of_answers !== 0 ? (
            inquiryData?.data.answers.map(
              (answer: { id: number; content: string; created_at: string }) => {
                return (
                  <div
                    key={answer.id}
                    className="w-[495px] h-[113px] p-3 rounded-lg border border-gray-200 flex-col justify-start items-start gap-3 inline-flex"
                  >
                    <div className="w-[471px] h-[59px] text-stone-500 text-xs leading-[18px]">
                      {answer.content}
                    </div>
                    <div className="w-[471px] h-[18px] text-right text-stone-500 text-xs leading-snug">
                      {answer.created_at}
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <NoListFoundMessageBox title="답변이 아직 작성되지 않았습니다!" />
          )}
        </div>
      </div>
    </section>
  );
};
