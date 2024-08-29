interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="pt-[3.75rem] sm:px-[.81rem] pb-[6.25rem] flex flex-col  justify-center  gap-[2.62rem] mx-auto sm:w-full md:w-[768px]">
      {children}
    </div>
  );
};

export default MainLayout;
