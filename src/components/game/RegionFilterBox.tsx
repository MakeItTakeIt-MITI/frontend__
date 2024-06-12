import { useEffect, useState } from "react";
import downArrow from "../../assets/Chevron_Down_MD.svg";
import axiosUrl from "../../utils/axios";

interface RegionFilterBoxProp {
  defaultTabName: string;
  openList: boolean;
  handleOpenList: () => void;
  handleChangeTab: (arg: string) => void;
  setEnumType: (arg: string) => void;
}

export const RegionFilterBox = ({
  defaultTabName,
  openList,
  handleOpenList,
  handleChangeTab,
  setEnumType,
}: RegionFilterBoxProp) => {
  const [data, setData] = useState<string[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosUrl.get("/constants?key=district");
        setData(response?.data.data.district);
      } catch {
        throw new Error();
      }
    };
    fetchData();
  }, []);

  const handleSetEnum = (data: string) => {
    setEnumType(data);
  };

  return (
    <>
      <div className="flex justify-end w-full ">
        <div
          onClick={handleOpenList}
          style={{
            borderRadius: !openList ? "8px 8px 8px 8px" : "8px 8px 0px 0px",
          }}
          className="flex items-center justify-between  w-[92px] h-[39px] py-2.5 px-1.5 bg-[#f7f7f7]  relative "
        >
          <p className="text-xs text-center w-full font-[400] text-[#333] hover:cursor-pointer">
            {defaultTabName}
          </p>
          <img
            src={downArrow}
            className="hover:cursor-pointer"
            alt="open tab icon"
            style={{ rotate: openList ? "180deg" : "0deg" }}
          />

          {openList && (
            <ul className="absolute left-0 top-8 w-[92px] bg-[#f7f7f7] text-[#333] text-xs  px-2 py-[5px] flex flex-col gap-2 rounded-br-lg">
              {/* <li
                onClick={() => handleChangeTab("")}
                className="hover:cursor-pointer hover:font-bold  text-center"
              >
                전체보기
              </li> */}
              {data?.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleChangeTab(item[0]);
                      handleSetEnum(item[0]);
                    }}
                    className="hover:cursor-pointer hover:font-bold  text-center"
                  >
                    {item[0]}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
