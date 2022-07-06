import React from "react";
import { Navbar } from "../components";
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-8/12">
          <Navbar />
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}
