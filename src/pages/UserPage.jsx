import { useState } from "react";
import UserOptions from "../ui/UserOptions";
import RenderComponent from "../ui/RenderComponent";

function UserPage() {
  const [isSelected, setIsSelected] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-between border-b-2 py-2">
        <h2 className="font-semibold text-heading">Amit&apos;s Account</h2>
        <button className="bg-black py-2 px-5 text-white uppercase text-sm">
          Logout
        </button>
      </div>

      <div className="flex justify-between  max-md:flex-col h-full">
        <div className="max-md:w-full  w-1/3">
          <UserOptions isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>
        <div className="flex-1 ">
          <RenderComponent index={isSelected} />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
