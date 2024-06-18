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
  const [selectedCategory, setSelectedCategory] = useState("All");

  // State for currently logged-in user
  const [currentUserId, setCurrentUserId] = useState(0);

  const [selectedDrone, setSelectedDrone] = useState({});

  const [users, setUsers] = useState([
    {
      id: 0,
      name: "amit suthar",
      wishlistItems: [2, 1],
      cartItems: [],
    },
    {
      id: 1,
      name: "lochan suthar",
      wishlistItems: [],
      cartItems: [],
    },
  ]);

  const [dronesData, setDronesData] = useState([
    {
      id: 0,

      name: "Glide Guardian",
      path: drone1,
      price: 999,
      type: "Fun",
      description:
        " Find peace and serenity in the skies with this stable and reliable drone, offering smooth and steady flights for pilots of all skill levels.",
    },
    {
      id: 1,
      name: "Task Tracker",
      path: drone2,

      price: 999,
      type: "Industrial",
      description:
        "Stay ahead of the competition with this versatile drone, equipped with advanced features for monitoring, surveillance, and remote sensing applications.",
    },
    {
      id: 2,
      name: "Pixel Pilot",
      path: drone3,

      price: 999,
      type: "Camera",
      description:
        "Take control of your aerial photography with this intuitive and customizable drone, empowering you to capture stunning images and videos with ease.",
    },
    {
      id: 3,
      name: "Lens Lifter",
      path: drone4,

      price: 999,
      type: "Camera",
      description:
        "Elevate your photography to new heights with this drone, equipped with a high-quality camera and advanced imaging capabilities for stunning aerial shots.",
    },
    {
      id: 4,
      name: "Crop Cruiser",
      path: drone5,

      price: 999,
      type: "Agri",
      description:
        "Navigate fields and farmlands with confidence using this specialized agricultural drone, equipped with sensors and imaging technology for crop monitoring and management.",
    },
    {
      id: 5,
      name: "Harvest Hawk",
      path: drone6,

      price: 999,
      type: "Agri",
      description:
        "Boost productivity and yield with this drone, capable of conducting aerial surveys, spraying pesticides, and assisting in crop management tasks.",
    },
    {
      id: 6,
      name: "Marine Maverick",
      path: drone7,

      price: 999,
      type: "Underwater",
      description:
        "Navigate rivers, lakes, and coastal waters with this agile and versatile underwater drone, perfect for marine biologists, underwater archaeologists, and hobbyists alike.",
    },
    {
      id: 7,
      name: "Velocity Voyager",
      path: drone8,

      price: 999,
      type: "Racing",
      description:
        "Embark on epic racing adventures with this agile and aerodynamic drone, capable of reaching blistering speeds and navigating tight turns with precision.",
    },
    {
      id: 8,
      name: "Heavy Hauler",
      path: drone9,

      type: "Industrial",
      price: 999,
      description:
        "Take on the toughest challenges with this heavy-lifting drone, built for industrial operations that demand strength, durability, and reliability.",
    },
    {
      id: 9,
      name: "GeoMapper Pro",
      path: drone10,

      price: 999,
      type: "Li-dar",
      description:
        "The GeoMapper Pro is a cutting-edge LiDAR drone engineered for high-precision mapping and surveying applications. Equipped with advanced LiDAR technology, it delivers accurate 3D models of terrain, structures, and environments, making it an indispensable tool for professionals in industries such as agriculture, construction, and urban planning.",
    },
    {
      id: 10,
      name: "ZoomZap Flyer",
      path: drone11,
      price: 999,
      type: "Fun",
      description:
        "Feel the thrill of high-speed flights and exhilarating aerial maneuvers with this fun-loving drone designed for recreational pilots.",
    },
  ]);

  const category = [
    "All",
    "Fun",
    "Agri",
    "Industrial",
    "Camera",
    "Racing",
    "Underwater",
    "Li-dar",
  ];

  // Function to update the cart for the current user
  const updateCart = (productId, action) => {
    if (currentUserId === null) return;

    const currentUser = users.find((user) => user.id === currentUserId);
    if (!currentUser) return;

    const productInCart = currentUser.cartItems.some(
      (item) => item.id === productId
    );

    if (action === "add" && productInCart) {
      alert("Item already added to the cart");
      return;
    }

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === currentUser.id
          ? {
              ...user,
              cartItems:
                action === "add"
                  ? [
                      ...user.cartItems,
                      dronesData.find((drone) => drone.id === productId),
                    ]
                  : user.cartItems.filter((item) => item.id !== productId),
            }
          : user
      )
    );
  };

  const handleWishlist = (productId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === currentUserId
          ? {
              ...user,
              wishlistItems: user.wishlistItems.includes(productId)
                ? user.wishlistItems.filter((itemId) => itemId !== productId)
                : [...user.wishlistItems, productId],
            }
          : user
      )
    );

    setDronesData((prevDroneData) =>
      prevDroneData.map((drone) =>
        drone.id === productId ? { ...drone, wishlist: !drone.wishlist } : drone
      )
    );
  };

  return (
    <DroneContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedDrone,
        setSelectedDrone,
        category,
        dronesData,
        handleWishlist,
        setCurrentUserId,
        currentUserId,
        users,
        updateCart,
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
