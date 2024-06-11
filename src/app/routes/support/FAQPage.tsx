import { NavigateToPrevContainer } from "../../../components/NavigateToPrevContainer";
import downArrow from "../../../assets/Chevron_Down_MD.svg";
import { useState } from "react";
import { useFaqQuery } from "../../../hooks/support/useFaqQuery";

export const FAQPage = () => {
  const { data: questionData } = useFaqQuery();

  const initialOpenFaqs = Array(
    questionData?.data?.page_objects?.length || 0
  ).fill(false);
  const [openFaqs, setOpenFaqs] = useState(initialOpenFaqs);

  const handleOpenFaq = (index: number) => {
    const newOpenFaqs = [...openFaqs];
    newOpenFaqs[index] = !newOpenFaqs[index];
    setOpenFaqs(newOpenFaqs);
  };

  return (
    <section className="laptop:my-[69px] mobile:my-0">
      <NavigateToPrevContainer children="FAQ" />
      <div className="flex flex-col gap-4 laptop:w-[495px]  min-h-[720px]    mobile:w-full mx-auto rounded-lg">
        <h1 className="mobile:hidden tablet:block text-black text-[26px] font-bold">
          FAQ
        </h1>
        <div className="flex flex-col gap-4  relative">
          <div className="space-y-6">
            {questionData?.data.page_content.map(
              (
                faq: { id: number; title: string; content: string },
                index: number
              ) => {
                return (
                  <div key={faq.id}>
                    {!openFaqs[index] && (
                      <div
                        onClick={() => handleOpenFaq(index)}
                        className="hover:cursor-pointer w-full h-[48px] text-[#545454] border border-gray-200 rounded-lg flex items-center justify-between p-3"
                      >
                        <h2 className="text-zinc-800 text-sm font-normal w-[296px] truncate">
                          {faq.title}
                        </h2>
                        <button className="">
                          <img src={downArrow} alt="down arrow" />
                        </button>
                      </div>
                    )}
                    {openFaqs[index] && (
                      <div className="  w-full  space-y-[9px] border border-gray-200 rounded-lg flex flex-col p-3">
                        <div
                          onClick={() => handleOpenFaq(index)}
                          className="hover:cursor-pointer flex justify-between"
                        >
                          <h2 className="text-zinc-800 text-sm font-normal w-[296px] truncate">
                            {faq?.title}
                          </h2>
                          <button className="">
                            <img
                              src={downArrow}
                              alt="down arrow"
                              className="rotate-180"
                            />
                          </button>
                        </div>
                        <hr className="w-full bg-gray-300 " />
                        <p className="text-zinc-800 text-sm font-normal">
                          {faq?.content}
                        </p>
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
