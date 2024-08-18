import ShareFeatureFooter from "../components/common/ShareFeatureFooter";
import DetailHeader from "../components/courts/DetailHeader";
import DetailMap from "../components/courts/DetailMap";
import DetailsList from "../components/courts/DetailsList";

const CourtsDetail = () => {
  return (
    <section className="  flex items-center justify-center   pt-[3.75rem] pb-[9.375rem] bg-light-dark  ">
      <div className="w-[43.25rem] space-y-5  h-full">
        {/* header */}
        <DetailHeader />
        {/* container */}
        <div className=" space-x-5  flex">
          {/* left */}
          {/* map */}
          <DetailsList />
          <DetailMap />
        </div>
      </div>
      <ShareFeatureFooter />
    </section>
  );
};

export default CourtsDetail;
