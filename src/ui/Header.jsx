import { BsBox2Heart, BsCart3, BsPerson, BsSearch } from "react-icons/bs";
import { RiRobotFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import Proptype from "prop-types";

function Header({ setShowSidebar }) {
  const navigate = useNavigate();

  const handleHamburgerClick = (event) => {
    event.stopPropagation(); // Stop the event from propagating to the document
    setShowSidebar((show) => !show);
  };

  return (
    <header className="z-10 h-[75px] relative drop-shadow-sm flex justify-center m-auto border-b-2 items-center w-full bg-white">
      <div className=" px-5 w-[1111px] flex justify-between items-center">
        <RxHamburgerMenu
          onClick={handleHamburgerClick}
          className="sm:hidden cursor-pointer"
        />

        <h2
          onClick={() => navigate("/")}
          className="flex max-md:ml-10 cursor-pointer gap-2"
        >
          <RiRobotFill size={20} />
          Spy World
        </h2>

        <nav className="  gap-4 max-sm:hidden  flex-row  flex items-center ">
          <NavLink
            className={({ isActive }) => `${isActive && " font-semibold"}`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `${isActive && " font-semibold"}`}
            to="shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => `${isActive && " font-semibold"}`}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => `${isActive && " font-semibold"}`}
            to="contact"
          >
            Contact Us
          </NavLink>
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

Header.propTypes = {
  setShowSidebar: Proptype.func,
};

export default Header;
