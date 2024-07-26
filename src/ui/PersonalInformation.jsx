import React from "react";

function PersonalInformation() {
  const userData = [
    { field: "name", name: "amit suthar" },
    { field: "Date of birth", name: "10 mar 2000" },
    { field: "country region", name: "ahemdabad gujrat" },
    { field: "language", name: "English" },
    { field: "email", name: "amitsuthar803@gmail.com" },
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

      <div className="grid grid-cols-2 max-md:grid-cols-1    gap-5">
        {/* card */}

        {userData.map((user, index) => {
          return (
            <div
              key={index}
              className="flex flex-col bg-gray-100 justify-center items-start w-full shadow-md rounded-md p-4"
            >
              <div className="flex justify-between items-center">
                <h3>{user.field}</h3>
                <span>🤵🏻</span>
              </div>
              <p>{user.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonalInformation;
