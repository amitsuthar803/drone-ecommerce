import { RiRobotFill } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Proptype from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import {
  PiHeartStraightBold,
  PiShoppingCartBold,
  PiSignOutBold,
  PiUserBold,
} from "react-icons/pi";
import { useDroneData } from "../context/DroneContext";
import { LuLogOut } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { auth } from "../firebase";

function Header({ setShowSidebar }) {
  const { users, currentUserId } = useDroneData();

  const navigate = useNavigate();

  const currentUserData = users.find((u) => u.id === currentUserId);

  const handleHamburgerClick = (event) => {
    event.stopPropagation(); // Stop the event from propagating to the document
    setShowSidebar((show) => !show);
  };

  // logoutFunction
  async function handleLogout() {
    try {
      await auth.signOut;
      navigate("/login");
    } catch (err) {
      console.log("Error while Loggin Out!", err.message);
    }
  }

  return (
    <header className="h-[60px] z-20  fixed top-0 drop-shadow-sm flex justify-center m-auto border-b-2 items-center w-full bg-white">
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
            className={({ isActive }) =>
              `${isActive && " font-semibold"} hover:border-b-2 border-black`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && " font-semibold"} hover:border-b-2 border-black`
            }
            to="shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && " font-semibold"} hover:border-b-2 border-black`
            }
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive && " font-semibold"} hover:border-b-2 border-black`
            }
            to="contact"
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="flex items-center gap-4 ">
          <FaSearch className=" cursor-pointer" />
          <PiUserBold
            onClick={() => navigate("user")}
            className=" cursor-pointer"
            size={20}
          />

          <PiSignOutBold
            className=" cursor-pointer"
            onClick={handleLogout}
            size={20}
          />

          <div
            onClick={() => navigate("wishlist")}
            className="relative cursor-pointer"
          >
            <PiHeartStraightBold className=" z-10 " size={20} />
            <span className="absolute flex items-center justify-center top-0 right-[-5px] text-[10px] mt-[-5px] text-white font-semibold bg-red-600 w-2 h-2 p-2 rounded-full z-30">
              {currentUserData?.wishlistItems.length}
            </span>
          </div>

          <Link className="relative" to={"cart"}>
            <PiShoppingCartBold className=" z-10 cursor-pointer" size={20} />
            <span className="absolute flex items-center justify-center top-0 right-[-5px] text-[10px] mt-[-5px] text-white font-semibold w-2 h-2 bg-black p-2 rounded-full z-30">
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
