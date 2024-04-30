export interface PopModalProps {
  // openModal: boolean;
  // closeModal: () => void;
  title: string;
  context: string;
  contextTwo: string;
  buttonContext: string;
}

export const AlertModal: React.FC<PopModalProps> = ({
  // openModal,
  // closeModal,
  title,
  context,
  contextTwo,
  buttonContext,
}) => {
  return (
    // <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-black">
    <div className="border border-gray-300 w-[348px] h-[166px] bg-white flex flex-col gap-4 p-4 justify-center rounded-lg">
      <h1 className="font-bold text-[18px]">{title}</h1>
      <div className="text-[14px]">
        <p>{context}</p>
        <p>{contextTwo}</p>
      </div>
      <button
        // onClick={closeModal}
        className="bg-[#4065F5] rounded-sm text-white h-[34px] text-[14px]"
      >
        {buttonContext}
      </button>
    </div>
    // </div>
  );
};
