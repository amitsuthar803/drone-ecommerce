import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaGlobeAsia } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { TbLanguageHiragana } from "react-icons/tb";

function PersonalInformation() {
  const userData = [
    { field: "name", name: "amit suthar", icon: <IoPersonOutline /> },
    { field: "Date of birth", name: "10 mar 2000", icon: <BsCalendar2Date /> },
    {
      field: "country region",
      name: "ahemdabad gujrat",
      icon: <FaGlobeAsia />,
    },
    { field: "language", name: "English", icon: <TbLanguageHiragana /> },
    {
      field: "email",
      name: "amitsuthar803@gmail.com",
      icon: <MdAlternateEmail />,
    },
  ];

  return (
    <div className="p-4">
      <div>
        <h3 className="font-semibold text-lg">Personal information</h3>
        <p className="text-gray-700 text-sm">
          Manage your personal information, including phone numbers and email
          address where you can be contacted.
        </p>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-2 gap-4">
        {/* card */}

        {userData.map((user, index) => {
          return (
            <div
              key={index}
              className="flex mt-4 flex-col bg-gray-200 justify-center items-start w-full shadow-md rounded-md p-4"
            >
              <div className="flex justify-between gap-2 w-full items-center">
                <h3 className="font-medium capitalize">{user.field}</h3>
                {user.icon}
              </div>
              <p className="capitalize mt-2 text-gray-600">{user.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonalInformation;
