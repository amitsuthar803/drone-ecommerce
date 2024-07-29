/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import toast from "react-hot-toast";

const DroneContext = createContext();

function DroneProvider({ children }) {
  const [wishlistData, setWishListData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dronesData, setDronesData] = useState([]);
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState({});
  const [wishlistDrones, setWishlistDrones] = useState([]); // State to store wishlist drones

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
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const unsubscribeFromDoc = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setCurrentUser(docSnap.data());
            setWishListData(userData.wishlistItems);

            // Update wishlistData whenever the user document changes

            setWishListData(userData.wishlistItems);
          } else {
            console.log("User document does not exist");
          }
        });

        // Cleanup subscription on unmount
        return () => unsubscribeFromDoc();
      } else {
        setCurrentUser(null);
      }
    });

    // Cleanup auth state listener on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (wishlistData?.length > 0) {
      const fetchWishlistDrones = async () => {
        const wishlistDronesData = dronesData.filter((drone) =>
          wishlistData.includes(drone.id)
        );
        setWishlistDrones(wishlistDronesData);
      };

      fetchWishlistDrones();
    } else {
      setWishlistDrones([]);
    }
  }, [wishlistData, dronesData]);

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

  // old code base
  const steps = ["Cart", "Address", "Payment"];

  const nextHandler = (navigate) => {
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  };

  const PrevHandler = (navigate) => {
    currentStep === steps.length
      ? setComplete(false)
      : setCurrentStep((prev) => prev - 1);
  };

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

  const badgeColor = (type) => {
    switch (type) {
      case "Underwater":
        return "bg-[#0080a721] text-[#0081a7]";
      case "Fun":
        return "bg-[#ef233b1d] text-[#ef233c]";
      case "Industrial":
        return "bg-[#ffb9082f] text-[#ee9b00]";
      case "Agri":
        return "bg-[#57cc9924] text-[#43aa8b]";
      case "Li-dar":
        return "bg-[#90a95534] text-[#31572c]";
      case "Camera":
        return "bg-[#e4e4e4] text-[#1C2C42]";
      case "Racing":
        return "bg-[#1c2c4218] text-[#bf0603]";
      default:
        return ""; // Default to no border
    }
  };

  const updateCart = async (productId, action, qty = 1) => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please log in to update your cart.");
      return;
    }

    const userCartRef = doc(db, "Users", user.uid);

    try {
      const docSnap = await getDoc(userCartRef);
      if (!docSnap.exists()) {
        alert("User data not found.");
        return;
      }

      const userData = docSnap.data();
      const cartItems = userData.cartItems || [];

      const productInCart = cartItems.find((item) => item.id === productId);

      switch (action) {
        case "add":
          if (productInCart) {
            if (productInCart.qty === qty) {
              toast.error(
                "Item already added to the cart with the same quantity."
              );
              return;
            }
            const updatedCartItems = cartItems.map((item) =>
              item.id === productId ? { ...item, qty } : item
            );
            await updateDoc(userCartRef, { cartItems: updatedCartItems });
            toast.success("Item quantity updated.");
          } else {
            const selectedDrone = dronesData.find(
              (drone) => drone.id === productId
            );
            if (selectedDrone) {
              const updatedCartItems = [
                ...cartItems,
                { ...selectedDrone, qty },
              ];
              await updateDoc(userCartRef, { cartItems: updatedCartItems });
              toast("Item added to the cart", { icon: "➕" });
            }
          }
          break;
        case "remove":
          if (productInCart && productInCart.qty > 1) {
            const updatedCartItems = cartItems.map((item) =>
              item.id === productId ? { ...item, qty: item.qty - 1 } : item
            );
            await updateDoc(userCartRef, { cartItems: updatedCartItems });
            toast.success("Item quantity decreased.");
          } else {
            const updatedCartItems = cartItems.filter(
              (item) => item.id !== productId
            );
            await updateDoc(userCartRef, { cartItems: updatedCartItems });
            toast("Item removed from the cart", { icon: "❌" });
          }
          break;
        default:
          toast.error("Invalid action.");
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const handleWishlist = async (productId) => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please log in to update your wishlist.");
      return;
    }

    const userRef = doc(db, "Users", user.uid);

    try {
      // Fetch the user document
      const userDocSnap = await getDoc(userRef);
      if (!userDocSnap.exists()) {
        console.log("User data not found.");
        return;
      }

      const userData = userDocSnap.data();
      const wishlistItems = userData.wishlistItems || [];

      // Determine if the product is already in the wishlist
      const isInWishlist = wishlistItems.includes(productId);

      // Update the user's wishlist
      const updatedWishlistItems = isInWishlist
        ? wishlistItems.filter((itemId) => itemId !== productId)
        : [...wishlistItems, productId];

      await updateDoc(userRef, { wishlistItems: updatedWishlistItems });

      // Fetch all products and find the one with the matching productId
      const productsCollection = collection(db, "Products");
      const productsSnapshot = await getDocs(productsCollection);
      let productDocRef;
      let productData;

      productsSnapshot.forEach((doc) => {
        const product = doc.data();
        if (product.id === productId) {
          productDocRef = doc.ref;
          productData = product;
        }
      });

      if (!productDocRef || !productData) {
        console.log("Product data not found.");
        return;
      }

      const updatedProductWishlistStatus = !productData.wishlist;

      await updateDoc(productDocRef, {
        wishlist: updatedProductWishlistStatus,
      });

      toast.success(
        isInWishlist ? "Item removed from wishlist" : "Item added to wishlist"
      );
    } catch (error) {
      console.error("Error updating wishlist:", error);
      toast.error("Failed to update wishlist");
    }
  };

  // Function to handle removing a product from cart by productId
  const removeFromCart = async (productId) => {
    const user = auth.currentUser;

    console.log(wishlistData);
    if (!user) {
      toast.error("Please log in to remove items from your cart.");
      return;
    }

    const userRef = doc(db, "Users", user.uid);

    try {
      // Fetch the user document
      const userDocSnap = await getDoc(userRef);
      if (!userDocSnap.exists()) {
        toast.error("User not found.");
        return;
      }

      const userData = userDocSnap.data();
      const cartItems = userData.cartItems || [];

      // Check if the item is in the cart
      const itemInCart = cartItems.some((item) => item.id === productId);

      if (!itemInCart) {
        toast.error("Item is not in the cart.");
        return;
      }

      // Remove the product from the user's cart
      const updatedCartItems = cartItems.filter(
        (item) => item.id !== productId
      );

      await updateDoc(userRef, { cartItems: updatedCartItems });

      // Fetch all products and find the one with the matching productId
      const productsCollection = collection(db, "Products");
      const productsSnapshot = await getDocs(productsCollection);
      let productDocRef;
      let productData;

      productsSnapshot.forEach((doc) => {
        const product = doc.data();
        if (product.id === productId) {
          productDocRef = doc.ref;
          productData = product;
        }
      });

      if (!productDocRef || !productData) {
        toast.error("Product data not found.");
        return;
      }

      // Update the product's quantity
      await updateDoc(productDocRef, { qty: 0 });

      toast("Item removed from the cart", {
        icon: "❌",
      });
    } catch (error) {
      console.error("Error removing item from cart:", error);
      toast.error("Failed to remove item from cart");
    }
  };

  // Function to clear cart items
  const clearCart = async () => {
    if (!currentUser) {
      toast.error("Please log in to clear your cart.");
      return;
    }

    const userRef = doc(db, "Users", currentUser.userId);

    try {
      await updateDoc(userRef, {
        cartItems: [],
      });
      toast("Cart cleared successfully", {
        icon: "🗑️",
      });

      setCurrentUser((prevUser) => ({
        ...prevUser,
        cartItems: [],
      }));
    } catch (error) {
      console.error("Error clearing cart:", error);
      toast.error("Failed to clear cart. Please try again.");
    }
  };

  // function to calculatr total price based on quantity
  function calculateTotalPrice(user) {
    let totalPrice = 0;
    user.cartItems.forEach((item) => {
      totalPrice += item.qty * item.price;
    });
    return totalPrice;
  }

  return (
    <DroneContext.Provider
      value={{
        login,
        logout,
        dronesData,
        currentUser,
        loading,
        user,
        fetchUserByUID,
        updateCart,
        handleWishlist,
        removeFromCart,
        clearCart,
        calculateTotalPrice,
        currentStep,
        category,
        badgeColor,
        wishlistData,
        setSelectedDrone,
        selectedDrone,
        wishlistDrones,
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
