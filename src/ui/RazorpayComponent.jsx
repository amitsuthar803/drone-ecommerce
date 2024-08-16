import { useState } from "react";
import { useDroneData } from "../context/DroneContext";

const RazorpayComponent = () => {
  const [amount, setAmount] = useState(60000); // Default amount in paise
  const { nextHandler, placeOrder, currentUser } = useDroneData();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (orderDetails) => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_aQNyeoZFEcWwro", // Replace with your Razorpay key
      amount: 100, // Amount in paise
      currency: "INR",
      name: "Spy World",
      description: "Test Transaction",
      order_id: orderDetails.id, // Replace with order_id
      handler: function (response) {
        alert(
          `Payment successful! Payment ID: ${response.razorpay_payment_id}`
        );
        // Call placeOrder with necessary parameters
        placeOrder(currentUser?.userId, currentUser?.cartItems, amount);
      },
      prefill: {
        name: currentUser?.name,
        email: currentUser?.email,
        contact: currentUser?.phone,
      },
      theme: {
        color: "#F37254",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handlePlaceOrder = async () => {
    // Simulate creating an order and getting order details
    const orderDetails = {
      userId: currentUser?.userId,
      cartItems: currentUser?.cartItems,
      totalAmount: 60000, // Example total amount in INR
    };

    // Call the placeOrder function to create the order in Firestore
    await placeOrder(
      orderDetails.userId,
      orderDetails.cartItems,
      orderDetails.totalAmount / 100
    );

    // Proceed to Razorpay payment
    displayRazorpay(orderDetails);
  };

  return (
    <div>
      <button
        className="bg-black py-2 px-5 text-white uppercase text-sm"
        onClick={() => handlePlaceOrder(currentUser)}
      >
        Place Order
      </button>
    </div>
  );
};

export default RazorpayComponent;
