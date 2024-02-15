import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { links } from "../../data/dummy";
import Link from "next/link";
import "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { IoLogoAmplify } from "react-icons/io5";

import { ImCancelCircle } from "react-icons/im";

const SideBar = ({ toggleSidebar }: any) => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const isActive = true;
  const isPageActive = (href: any) => {
    return router.pathname === href;
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 m-2 hover:bg-slate-100";

  return (
    <div
      className={`scrollbar-thin scrollbar-thumb-violet-600 bg-white text-black h-screen hover:overflow-y-auto overflow-y-auto hover:overflow-x-hidden items-center relative duration-300 drop-shadow-md z-50 transition-all ${
        open ? "w-full" : "w-20"
      }`}
      style={{ position: "sticky", top: 0, left: 0 }}
    >
      <div className='ml-3'>
        <Link href='/dashboard' className='items-center'>
          <div
            className={`text-black origin-left text-2xl duration-300 ml-3 pt-4 font-bold tracking-tight ${
              !open && "scale-0"
            }`}
          >
            <span className='flex items-center'>
              <IoLogoAmplify />
              <h1 className='ml-3'>Avboard</h1>
            </span>
          </div>
        </Link>
        <div
          className='flex md:hidden text-3xl cursor-pointer z-50 ml-44 -mt-8'
          onClick={toggleSidebar}
        >
          <ImCancelCircle />
        </div>

        <div className='mt-10 w-[200px] md:w-[160px] lg:w-[240px]'>
          {links.map((item) => (
            <div key={item.title}>
              <p
                className={`text-gray-400 m-3 mt-4 uppercase text-sm ${
                  !open && "scale-0"
                }`}
              >
                {item.title}
              </p>
              <div>
                {item.links.map((link) => (
                  <Link
                    href={`/${link.name}`}
                    key={link.name}
                    onClick={toggleSidebar}
                    className={
                      isPageActive(`/${link.name}`)
                        ? `${activeLink} flex items-center bg-[#5E00AB]`
                        : normalLink
                    }
                  >
                    <div className='flex items-center'>
                      <div className='mr-3'>{link?.icon}</div>
                      <span className={`capitalize ${!open && "scale-0"}`}>
                        {link.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
