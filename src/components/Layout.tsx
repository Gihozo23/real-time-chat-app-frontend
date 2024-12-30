import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
export function Layout() {
  return (
    <div className="bg-black bg-gradient-to-bl from-black to-gray-700 h-full p-5 rounded-lg">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
