import React from "react";
import { useDroneData } from "../context/DroneContext";

function Test() {
  const {
    currentLogUser,
    dronesData,
    logout,
    updateCart,
    handleWishlist,
    removeFromCart,
    clearCart,
  } = useDroneData();

  if (currentLogUser) {
    console.log(dronesData);
    console.log(currentLogUser);

    return (
      <div className="flex">
        <div className="flex flex-col justify-start items-start">
          <h2>{currentLogUser.username}</h2>
          <button onClick={logout}>LogOut</button>
          <button onClick={() => updateCart(8, "add", 10)}>Add to cart</button>
          <button onClick={() => handleWishlist(6)}>Add to Wishlist</button>
          <button onClick={() => removeFromCart(8)}>Remove From Cart</button>
          <button onClick={clearCart}>Clear Cart</button>
        </div>

        <div>
          <span>
            <h2>cart item</h2>: {currentLogUser.cartItems.length}
          </span>
          <span>
            <h2>Wishlist item</h2>: {currentLogUser.wishlistItems.length}
          </span>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Test;
