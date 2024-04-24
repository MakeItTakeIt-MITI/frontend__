import { useState } from "react";
import { DisplayModal } from "../../components/common/DisplayModal";
import { GameHostForm } from "../../components/forms/GameHostForm";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

export const HostGamePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavigateToPrevContainer children="경기 생성하기" />

      <div className="relative laptop:w-[500px]  pb-[80px]   laptop:min-h-[735px] mobile:h-full   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-8 laptop:px-9 mobile:px-4 py-9 rounded-lg flex flex-col laptop:justify-center gap-10 mobile:justify-between">
        {showModal && (
          <DisplayModal
            modal={showModal}
            closeModal={handleCloseModal}
            title="ss"
            content="확인"
          />
        )}
        <div className="flex flex-col gap-6">
          <h4 className="font-bold  text-lg">경기 정보</h4>
          <GameHostForm setShowModal={setShowModal} />
        </div>
      </div>
    </>
  );
};
