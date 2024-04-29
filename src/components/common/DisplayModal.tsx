import Modal from "react-modal";

interface ModalProp {
  modal: boolean;
  closeModal: () => void;
  title: string;
  titleTwo?: string;
  content: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const DisplayModal = ({
  modal,
  closeModal,
  title,
  titleTwo,
  content,
}: ModalProp) => {
  return (
    <Modal
      isOpen={modal}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className=" w-[348px] h-[166px] p-4 flex flex-col justify-between rounded-lg">
        <h1 className="text-[18px] font-bold">로그인 실패</h1>
        <div>
          <h2 className=" ">{title}</h2>
          <h2 className=" ">{titleTwo}</h2>
        </div>

        <button
          onClick={closeModal}
          className="bg-[#4065F6] font-bold text-white w-full h-[34px] rounded-lg"
        >
          {content}
        </button>
      </div>
    </Modal>
  );
};
