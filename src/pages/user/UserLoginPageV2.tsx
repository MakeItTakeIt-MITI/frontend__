import MITI_Logo from "../../assets/MITI_logo.svg";

export const UserLoginPageV2 = () => {
  return (
    <div className="w-[496px] h-[735px] mt-[61px] flex justify-center mx-auto border border-gray-200 rounded-xl">
      <div className="px-6 pt-[76px] pb-[19px]">
        <div>
          <img src={MITI_Logo} alt="MITI Logo" />
        </div>

        <div className="">
          <div className="flex">
            <label htmlFor="">이메일</label>
            <input type="text" className="bg-input" />
          </div>
          <div className="flex">
            <label htmlFor="">비밀번호</label>
            <input type="text" className="bg-input" />
          </div>
        </div>
        <button className="bg-disabled">로그인</button>
      </div>
    </div>
  );
};
