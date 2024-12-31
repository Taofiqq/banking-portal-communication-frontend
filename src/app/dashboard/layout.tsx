import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 bg-gray-50 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
