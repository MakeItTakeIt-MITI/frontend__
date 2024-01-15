import { BrowserGameCard } from "./BrowserGameCard";

export const BrowserGameList = () => {
  return (
    <div className="h-[390px] border border-gray-100  bg-[#FBFBFB overflow-y-scroll">
      <BrowserGameCard />
      <BrowserGameCard />
      <BrowserGameCard />
      <BrowserGameCard />
      <BrowserGameCard />
      <BrowserGameCard />
      <BrowserGameCard />
    </div>
  );
};
