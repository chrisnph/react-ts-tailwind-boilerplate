import { ReactNode } from "react";

import "./styles.scss";
import TopBar from "components/NavBar/TopBar";

const LayoutContainer = ({
  centered,
  navBar,
  children,
}: {
  centered?: Boolean;
  navBar?: Boolean;
  children: ReactNode;
}) => (
  <div className="layout-container bg-no-repeat bg-padding-box flex flex-col h-screen ovedrflow-hidden">
    {navBar && <TopBar />}
    <div
      className={`child-container flex-1 overflow-y-auto bg-container w-full px-0 sm:px-[24px] md:px-[120px] ${
        centered ? "--full-center" : ""
      }`}
    >
      {children}
    </div>
  </div>
);

export default LayoutContainer;
