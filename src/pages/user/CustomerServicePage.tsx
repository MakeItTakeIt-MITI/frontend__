import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { Link } from "react-router-dom";
import { UserInquiryBox } from "../../components/support/UserInquiryBox";
import { useGetQuestionsQuery } from "../../hooks/support/useGetQuestionsQuery";

export interface QuestionDataProp {
  created_at: string;
  id: number;
  modified_at: string;
  num_of_answers: number;
  title: string;
}

export const CustomerServicePage = () => {
  const { data: questionsData } = useGetQuestionsQuery();
  console.log(questionsData?.data.page_content);

  return (
    <section className="laptop:my-4 mobile:my-0">
      <NavigateToPrevContainer children="고객센터" />
      <div className="flex flex-col gap-4 laptop:w-[500px] min-h-[735px]   mobile:w-full mx-auto laptop:border laptop:border-gray-300  laptop:py-10 laptop:px-6 mobile:p-4 rounded-lg">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          고객센터
        </h1>

        <div className="py-5 flex flex-col gap-4">
          <Link to="/user-inquiry">
            <button className="h-[48px] w-full border border-gray-300  rounded-lg font-bold">
              문의하기
            </button>
          </Link>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[20px] font-bold">나의 문의 내역</h2>
            {questionsData?.data.page_content.map(
              (question: QuestionDataProp) => (
                <UserInquiryBox key={question.id} question={question} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
