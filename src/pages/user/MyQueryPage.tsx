import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

export const MyQueryPage = () => {
  return (
    <section className="mt-4">
      <NavigateToPrevContainer children="문의하기" />
      <div className="laptop:w-[600px] mobile:w-full mx-auto mobile:p-4  tablet:px-0">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          문의하기
        </h1>
        <form className="flex flex-col gap-4" action="">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="font-bold">
              제목
            </label>
            <input
              type="text"
              className="h-[50px] p-4 bg-[#f7f7f7] w-full rounded-lg"
              placeholder="제목을 입력해주세요."
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="font-bold">
              문의 내용
            </label>
            <textarea
              className="min-h-[300px] p-4 bg-[#f7f7f7] w-full rounded-lg"
              placeholder="내용을 입력해주세요."
            />
          </div>

          <button className="bg-[#e8e8e8] text-[#969696] w-full h-[55px] rounded-lg">
            문의하기
          </button>
        </form>
      </div>
    </section>
  );
};
