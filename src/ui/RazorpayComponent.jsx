import { useState } from "react";
import { useDroneData } from "../context/DroneContext";

const RazorpayComponent = () => {
  const [amount, setAmount] = useState(60000); // Default amount in paise
  const { nextHandler } = useDroneData();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    nextHandler();
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const order = {
      id: "order_DBJOWzybf0sJbb",
      currency: "INR",
      amount: amount, // 50000 paise = INR 500
    };

    const options = {
      key: "rzp_test_aQNyeoZFEcWwro",
      amount: order.amount,
      currency: order.currency,
      name: "Your Company Name",
      description: "Test Transaction",
      image: "https://your_logo_url",
      order_id: order.id,
      handler: function (response) {
        alert(
          "Payment successful. Payment ID: " + response.razorpay_payment_id
        );
        alert("Order ID: " + response.razorpay_order_id);
        alert("Signature: " + response.razorpay_signature);
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <button
        className="bg-black py-2 px-5 text-white uppercase text-sm"
        onClick={displayRazorpay}
      >
        Place Order
      </button>
    </div>
  );
};

export default RazorpayComponent;
