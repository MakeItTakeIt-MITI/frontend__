import { isBrowser } from "react-device-detect";

export const MobileDateBox = () => {
  return <>{isBrowser && <div className="bg-black">MobileDateBox</div>}</>;
};
