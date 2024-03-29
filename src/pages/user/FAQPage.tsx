import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import downArrow from "../../assets/Chevron_Down_MD.svg";
import { useState } from "react";

export const FAQPage = () => {
  const [openFaq, setOpenFaq] = useState(false);

  const handleOpenFaq = () => {
    setOpenFaq(!openFaq);
  };
  return (
    <section className="mt-4">
      <NavigateToPrevContainer children="FAQ" />
      <div className="flex flex-col gap-4 laptop:w-[500px] min-h-[735px]    mobile:w-full mx-auto laptop:border laptop:border-gray-300  laptop:py-10 laptop:px-6 mobile:p-4 rounded-lg">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          FAQ
        </h1>
        <div className="flex flex-col gap-4 my-4 relative">
          {/* FAQ BOX */}
          <div>
            {/* closedfaq box */}
            {!openFaq && (
              <div className=" w-full min-h-[50px] text-[#545454] border border-gray-300 rounded-lg flex items-center justify-between py-1 px-3">
                <h2 className="font-bold">MITI 는 어떤 서비스인가요?</h2>
                <button
                  onClick={handleOpenFaq}
                  className="hover:cursor-pointer"
                >
                  <img src={downArrow} alt="down arrow" />
                </button>
              </div>
            )}

            {/* opened faq box */}
            {openFaq && (
              <div className="  w-full min-h-[155px] border text-[#545454] border-gray-300 rounded-lg flex flex-col py-1 px-3">
                <div className="flex justify-between">
                  <h2 className="font-bold">MITI 는 어떤 서비스인가요?</h2>
                  <button
                    onClick={handleOpenFaq}
                    className="hover:cursor-pointer"
                  >
                    <img
                      src={downArrow}
                      alt="down arrow"
                      className="rotate-180"
                    />
                  </button>
                </div>
                <hr className="w-full bg-gray-300 " />
                <div className="flex flex-col gap-2 h-full py-2">
                  <h2 className="font-bold">관리자 답변</h2>
                  <p className="h-full">
                    가나다라마바사아자차타카파하가나다라마바사아자차타카...가나다라마바사아자차타카파하가나다라마바사아자차타카...가나다라마바사아자차타카파하가나다라마바사아자차타카...가나다라마바사아자차타카파하가나다라마바사아자차타카...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
