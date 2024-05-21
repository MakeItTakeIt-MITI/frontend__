import miti from "../assets/MITI_logo.svg";

export const LoadingPage = () => {
  return (
    <div className="laptop:hidden mobile:block fixed top-[60px] bottom-0 right-0 left-0 h-full">
      <div className="flex items-center justify-center h-full">
        <img src={miti} alt="MITO logo" />
      </div>
    </div>
  );
};
