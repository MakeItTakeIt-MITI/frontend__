import { Link } from "react-router-dom";
import rightArrow from "../../assets/Chevron_Right_MD.svg";
import { QuestionDataProp } from "../../app/routes/support/CustomerServicePage";

interface InquiryProp {
  question: QuestionDataProp;
}

export const UserInquiryBox: React.FC<InquiryProp> = ({ question }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const period = hours < 12 ? "오전" : "오후";
    const formattedHours = hours % 12 || 12;

    return `${year}.${month}.${day} ${period} ${formattedHours}시 ${minutes}분`;
  };

  return (
    <Link
      to={`/user/inquiry/detail/${question.id}`}
      className="flex justify-between p-3 border border-gray-200 w-full h-[80px] rounded-lg "
    >
      <div className="flex flex-col max-w-[270px]">
        <h2 className="text-xs truncate">{question.title}</h2>
        <p className="text-[#666] text-[10px]">
          {formatDate(question.created_at)}
        </p>
        <p className="text-[10px]">
          답변 : <span>{question?.num_of_answers}</span> 개
        </p>
      </div>

      <img
        src={rightArrow}
        alt=""
        className="text-black size-6 flex items-center justify-center h-full"
      />
    </Link>
  );
};
