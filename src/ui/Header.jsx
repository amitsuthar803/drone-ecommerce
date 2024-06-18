import { RiRobotFill } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Proptype from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import {
  PiHeartStraightBold,
  PiShoppingCartBold,
  PiUserBold,
} from "react-icons/pi";
import { useDroneData } from "../context/DroneContext";

function Header({ setShowSidebar }) {
  const { users, currentUserId } = useDroneData();

  const navigate = useNavigate();

  const currentUserData = users.find((u) => u.id === currentUserId);
  console.log(currentUserId);

  const handleHamburgerClick = (event) => {
    event.stopPropagation(); // Stop the event from propagating to the document
    setShowSidebar((show) => !show);
  };

  return (
    <header className="z-10 h-[75px] relative drop-shadow-sm flex justify-center m-auto border-b-2 items-center w-full bg-white">
      <div className=" px-5 w-[1111px] flex justify-between items-center">
        <GiHamburgerMenu
          onClick={handleHamburgerClick}
          className="sm:hidden cursor-pointer"
        />

        <h2
          onClick={() => navigate("/")}
          className="flex max-md:ml-10 font-semibold cursor-pointer gap-2"
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
          <FaSearch className=" cursor-pointer" />
          <PiUserBold className=" cursor-pointer" size={20} />

          <div className="relative">
            <PiHeartStraightBold className=" z-10 cursor-pointer" size={20} />
            <span className="absolute flex items-center justify-center top-0 right-[-5px] text-[10px] mt-[-5px] text-white font-semibold bg-red-600 px-[4px] rounded-full z-30">
              {currentUserData?.wishlistItems.length}
            </span>
          </div>

          <Link className="relative" to={"cart"}>
            <PiShoppingCartBold className=" z-10 cursor-pointer" size={20} />
            <span className="absolute flex items-center justify-center top-0 right-[-5px] text-[10px] mt-[-5px] text-white font-semibold bg-black px-1.5 rounded-full z-30">
              {currentUserData?.cartItems.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  setShowSidebar: Proptype.func,
};

export default Header;
