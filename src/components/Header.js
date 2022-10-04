import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-600 text-gray-100">
      <h2>Alex Xu</h2>
      <Navigation />
    </div>
  )
}

export default Header