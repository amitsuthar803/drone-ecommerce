import React from "react";
import { useDroneData } from "../context/DroneContext";

function Test() {
  const { fetchUserByUID, currentLogUser, dronesData } = useDroneData();

  if (currentLogUser) {
    console.log(dronesData);
    console.log(currentLogUser);
    return <h2>{currentLogUser.username}</h2>;
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Test;
