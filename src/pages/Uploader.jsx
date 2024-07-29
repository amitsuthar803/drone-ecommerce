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
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const UploadDrones = () => {
  const [dronesData, setDronesData] = useState([
    {
      id: 0,

      name: "Glide Guardian",
      path: "https://drive.google.com/file/d/1U_LHBrP8e7gFBCE-UL30cjBCZCBIC_tq/view?usp=sharing",
      price: 999,
      type: "Fun",
      qty: 0,
      description:
        " Find peace and serenity in the skies with this stable and reliable drone, offering smooth and steady flights for pilots of all skill levels.",
    },
    {
      id: 1,
      name: "Task Tracker",
      path: "https://drive.google.com/file/d/1DqFCdKH8PI0Fl4ry1d4O1ZXlEZd3mQRa/view?usp=sharing",
      qty: 0,
      price: 999,
      type: "Industrial",
      description:
        "Stay ahead of the competition with this versatile drone, equipped with advanced features for monitoring, surveillance, and remote sensing applications.",
    },
    {
      id: 2,
      name: "Pixel Pilot",
      path: "https://drive.google.com/file/d/1oWHzNPtKVlFurrcSEVtiyQmrtSA1W8z4/view?usp=sharing",
      qty: 0,
      price: 999,
      type: "Camera",
      description:
        "Take control of your aerial photography with this intuitive and customizable drone, empowering you to capture stunning images and videos with ease.",
    },
    {
      id: 3,
      name: "Lens Lifter",
      path: "https://drive.google.com/file/d/1igEMpWlakrV75falrQ-5CHwtdftl4Pki/view?usp=sharing",
      qty: 0,
      price: 999,
      type: "Camera",
      description:
        "Elevate your photography to new heights with this drone, equipped with a high-quality camera and advanced imaging capabilities for stunning aerial shots.",
    },
    {
      id: 4,
      name: "Crop Cruiser",
      path: "https://drive.google.com/file/d/19oIvQ0020Hkf87XRTBbYL3E6RmEjAQOf/view?usp=sharing",
      qty: 0,
      price: 999,
      type: "Agri",
      description:
        "Navigate fields and farmlands with confidence using this specialized agricultural drone, equipped with sensors and imaging technology for crop monitoring and management.",
    },
    {
      id: 5,
      name: "Harvest Hawk",
      path: "https://drive.google.com/file/d/1mdgcqZ8f5CezRVvvlY3ZjxLi1G4n58Ee/view?usp=sharing",
      qty: 0,
      price: 999,
      type: "Agri",
      description:
        "Boost productivity and yield with this drone, capable of conducting aerial surveys, spraying pesticides, and assisting in crop management tasks.",
    },
    {
      id: 6,
      name: "Marine Maverick",
      path: "https://drive.google.com/file/d/1BcVEjS-MobO-2kONvBC46fwkeBxgMR5r/view?usp=sharing",
      qty: 0,
      price: 999,
      type: "Underwater",
      description:
        "Navigate rivers, lakes, and coastal waters with this agile and versatile underwater drone, perfect for marine biologists, underwater archaeologists, and hobbyists alike.",
    },
    {
      id: 7,
      name: "Velocity Voyager",
      path: "https://drive.google.com/file/d/1S7maHvgPytZS8JN5s96XFWJcmnQ_HgWH/view?usp=sharing",
      qty: 0,
      price: 999,
      type: "Racing",
      description:
        "Embark on epic racing adventures with this agile and aerodynamic drone, capable of reaching blistering speeds and navigating tight turns with precision.",
    },
    {
      id: 8,
      name: "Heavy Hauler",
      path: "https://drive.google.com/file/d/1RUAKdUiy6VygpXLQ1RPSjYAO6tkYviWw/view?usp=sharing",
      qty: 0,
      type: "Industrial",
      price: 999,
      description:
        "Take on the toughest challenges with this heavy-lifting drone, built for industrial operations that demand strength, durability, and reliability.",
    },
    {
      id: 9,
      name: "GeoMapper Pro",
      path: "https://drive.google.com/file/d/1LwyYYK4epRN9uoDZai2bXWYpwQ9HvVkE/view?usp=sharing",
      qty: 0,
      price: 999,
      type: "Li-dar",
      description:
        "The GeoMapper Pro is a cutting-edge LiDAR drone engineered for high-precision mapping and surveying applications. Equipped with advanced LiDAR technology, it delivers accurate 3D models of terrain, structures, and environments, making it an indispensable tool for professionals in industries such as agriculture, construction, and urban planning.",
    },
    {
      id: 10,
      name: "ZoomZap Flyer",
      path: "https://drive.google.com/file/d/1Wjrslwk5E2CHyihd9RefXMFSSbNiYsq9/view?usp=sharing",
      price: 999,
      type: "Fun",
      qty: 0,
      description:
        "Feel the thrill of high-speed flights and exhilarating aerial maneuvers with this fun-loving drone designed for recreational pilots.",
    },
  ]);

  const uploadDronesData = async () => {
    try {
      const productsCollection = collection(db, "Products");

      const uploadPromises = dronesData.map(async (drone) => {
        const droneWithImage = { ...drone, imageUrl: drone.path };
        delete droneWithImage.path; // Remove the image file/path from the object

        await addDoc(productsCollection, droneWithImage);
      });

      await Promise.all(uploadPromises);
      alert("Drones data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading drones data: ", error);
    }
  };

  return (
    <div>
      <button onClick={uploadDronesData}>Upload Drones Data</button>
    </div>
  );
};

export default UploadDrones;
