import { AiOutlineBarChart } from "react-icons/ai";

import { GrOrganization } from "react-icons/gr";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdOutlineFamilyRestroom, MdCloudUpload } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import man from "./man.png";
import carousel1 from "./carousel1.jpg";
import carousel2 from "./carousel2.jpg";
import carousel3 from "./carousel3.jpg";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "dashboard",
        icon: <AiOutlineBarChart />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "projects",
        icon: <GoProjectSymlink />,
      },
      {
        name: "enrollees",
        icon: <GrOrganization />,
      },
      {
        name: "principals",
        icon: <BsPersonCheckFill />,
      },
      {
        name: "dependants",
        icon: <MdOutlineFamilyRestroom />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <IoCalendarNumber />,
      },
      {
        name: "uploads",
        icon: <MdCloudUpload />,
      },
    ],
  },
];

export { carousel1, carousel2, carousel3, man };
