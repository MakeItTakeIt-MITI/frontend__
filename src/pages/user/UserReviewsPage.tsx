import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { WriteReviewContainer } from "./WriteReviewContainer";

export const UserReviewsPage = () => {
  return (
    <section className="laptop:my-4 mobile:my-0">
      <NavigateToPrevContainer children="작성 리뷰" />
      <div className="flex flex-col gap-4 laptop:w-[500px] min-h-[735px]    mobile:w-full mx-auto laptop:border laptop:border-gray-300  laptop:py-10 laptop:px-6 mobile:p-4 rounded-lg">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          내 리뷰
        </h1>
        <div className="flex flex-col gap-4 my-4 ">
          <WriteReviewContainer />
          <WriteReviewContainer />
          <WriteReviewContainer />
        </div>
      </div>
    </section>
  );
};
