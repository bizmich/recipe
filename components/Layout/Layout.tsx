import { ReactNode } from "react";
import TheHeader from "../TheHeader/TheHeader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TheHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
