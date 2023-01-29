import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

interface LayoutProps extends React.PropsWithChildren {}
const Layout: React.FunctionComponent<LayoutProps> = (): JSX.Element => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default Layout;
