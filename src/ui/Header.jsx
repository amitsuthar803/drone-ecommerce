import { BsBox2Heart, BsCart3, BsPerson, BsSearch } from "react-icons/bs";
import { RiRobotFill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className=" h-[75px] drop-shadow-sm flex justify-center m-auto border-b-2 items-center w-full bg-white">
      <div className=" w-[1111px] flex justify-between items-center">
        <h2 onClick={() => navigate("/")} className="flex cursor-pointer gap-2">
          <RiRobotFill size={20} />
          Spy World
        </h2>

        <nav className="gap-4 flex items-center">
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
