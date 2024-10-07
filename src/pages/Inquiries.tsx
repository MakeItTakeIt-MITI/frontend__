import { useState } from "react";
import search from "../assets/v11/inquiry-search.svg";
import ListCard from "../components/inquiry/ListCard";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

import left from "../assets/v11/pagination-left.svg";
import right from "../assets/v11/pagination-right.svg";
import { usePrivateInquiriesDataHook } from "../hooks/usePrivateInquiriesDataHook";
import { InquiryListField } from "../interfaces/support";

const InquiriesList = () => {
  const [input, setInput] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { data } = usePrivateInquiriesDataHook(pageNumber);

  const currentPage = data?.data.current_page;
  const pageLength = data?.data.end_index;
  const content = data?.data.page_content;

  const pages = [];
  for (let i = 1; i <= pageLength; i++) {
    pages.push(i);
  }

  return (
    <>
      <section className="bg-secondary-black  md:pt-[3.75rem] md:pb-[6.25rem]  md:space-y-[100px]">
        <div className="md:w-[767px] sm:w-full sm:p-5 md:p-0 sm:space-y-[22px] md:space-y-[42px] mx-auto">
          <div className="space-y-5">
            <h1 className="text-white md:text-[32px] sm:text-[26px] font-semibold ">
              문의하기
            </h1>
            <p className="text-white md:text-xl sm:text-sm font-normal">
              서비스 이용에 어려움이 있다면 문의를 작성해주세요!
            </p>
          </div>
          {/* search bar */}
          <div className="h-[48px] w-full  relative ">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="문의 제목 검색"
              type="text"
              className="h-full text-base  rounded-xl w-full pl-5 py-3 pr-10  bg-light-dark text-primary-white truncate "
            />
            <button type="button">
              <img
                src={search}
                alt="search"
                className=" absolute right-4 top-3 bottom-3 my-auto "
              />
            </button>
          </div>

          {/* list */}
          <div className="w-full  space-y-5">
            <hr className="w-full h-[1px] text-[#525252]" />

            {content?.length > 1 ? (
              content.map((inquiry: InquiryListField) => (
                <ListCard inquiry={inquiry} />
              ))
            ) : (
              <h1>문의 목록이 없습니다.</h1>
            )}
          </div>

          {/* pagination */}
          <div className="flex justify-center items-center gap-5">
            <button
              type="button"
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <img src={left} alt="left" />
            </button>
            <div className="flex items-center gap-1 text-xs">
              {pages.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setPageNumber(page)}
                  className={`p-2.5 ${
                    currentPage ? "text-[#7FEEF0]" : "text-[#737373]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                setPageNumber((prev) => Math.min(prev + 1, pageLength))
              }
              disabled={currentPage === pageLength}
            >
              <img src={right} alt="right" />
            </button>
          </div>

          {/* button */}
          <Link
            to="new"
            className="sm:w-full md:w-[768px] h-12 p-2.5 bg-[#7feef0] rounded-lg justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-center text-neutral-800 text-base font-bold ">
              문의 작성하기
            </div>
          </Link>

          {/* bottom */}
          <div
            style={{
              background:
                "linear-gradient(97deg, #DAFEFF 11.57%, #9EEFF0 88.43%)",
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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InquiriesList;
