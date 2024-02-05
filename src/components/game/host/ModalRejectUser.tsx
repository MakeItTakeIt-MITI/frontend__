interface ModalRejectProp {
  title: string;
  mainContext: string;
  buttonContext: string;
}
export const ModalRejectUser = ({
  title,
  mainContext,
  buttonContext,
}: ModalRejectProp) => {
  return (
    <div
      style={{ height: "236px" }}
      className="h-[236px] border border-gray-400 rounded-lg "
    >
      <div className="p-4 flex  flex-col justify-between h-full items-center text-[14px] ">
        <h4 className="font-bold text-[16px]">{title}</h4>
        <p>{mainContext}</p>
        <div className="w-full flex gap-2 text-center rounded-lg h-[50px] ">
          <button className="w-full bg-[#4065F6] text-white rounded-lg">
            {buttonContext}
          </button>
        </div>
      </div>
    </div>
  );
};
