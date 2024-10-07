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
        <h2 className="md:text-lg sm:text-sm font-normal">{inquiry.title}</h2>
        <p className="md:text-sm sm:text-[10px] text-white font-[300] ">
          {`${inquiry.created_at.slice(0, 4)}년 ${inquiry.created_at.slice(5, 7).padStart(2, "0")}월 ${inquiry.created_at.slice(8, 10).padStart(2, "0")}일`}
        </p>
      </div>
      <hr className="w-full h-[1px] text-[#525252]" />
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default ListCard;
