import { useParams } from "react-router-dom";
import ShareFeatureFooter from "../components/common/ShareFeatureFooter";
import DetailHeader from "../components/courts/DetailHeader";
import DetailMap from "../components/courts/DetailMap";
import DetailsList from "../components/courts/DetailsList";
import MobileDetailMap from "../components/courts/MobileDetailMap";
import { useSelectedCourtsListHook } from "../hooks/useSelectedCourtsListHook";

const CourtsDetail = () => {
  const { id } = useParams();
  const courtId = Number(id);
  const { data: selectedCourtsData } = useSelectedCourtsListHook(courtId);

  return (
    <section className="  flex items-center justify-center   sm:pt-0 md:pt-[3.75rem] sm:pb-[5.875rem] md:pb-[9.375rem] bg-light-dark  ">
      <div className="relative w-[43.25rem] sm:space-y-1 md:space-y-5  h-full">
        <MobileDetailMap />
        <DetailHeader />
        <div className=" sm:space-x-0  md:space-x-5  flex sm:justify-center">
          <DetailsList selectedCourtsData={selectedCourtsData} />
          <DetailMap />
        </div>
      </div>
      <ShareFeatureFooter />
    </section>
  );
};

export default CourtsDetail;
