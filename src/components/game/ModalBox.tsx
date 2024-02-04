interface ModalProp {
  title: string;
  body: string;
  buttonTextOne: string;
}
export const ModalBox = ({
  title,
  body,
  buttonTextOne,
}: //   buttonTextTwo,
ModalProp) => {
  return (
    <div
      style={{ height: "236px" }}
      className="h-[236px] bg-[#F8F8F8] border border-gray-600 "
    >
      <div className="p-4 flex  flex-col justify-between h-full items-center text-[14px] ">
        <h4 className="font-bold text-[16px]">{title}</h4>
        <p>{body}</p>
        <div className="flex justify-center w-full  bg-[#4065F6] text-center text-white rounded-lg h-[50px] ">
          <button>{buttonTextOne}</button>
          {/* {buttonTextTwo && <button>{buttonTextTwo}</button>} */}
        </div>
      </div>
    </div>
  );
};
