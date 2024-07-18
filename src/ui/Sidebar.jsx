import Proptype from "prop-types";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { RiRobotFill, RiShoppingBasketLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Sidebar({ setShowSidebar, sidebarRef, showSidebar }) {
  const sidebarData = [
    {
      title: "Home",
      icon: <IoHomeOutline />,
      to: "/",
    },
    {
      title: "Shop",
      icon: <RiShoppingBasketLine />,
      to: "shop",
    },
    {
      title: "About",
      icon: <BiSolidUserDetail />,
      to: "about",
    },
    {
      title: "Contact Us",
      icon: <BiSolidUserDetail />,
      to: "contact",
    },
  ];

  return (
    <div
      ref={sidebarRef}
      className={`fixed z-50 top-0 left-0 border-r-2 h-full lg:-translate-x-full w-64 bg-gray-100 shadow-lg  transform transition-transform duration-300 ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="md:hidden right-3 top-2 absolute"
        onClick={() => setShowSidebar((show) => !show)}
      >
        <RxCross2 size={20} />
      </button>

      <div className=" justify-start mt-[6rem] items-center w-full flex flex-col h-full">
        <h2 className="flex items-center gap-2 border-2 p-2">
          <RiRobotFill size={20} />
          Spy World
        </h2>

        <nav className="flex mt-10 p-2 w-full ">
          <ul className="flex flex-col gap-5 w-[100%]">
            {sidebarData.map((data) => (
              <NavLink
                to={data.to}
                key={data.title}
                className={({ isActive }) =>
                  `${
                    isActive && "bg-slate-200"
                  } hover:bg-slate-200 rounded-sm flex  gap-2 w-[full] justify-center items-center p-2 font-semibold`
                }
              >
                <span className="flex items-center gap-4 justify-start w-[60%] m-auto">
                  {data.icon}
                  {data.title}
                </span>
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  setShowSidebar: Proptype.func,
  showSidebar: Proptype.bool,
  sidebarRef: Proptype.oneOfType([Proptype.func, Proptype.object]),
};

export default Sidebar;
