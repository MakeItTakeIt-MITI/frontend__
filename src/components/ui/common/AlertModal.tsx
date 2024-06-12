import { Link } from "react-router-dom";

export interface PopModalProps {
  modal?: boolean;
  handleCloseModal?: () => void;
  title?: string;
  context?: string;
  contextTwo?: string;
  buttonContext?: string;
  isLink?: boolean;
  path?: string | "";
}

export const AlertModal: React.FC<PopModalProps> = ({
  modal = true,
  handleCloseModal,
  title,
  context,
  contextTwo,
  buttonContext,
  isLink,
  path = "/",
}) => {
  return (
    <>
      {modal && (
        <div className="z-[9999] flex items-center justify-center w-full h-full fixed top-0 left-0 right-0 bottom-0 bg-[#ffffffd5] ">
          <div className=" border border-gray-300 w-[348px] h-[166px] bg-white flex flex-col gap-4 p-4 justify-center rounded-lg">
            <h1 className="font-bold text-[18px]">{title}</h1>
            <div className="text-[14px]">
              <p>{context}</p>
              <p>{contextTwo}</p>
            </div>
            {isLink ? (
              <Link to={path}>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-[#4065F5] w-full rounded-sm text-white h-[34px] text-[14px]"
                >
                  {buttonContext}
                </button>
              </Link>
            ) : (
              <button
                type="button"
                onClick={handleCloseModal}
                className="bg-[#4065F5] rounded-sm text-white h-[34px] text-[14px]"
              >
                {buttonContext}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
