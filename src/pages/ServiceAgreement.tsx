import Footer from "../components/common/Footer";
import { useServiceTermsDataHook } from "../hooks/useServiceTermsDataHook";
import { ServiceAgreementField } from "../interfaces/support";

const ServiceAgreement = () => {
  const { data } = useServiceTermsDataHook();

  return (
    <>
      <section className="bg-secondary-black h-screen  md:pt-[3.75rem] md:pb-[6.25rem] sm:pt-5 sm:pb-10 sm:px-5 md:px-0">
        <div className="md:w-[768px] sm:w-full mx-auto sm:space-y-[24px] md:space-y-[40px] mb-[40px]">
          <h1 className=" sm:text-[26px] text-white md:text-5xl font-bold">
            서비스 약관
          </h1>
          <div className="md:py-10 sm:py-5 border-t border-b  border-[#525252] ">
            <ul className="space-y-5">
              {data?.data.map((service: ServiceAgreementField) => (
                <li key={service.id} className="text-white text-xl">
                  {service.title}
                  {/* <p dangerouslySetInnerHTML={service.content} /> */}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              background:
                "linear-gradient(97deg, #DAFEFF 11.57%, #9EEFF0 88.43%)",
            }}
            className="w-full h-[100px] rounded-xl sm:px-5 md:px-10  flex items-center justify-between"
          >
            <p className="font-bold sm:text-sm md:text-base">
              편하게 농구게임에 참여하고 싶다면 <br />
              MITI를 이용해보세요!
            </p>
            <button
              type="button"
              style={{
                background:
                  "linear-gradient(94deg, rgba(255, 255, 255, 0.42) 4.64%, rgba(255, 255, 255, 0.60) 96.13%)",
              }}
              className="px-4 py-3 rounded-lg sm:text-[10px] md:text-sm font-[700] text-dark-card  "
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

export default ServiceAgreement;
