import React, { ReactNode } from "react";

import { Navbar } from "@/src/components/navbar";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default CommonLayout;
