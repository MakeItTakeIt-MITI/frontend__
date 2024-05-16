export const HomeSkeleton = () => {
  return (
    <section className="laptop:mb-[69px] mobile:my-0">
      <div className="  flex flex-col gap-6  w-full   mx-auto  max-w-[1024px] ">
        <div className="bg-gray-100 animate-pulse dark:bg-gray-200 w-full h-[288px] rounded-2xl flex items-center justify-center">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="flex   tablet:gap-10  mt-10  ">
          <div className="space-y-4">
            <div className="flex flex-col gap-2 items-center justify-center h-[52px] w-full bg-gray-100 animate-pulse dark:bg-gray-900">
              <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
              <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
            </div>
            <div className="h-[409px] w-[371px] bg-gray-100 p-3 space-y-3">
              <div className="animate-pulse dark:bg-gray-300 bg-gray-100 p-3 h-[103px] w-full rounded-lg flex flex-col items-center justify-center gap-2">
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
              </div>
              <div className="animate-pulse dark:bg-gray-300 bg-gray-100 p-3 h-[103px] w-full rounded-lg flex flex-col items-center justify-center gap-2">
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
              </div>
              <div className="animate-pulse dark:bg-gray-300 bg-gray-100 p-3 h-[103px] w-full rounded-lg flex flex-col items-center justify-center gap-2">
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
                <div className="h-1.5 bg-gray-300 rounded-full dark:bg-gray-600 w-[90%] "></div>
              </div>
            </div>
          </div>{" "}
          <div className="w-full  h-[473px] bg-gray-100 animate-pulse dark:bg-gray-200 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
