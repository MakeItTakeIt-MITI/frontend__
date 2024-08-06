interface LayoutProps {
  height: string;
  children: React.ReactNode;
}

const Layout = ({ height, children }: LayoutProps) => {
  return (
    <div
      style={{ height: height }}
      className={`${height} p-[1.75rem] rounded-[1.25rem] bg-dark-card  border border-[#525252] space-y-[1.25rem] flex flex-col justify-center`}
    >
      {children}
    </div>
  );
};

export default Layout;
