/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const DroneContext = createContext();

function DroneProvider({ children }) {
  const [currentLogUser, setCurrentLogUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dronesData, setDronesData] = useState([]);
  const [user, setUser] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrones = async () => {
      const dronesCollection = collection(db, "Products");
      const dronesSnapshot = await getDocs(dronesCollection);
      const dronesList = dronesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDronesData(dronesList);
    };

    fetchDrones();
  }, []);

  // get data from firebase store
  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCurrentLogUser(docSnap.data());
        } else {
          console.log("user is not logged in");
        }
      });
    };
    fetchUserData();
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  // Function to fetch user document by UID
  async function fetchUserByUID(uid) {
    const userRef = doc(db, "Users", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      console.log("No such user!");
      return null;
    }
  }

  return (
    <DroneContext.Provider
      value={{
        login,
        logout,
        dronesData,
        currentLogUser,
        loading,
        user,
        fetchUserByUID,
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

// eslint-disable-next-line react-refresh/only-export-components
export { DroneProvider, useDroneData };
