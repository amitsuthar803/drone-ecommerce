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
    <div className="flex bg-gray-200 h-full max-md:rounded-lg flex-col justify-start max-md:p-2 p-5  max-md:w-full items-center m-auto">
      <ButtonGroup
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        buttons={buttons}
      />
    </div>
  );
}

export default UserOptions;
