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
            <div className="flex flex-col gap-2 items-center justify-center h-[52px] w-full bg-gray-100 animate-pulse">
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
          </div>
          <div className="w-full  h-[473px] bg-gray-100 animate-pulse dark:bg-gray-200 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="#d1d1d1"
                d="M16.219 1.943c.653.512 1.103 1.339 1.287 2.205a.474.474 0 0 1 .065.026l2.045.946a.659.659 0 0 1 .384.597v12.367a.665.665 0 0 1-.85.634l-5.669-1.6l-6.74 1.858a.674.674 0 0 1-.371-.004L.474 17.217a.66.66 0 0 1-.474-.63V3.998c0-.44.428-.756.855-.632l5.702 1.661l2.898-.887a.734.734 0 0 1 .122-.025c.112-.656.425-1.286.95-1.9c.623-.73 1.716-1.158 2.781-1.209c1.105-.053 1.949.183 2.91.936M1.333 4.881v11.215l4.87 1.449V6.298zm8.209.614l-2.006.613v11.279l5.065-1.394v-3.295c0-.364.299-.659.667-.659c.368 0 .666.295.666.66v3.177l4.733 1.335V6.136l-1.12-.52c-.019.11-.043.218-.073.323A6.134 6.134 0 0 1 16.4 8.05l-2.477 3.093a.67.67 0 0 1-1.073-.037l-2.315-3.353c-.382-.534-.65-1.01-.801-1.436a3.744 3.744 0 0 1-.192-.822m3.83-3.171c-.726.035-1.472.327-1.827.742c-.427.5-.637.968-.679 1.442c-.05.571-.016.974.126 1.373c.105.295.314.669.637 1.12l1.811 2.622l1.91-2.385a4.812 4.812 0 0 0 .841-1.657c.24-.84-.122-2.074-.8-2.604c-.695-.545-1.22-.692-2.018-.653m.138.697c1.104 0 2 .885 2 1.977a1.988 1.988 0 0 1-2 1.977c-1.104 0-2-.885-2-1.977s.896-1.977 2-1.977m0 1.318a.663.663 0 0 0-.667.659c0 .364.299.659.667.659a.663.663 0 0 0 .666-.66a.663.663 0 0 0-.666-.658"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
