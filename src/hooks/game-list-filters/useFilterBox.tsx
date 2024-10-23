import { useEffect } from "react";

export const useFilterBox = (
  displayFilterBox: boolean,
  setDisplayFilterBox: (arg: boolean) => void
) => {
  const handleToggleFilterBox = () => {
    setDisplayFilterBox(!displayFilterBox);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = displayFilterBox ? "hidden" : "auto";
    }
  }, [displayFilterBox]);

  return { displayFilterBox, handleToggleFilterBox };
};
