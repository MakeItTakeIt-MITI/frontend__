interface HeroProps {
  backgroundImage: string;
  launchText?: string;
  recruitText?: string;
  managementText?: string;
}

export const Hero = ({
  backgroundImage,
  launchText,
  recruitText,
  managementText,
}: HeroProps) => {
  return (
    <aside className="my-[2.5rem]">
      <div className="mx-auto relative ">
        <img className="mx-auto" src={backgroundImage} alt="basketball shot" />
        <div className="absolute left-6 bottom-6 font-Pretendard">
          <p className="text-[#FFCF0A] text-[1rem] font-bold">{launchText}</p>
          <p className="text-white text-[2rem] font-extrabold ">
            {recruitText}
          </p>
          <p className="text-white text-[2rem] font-extrabold ">
            {managementText}
          </p>
        </div>
      </div>
    </aside>
  );
};
