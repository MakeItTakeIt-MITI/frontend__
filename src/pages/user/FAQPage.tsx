import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import downArrow from "../../assets/Chevron_Down_MD.svg";
import { useState } from "react";
import { useFaqQuery } from "../../hooks/support/useFaqQuery";

export const FAQPage = () => {
  const { data: faqData } = useFaqQuery();

  const initialOpenFaqs = Array(faqData?.data?.page_objects?.length || 0).fill(
    false
  );
  const [openFaqs, setOpenFaqs] = useState(initialOpenFaqs);

  const handleOpenFaq = (index: number) => {
    const newOpenFaqs = [...openFaqs];
    newOpenFaqs[index] = !newOpenFaqs[index];
    setOpenFaqs(newOpenFaqs);
  };

  return (
    <section className="laptop:my-[69px] mobile:my-0">
      <NavigateToPrevContainer children="FAQ" />
      <div className="flex flex-col gap-4 laptop:w-[500px] min-h-[735px]    mobile:w-full mx-auto laptop:border laptop:border-gray-300  laptop:py-10 laptop:px-6 mobile:p-4 rounded-lg">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          FAQ
        </h1>
        <div className="flex flex-col gap-4 my-4 relative">
          <div className="space-y-6">
            {faqData?.data.page_objects.map(
              (
                faq: { id: number; title: string; content: string },
                index: number
              ) => {
                return (
                  <div key={faq.id}>
                    {!openFaqs[index] && (
                      <div className=" w-full min-h-[50px] text-[#545454] border border-gray-300 rounded-lg flex items-center justify-between py-1 px-3">
                        <h2 className="font-bold">{faq.title}</h2>
                        <button
                          onClick={() => handleOpenFaq(index)}
                          className="hover:cursor-pointer"
                        >
                          <img src={downArrow} alt="down arrow" />
                        </button>
                      </div>
                    )}
                    {openFaqs[index] && (
                      <div className="  w-full min-h-[155px] border text-[#545454] border-gray-300 rounded-lg flex flex-col py-1 px-3">
                        <div className="flex justify-between">
                          <h2 className="font-bold">{faq.title}</h2>
                          <button
                            onClick={() => handleOpenFaq(index)}
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
                          <p className="h-full">{faq.content}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
