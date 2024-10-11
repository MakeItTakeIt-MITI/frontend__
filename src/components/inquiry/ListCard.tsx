import { useState } from "react";
import Modal from "./Modal";
import { InquiryListField } from "../../interfaces/support";

interface ListCardProps {
  inquiry: InquiryListField;
}

const ListCard = ({ inquiry }: ListCardProps) => {
  const [modal, setModal] = useState(false);

  const handleDisplayModal = () => setModal(true);
  return (
    <>
      <div
        onClick={handleDisplayModal}
        className="flex justify-between items-center text-white px-2.5 cursor-pointer"
      >
        <div className="flex items-center gap-[3rem]">
          <p className="text-sm font-[300 ]">
            {`${inquiry.created_at.slice(0, 4)}년 ${inquiry.created_at.slice(5, 7).padStart(2, "0")}월 ${inquiry.created_at.slice(8, 10).padStart(2, "0")}일`}
          </p>

          <div className="flex items-center gap-[.3rem]">
            {inquiry.num_of_answers > 0 && (
              <p className="bg-[#7FEEF0] text-[#000] w-[50px] h-[21px] flex items-center justify-center text-[10px] font-[300] rounded-[100px]">
                답변완료
              </p>
            )}
            <p className="text-[18px] font-[400]">{inquiry.title}</p>
          </div>
        </div>

        <p className="text-sm font-[300] truncate w-[109px] ">
          {inquiry.nickname}
        </p>
      </div>
      <hr className="w-full h-[1px] text-[#525252]" />
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default ListCard;
