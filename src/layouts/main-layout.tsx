import React, { ReactNode } from "react";
import TopBar from "../components/top-bar";
import NavbarDesktop from "../components/navbar-desktop";
import NavbarMobile from "../components/navbar-mobile";
import Footer from "../components/footer";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <TopBar />
      <NavbarDesktop />
      <NavbarMobile />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
