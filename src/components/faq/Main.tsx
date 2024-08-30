import MainLayout from "../common/MainLayout";
import search from "../../assets/v11/search.svg";
import { FAQ_GUIDELINES, FAQ_TOPICS } from "../../constants/faq";
import dropdown from "../../assets/v11/drop.svg";
import { useState } from "react";

const Main = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const handleOpenFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <MainLayout>
      {/* upper */}
      <div className="space-y-[1.25rem] text-primary-white sm:text-center md:text-start">
        <h1 className="text-[32px] font-[600] ">자주 묻는 질문</h1>
        <h2 className="text-[20px]">궁금하신 내용의 답변을 모아두었어요.</h2>
      </div>

      {/* searchbar */}
      <div className="w-full h-[3rem] bg-light-dark  rounded-xl relative py-[.75rem] px-[1.25rem] flex items-center justify-between gap-2">
        <input
          type="text"
          className="w-full h-full bg-light-dark text-primary-white  font-[500] b courtsPlaceHolder "
          placeholder="궁금한 내용을 검색해보세요."
        />

        <button type="button">
          <img src={search} alt="search" className="size-6" />
        </button>
      </div>
      {/* main */}
      <div className="space-y-[.75rem] sm:px-[.5rem]">
        {/* topics boxes */}
        <ul className="flex items-center gap-[1.25rem]">
          {FAQ_TOPICS.map((topic, index) => (
            <li
              style={{
                color: "#737373",
              }}
              className="cursor-pointer"
              key={index}
            >
              {topic}
            </li>
          ))}
        </ul>
        {/* FAQ items */}
        {FAQ_GUIDELINES.map((item, index) => (
          <>
            <div
              key={index}
              className="flex items-center justify-between py-[1.25rem] "
            >
              <span className="text-secondary-white text-[18px] font-[400]">
                {item.title}
              </span>
              <button onClick={() => handleOpenFAQ(index)} type="button">
                <img
                  src={dropdown}
                  alt="dropdown"
                  className={`size-6 ${index === openFAQIndex ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            {/* description */}
            {openFAQIndex === index && (
              <div className="p-[1.25rem] bg-light-dark rounded-[20px] min-h-[200px] space-y-3">
                <h2 className="text-primary-white"> {item.subtitle}</h2>
                <p className="text-[#d4d4d4] text-[12px] font-[300]">
                  {item.description}
                </p>
              </div>
            )}

            {index !== FAQ_GUIDELINES.length - 1 && (
              <hr className="bg-[#525252] h-[2px]" />
            )}
          </>
        ))}
      </div>
      {/* bottom */}
      <div
        style={{
          background: "linear-gradient(97deg, #DAFEFF 11.57%, #9EEFF0 88.43%)",
        }}
        className="w-full h-[100px] rounded-xl px-10 sm:hidden md:flex items-center justify-between"
      >
        <p className="font-bold">
          편하게 농구게임에 참여하고 싶다면 <br />
          MITI를 이용해보세요!
        </p>
        <button
          style={{
            background:
              "linear-gradient(94deg, rgba(255, 255, 255, 0.42) 4.64%, rgba(255, 255, 255, 0.60) 96.13%)",
          }}
          className="px-4 py-3 rounded-lg text-sm font-[700] text-dark-card  "
        >
          MITI 앱으로 열기
        </button>
      </div>
    </MainLayout>
  );
};

export default Main;
