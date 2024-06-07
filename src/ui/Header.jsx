import { useEffect, useRef, useState } from "react";
import { BsBox2Heart, BsCart3, BsPerson, BsSearch } from "react-icons/bs";
import { RiRobotFill } from "react-icons/ri";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [showsidebar, setShowSidebar] = useState(false);

  

  return (
    <header className="z-10 h-[75px] relative drop-shadow-sm flex justify-center m-auto border-b-2 items-center w-full bg-white">
      <div className=" max-sm:px-5 w-[1111px] flex justify-between items-center">
        <RxHamburgerMenu
          onClick={() => setShowSidebar(true)}
          className="lg:hidden cursor-pointer"
        />

        <h2
          onClick={() => navigate("/")}
          className="flex max-sm:ml-10 cursor-pointer gap-2"
        >
          <RiRobotFill size={20} />
          Spy World
        </h2>

        <nav
          className={`${
            !showsidebar && "max-sm:translate-x-[-200px]"
          }   gap-4 max-sm:py-[5rem] max-sm:transition-all max-sm:duration-500 max-sm:ease-in-out  max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:w-[200px] max-sm:border-r-2 max-sm:bg-white max-sm:h-[100vh]  flex-row max-sm:flex-col flex items-center `}
        >
          <RxCross2
            onClick={() => setShowSidebar(false)}
            size={20}
            className="lg:hidden cursor-pointer absolute top-3 right-3"
          />
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <BsSearch className=" cursor-pointer" />
          <BsPerson className=" cursor-pointer" size={20} />
          <BsBox2Heart className=" cursor-pointer" />
          <BsCart3 className=" cursor-pointer" size={18} />
        </div>
      </div>
    </header>
  );
}

export default Header;
