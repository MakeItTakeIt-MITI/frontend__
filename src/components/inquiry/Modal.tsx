import { useState } from "react";
import hide from "../../assets/v11/display-password.svg";
import open from "../../assets/v11/hide-password.svg";

interface ModalProps {
  setModal: (arg: boolean) => void;
}

const Modal = ({ setModal }: ModalProps) => {
  const [exposePassword, setExposePassword] = useState(false);
  const [, setPassword] = useState("");

  const handleCloseModal = () => setModal(false);

  const togglePasswordVisibility = () => {
    setExposePassword((prev) => !prev);
  };

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 h-full w-full flex items-center justify-center">
      <div className="w-[335px] h-[252px] pt-[30px] px-5 pb-5 bg-dark-card rounded-xl">
        <div className="space-y-3">
          <h1 className="text-[#f0f0f0] text-base font-bold ">비밀번호 입력</h1>
          <p className="text-xs text-[#d4d4d4] font-[300]">
            작성시 설정한 비밀번호를 입력해주세요.
          </p>
          <div className="h-[42px] relative">
            <input
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
              type={exposePassword ? "text" : "password"}
              className="h-full w-full border border-[#737373] rounded-xl bg-dark-card p-5 text-sm text-white font-[400] focus:border-[#7FEEF0] focus:outline-none"
            />
            <button onClick={togglePasswordVisibility} type="button">
              <img
                src={exposePassword ? hide : open}
                alt="open"
                className="absolute right-4 top-0 bottom-0 my-auto cursor-pointer"
              />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-5 w-full text-base font-bold  pt-[60px]">
          <button
            type="button"
            onClick={handleCloseModal}
            className="w-full h-[42px] rounded-lg border border-[#7FEEF0] text-[#7FEEF0]"
          >
            닫기
          </button>
          <button
            type="button"
            className="w-full  h-[42px] rounded-lg bg-[#7FEEF0] text-[#262626]"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
