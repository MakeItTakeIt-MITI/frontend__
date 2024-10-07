import { useState } from "react";
import Modal from "./Modal";

const ListCard = () => {
  const [modal, setModal] = useState(false);

  const handleDisplayModal = () => setModal(true);
  return (
    <>
      <div
        onClick={handleDisplayModal}
        className="flex justify-between items-center text-white px-2.5 cursor-pointer"
      >
        <h2 className="text-lg font-normal">익명 문의하기 제목입니다. </h2>
        <p className="text-sm font-light">2024년 10월 11일</p>
      </div>
      <hr className="w-full h-[1px] text-[#525252]" />
      {modal && <Modal setModal={setModal} />}
    </>
  );
};

export default ListCard;
