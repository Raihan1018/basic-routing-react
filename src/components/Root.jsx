import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <NavBar />
      <main className="flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
