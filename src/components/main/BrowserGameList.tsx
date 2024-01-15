import { BrowserGameCard } from "./BrowserGameCard";

export const BrowserGameList = () => {
  return (
    <div className="h-[380px]  bg-[#FBFBFB overflow-y-scroll">
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
