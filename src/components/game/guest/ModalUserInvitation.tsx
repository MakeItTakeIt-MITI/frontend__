interface ModalInviteProp {
  hostName: string;
  titleContextOne: string;
  titleContextTwo: string;
  mainContext: string;
  buttonContextOne: string;
  buttonContextTwo: string;
}

export const ModalUserInvitation = ({
  hostName,
  titleContextOne,
  titleContextTwo,
  mainContext,
  buttonContextOne,
  buttonContextTwo,
}: ModalInviteProp) => {
  return (
    <div
      style={{ height: "236px" }}
      className="border border-gray-400 rounded-lg "
    >
      <div className="py-6 flex flex-col justify-between px-4 h-full  text-[14px] ">
        <div className="text-center text-[16px]">
          <span className="font-bold ">{hostName}</span>
          <span>{titleContextOne}</span>
          <h4 className=" text-[16px]">{titleContextTwo}</h4>
        </div>

        <p className="text-[14px] px-11  text-[#333]">{mainContext}</p>

        <div className="w-full text-[14px]   flex gap-2 text-center rounded-lg h-[50px] ">
          <button className="w-full bg-[#F7F7F7]  font-bold  rounded-lg">
            {buttonContextOne}
          </button>
          <button className="w-full bg-[#4065F6] font-bold text-white rounded-lg">
            {buttonContextTwo}
          </button>
        </div>
      </div>
    </div>
  );
};
