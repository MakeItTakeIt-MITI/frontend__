import React from "react";
import left_arrow from "../assets/Chevron_Left.png";

export const MatchingPage = () => {
  return (
    <div>
      <div className="py-[10px] relative">
        <img src={left_arrow} alt="left arrow" className="absolute px-[13px]" />
        <h4 className="text-center font-bold">매치 참가</h4>
      </div>
      <hr />
    </div>
  );
};
