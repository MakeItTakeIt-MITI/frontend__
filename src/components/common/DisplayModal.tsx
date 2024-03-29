import Modal from "react-modal";

interface ModalProp {
  modal: boolean;
  closeModal: () => void;
  title: string;
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
  content,
}: ModalProp) => {
  return (
    <Modal
      isOpen={modal}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="w-[361px] h-[185px] p-4 flex flex-col justify-between rounded-lg">
        <h1 className="p-8 text-center font-bold">{title}</h1>
        <div className="flex justify-center">
          <button
            onClick={closeModal}
            className="bg-[#4065F6] text-white w-[100px] h-[36px] rounded-lg"
          >
            {content}
          </button>
        </div>
      </div>
    </Modal>
  );
};
