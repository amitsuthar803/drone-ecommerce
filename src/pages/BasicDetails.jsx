// src/components/BasicDetails.jsx
import React, { useState } from "react";

const BasicDetails = () => {
  const [details, setDetails] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    dateOfBirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
    console.log(details);
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const user = auth.currentUser;

  //     try {
  //       await firestore
  //         .collection("users")
  //         .doc(user.uid)
  //         .set(details, { merge: true });
  //       history.push("/main");
  //     } catch (error) {
  //       console.error("Error updating profile:", error.message);
  //     }
  //   };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg"
        //   onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Basic Details</h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={details.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={details.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={details.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 mb-2" htmlFor="dateOfBirth">
            Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            value={details.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Save Details
        </button>
      </form>
    </div>
  );
};

export default BasicDetails;
