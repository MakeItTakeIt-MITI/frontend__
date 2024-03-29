import { useForm } from "react-hook-form";
import { NavigateToPrevContainer } from "../../components/NavigateToPrevContainer";

export interface QueryField {
  title: string;
  content: string;
}

export const MyQueryPage = () => {
  const { register, formState } = useForm<QueryField>();

  const isFormEmpty =
    !formState.dirtyFields.title || !formState.dirtyFields.content;

  return (
    <section className="mt-4">
      <NavigateToPrevContainer children="문의하기" />
      <form className="laptop:w-[500px] min-h-[735px]   mobile:w-full mx-auto  laptop:border border-gray-300  laptop:py-10 laptop:px-12 mobile:p-4 rounded-lg flex flex-col justify-between ">
        <h1 className="mobile:hidden tablet:block text-center font-bold text-2xl">
          문의하기
        </h1>
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="font-bold">
              제목
            </label>
            <input
              type="text"
              className="h-[50px] p-4 bg-[#f7f7f7] w-full rounded-lg"
              placeholder="제목을 입력해주세요."
              {...register("title")}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="" className="font-bold">
              문의 내용
            </label>
            <textarea
              className="min-h-[300px] p-4 bg-[#f7f7f7] w-full rounded-lg"
              placeholder="내용을 입력해주세요."
              {...register("content")}
            />
          </div>
        </div>

        <button
          disabled={isFormEmpty}
          className={`w-full h-[55px] rounded-lg ${
            isFormEmpty
              ? "bg-[#e8e8e8] text-[#969696]"
              : "bg-[#4065F6] text-white"
          }`}
        >
          문의하기
        </button>
      </form>
    </section>
  );
};
