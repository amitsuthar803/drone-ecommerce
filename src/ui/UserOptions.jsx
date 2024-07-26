import { useState } from "react";
import ButtonGroup from "./ButtonGroup";

function UserOptions({ isSelected, setIsSelected }) {
  const buttons = [
    "personal information",
    "billing & payments",
    "order history",
    "gift cards",
  ];

  return (
    <div className="flex bg-gray-100 h-full flex-col justify-start p-5  max-md:w-full items-center m-auto">
      <ButtonGroup
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        buttons={buttons}
      />
    </div>
  );
}

export default UserOptions;
