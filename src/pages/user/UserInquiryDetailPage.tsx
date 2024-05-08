import { useParams } from "react-router-dom";
import { useGetQuestionDetailQuery } from "../../hooks/support/useGetQuestionDetailQuery";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

export const UserInquiryDetailPage = () => {
  const { id } = useParams();
  const inquiryId = Number(id);
  const { data } = useGetQuestionDetailQuery(inquiryId);
  console.log(data);

  return (
    <section className="laptop:my-4 mobile:my-0">
      <NavigateToPrevContainer children="고객센터" />
      <div className="flex flex-col gap-4 laptop:w-[500px] min-h-[735px]   mobile:w-full mx-auto laptop:border laptop:border-gray-300  laptop:py-10 laptop:px-6 mobile:p-4 rounded-lg">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          content :{data?.data.content}
        </h1>
        <p>title: {data?.data.title}</p>
        <p>created : {data?.data.created_at}</p>
        <div className="py-5 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[20px] font-bold">나의 문의 내역</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
