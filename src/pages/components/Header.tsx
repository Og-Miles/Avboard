import React from "react";
import { UserButton } from "@clerk/nextjs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Header = ({ toggleSidebar }: any) => {
  return (
    <header className='w-full bg-slate-50 flex justify-between items-center pt-2 sticky top-0 z-10 px-5 lg:px-10 h-20 mb-10 py-3'>
      {/* Mmenu Icon */}
      <div className='text-3xl cursor-pointer z-50' onClick={toggleSidebar}>
        <HiOutlineMenuAlt2 />
      </div>

      <div className='flex flex-end items-center'>
        <UserButton />
      </div>
    </header>
  );
};

export default Header;
