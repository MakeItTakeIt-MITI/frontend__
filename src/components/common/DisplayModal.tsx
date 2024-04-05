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
      <div className="w-[361px] h-[185px] p-6 flex flex-col justify-between rounded-lg">
        <div>
          <h1 className=" text-center font-bold">{title}</h1>
          <h1 className=" text-center font-bold">{titleTwo}</h1>
        </div>
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
