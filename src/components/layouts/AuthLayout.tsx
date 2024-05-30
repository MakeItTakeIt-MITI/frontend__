type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <section className="laptop:my-[69px] mobile:my-3">{children}</section>;
};
