import React from "react";
import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { AiFillCar } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsLink } from "react-icons/bs";
function Sidebar() {
  const links = [
    {
      name: "Dashboard",
      link: "/home",
      icon: <RiDashboardLine className="my-auto mr-1" />,
    },
    {
      name: "Vehicles",
      link: "/vehicles",
      icon: <AiFillCar className="my-auto mr-1" />,
    },
    {
      name: "Owners",
      link: "/owners",
      icon: <MdOutlinePersonOutline className="my-auto mr-1" />,
    },
    {
      name: "Vehicle Owners",
      link: "/vehicle-owners",
      icon: <BsLink className="my-auto mr-1" />,
    },
  ];
  return (
    <div className="bg-blue-500 md:w-2/12 h-full">
      <div
        className="collapse navbar-collapse flex-grow items-center flex"
        id="navbarSupportedContent1"
      >
        <a
          className="text-xl text-white pr-2 font-semibold mx-auto mt-10 flex"
          href="#"
        >
          <AiFillCar className="m-auto text-2xl" /> VMS
        </a>
      </div>
      <div className="flex flex-col ml-20 pt-10">
        {/* Left links */}
        {links.map((link, i) => {
          return (
            <Link
              className="text-white py-3 flex"
              key={link.name}
              to={link.link}
            >
              {link.icon} <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
