import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";
import { MyReviewContainer } from "../../components/game/MyReviewContainer";

export const MyReviewPage = () => {
  return (
    <section className="my-4">
      <NavigateToPrevContainer children="내 리뷰" />
      <div className="flex flex-col gap-4 laptop:w-[500px] min-h-[735px]    mobile:w-full mx-auto laptop:border laptop:border-gray-300  laptop:py-10 laptop:px-6 mobile:p-4 rounded-lg">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          내 리뷰
        </h1>
        <div className="flex flex-col gap-4 my-4 ">
          <MyReviewContainer />
          <MyReviewContainer />
          <MyReviewContainer />
          <MyReviewContainer />
        </div>
      </div>
    </section>
  );
};
