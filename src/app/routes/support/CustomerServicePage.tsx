import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import { Link } from "react-router-dom";
import { UserInquiryBox } from "../../../components/support/UserInquiryBox";
import { useGetQuestionsQuery } from "../../../hooks/support/useGetQuestionsQuery";
import { NoListFoundMessageBox } from "../../../components/common/NoListFoundMessageBox";

export interface QuestionDataProp {
  created_at: string;
  id: number;
  modified_at: string;
  num_of_answers: number;
  title: string;
}

export const CustomerServicePage = () => {
  const { data: questionsData } = useGetQuestionsQuery();

  return (
    <section className="laptop:mt-[15px] laptop:mb-[100px]  mobile:my-0">
      <NavigateToPrevContainer children="고객센터" />
      <div className="flex flex-col gap-[15px] laptop:w-[495px] min-h-[700px]   mobile:w-full mx-auto   laptop:py-10 laptop:px-6 mobile:p-4 rounded-lg">
        <h1 className="mobile:hidden tablet:block font-bold text-[26px] ">
          고객센터
        </h1>
        <Link to="/user/inquiry">
          <button className="h-[48px] w-full border border-gray-200  rounded-lg font-bold">
            문의하기
          </button>
        </Link>
        <h2 className="text-[20px] font-[600]">나의 문의 내역</h2>

        <div
          style={{ scrollbarWidth: "thin" }}
          className="space-y-3 overflow-y-auto max-h-[500px]"
        >
          {questionsData?.data.page_content.length !== 0 ? (
            questionsData?.data.page_content.map(
              (question: QuestionDataProp) => (
                <UserInquiryBox key={question.id} question={question} />
              )
            )
          ) : (
            <NoListFoundMessageBox
              title="문의 내역이 없습니다."
              content="문의하기를 통해 피드백을 작성해보세요!"
            />
          )}
        </div>
      </div>
    </section>
  );
};
