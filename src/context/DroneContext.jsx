import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

import drone1 from "../../assets/drone1.png";
import drone2 from "../../assets/drone2.png";
import drone3 from "../../assets/drone3.png";
import drone4 from "../../assets/drone4.png";
import drone5 from "../../assets/drone5.png";
import drone6 from "../../assets/drone6.png";
import drone7 from "../../assets/drone7.png";
import drone8 from "../../assets/drone8.png";
import drone9 from "../../assets/drone9.png";
import drone10 from "../../assets/drone10.png";
import drone11 from "../../assets/drone11.png";

const DroneContext = createContext();

function DroneProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [selectedDrone, setSelectedDrone] = useState({});

  const category = [
    "all",
    "fun",
    "agri",
    "industrial",
    "camera",
    "racing",
    "underwater",
    "Li-dar",
  ];

  const dronesData = [
    {
      id: 0,
      name: "drone1",
      path: drone1,
      price: 999,
      type: "fun",
    },
    {
      id: 1,
      name: "drone2",
      path: drone2,
      price: 999,
      type: "industrial",
    },
    {
      id: 2,
      name: "drone3",
      path: drone3,
      price: 999,
      type: "camera",
    },
    {
      id: 3,
      name: "drone4",
      path: drone4,
      price: 999,
      type: "camera",
    },
    {
      id: 4,
      name: "drone5",
      path: drone5,
      price: 999,
      type: "agri",
    },
    {
      id: 5,
      name: "drone6",
      path: drone6,
      price: 999,
      type: "agri",
    },
    {
      id: 6,
      name: "drone7",
      path: drone7,
      price: 999,
      type: "underwater",
    },
    {
      id: 7,
      name: "drone8",
      path: drone8,
      price: 999,
      type: "racing",
    },
    {
      id: 8,
      name: "drone9",
      path: drone9,
      price: 999,
      type: "industrial",
    },
    {
      id: 9,
      name: "drone10",
      path: drone10,
      price: 999,
      type: "Li-dar",
    },
    {
      id: 10,
      name: "drone11",
      path: drone11,
      price: 999,
      type: "fun",
    },
  ];
  return (
    <DroneContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedDrone,
        setSelectedDrone,
        category,
        dronesData,
      }}
    >
      {children}
    </DroneContext.Provider>
  );
}

DroneProvider.propTypes = {
  children: PropTypes.node,
};

function useDroneData() {
  const context = useContext(DroneContext);
  if (context === undefined)
    throw new Error("DroneContext was used outside of DroneProvider");
  return context;
}

export { DroneProvider, useDroneData };
