import { Link } from "react-router-dom";
import rightArrow from "../../assets/Chevron_Right_MD.svg";
import { QuestionDataProp } from "../../pages/user/CustomerServicePage";

interface InquiryProp {
  question: QuestionDataProp;
}

export const UserInquiryBox: React.FC<InquiryProp> = ({ question }) => {
  return (
    <Link
      to={`/user/inquries/detail/${question.id}`}
      className=" w-full p-4 flex justify-between items-center  rounded-xl border border-gray-300"
    >
      <div className="flex flex-col gap-1 max-w-[90%]">
        <h2 className="truncate">{question?.title}</h2>
        <p className="text-[#666]">{question?.created_at}</p>
        <p>
          답변 : <span>{question?.num_of_answers}</span> 개
        </p>
      </div>

      <img src={rightArrow} alt="" className="text-black " />
    </Link>
  );
};
