// Layout.jsx
import React, { useState, useEffect } from "react";
import { Header, SideBar } from "@/pages/components";

const Layout = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  //  Setting the initial state based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    handleResize(); // func to call once

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup func
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run effect only once on mount

  return (
    <div className='flex h-screen relative'>
      {/* Sidebar for Desktop */}
      {isSidebarOpen && (
        <div className='w-1/4 bg-gray-200'>
          <SideBar />
        </div>
      )}

      {/* Sidebar for Mobile and Tablet */}
      <div
        className={`md:hidden ${
          isSidebarOpen
            ? "block w-[240px] md:[280px] transform translate-x-0"
            : "hidden transform -translate-x-full"
        } fixed inset-0 z-50 bg-gray-200 transition-transform duration-300 overflow-y-auto`}
      >
        {/* Sidebar content with overflow-y-auto */}
        <div className='h-full'>
          <SideBar toggleSidebar={toggleSidebar} />
        </div>
      </div>

      {/* Semi-transparent overlay */}
      {isSidebarOpen && (
        <div
          className='md:hidden fixed inset-0 z-40 bg-black opacity-50'
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <div className='flex flex-col w-full h-full overflow-auto'>
        <Header toggleSidebar={toggleSidebar} />
        <div className='flex-grow'>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
