import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

function SignUp() {
  // initialize Firebase authenitication and navogation

  const navigate = useNavigate();

  //state variables for managing authentication state, email, password, confirm password, and error messages

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");
  const [username, setUserName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log("user register succesfully");
      console.log(user);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          username: username,
          wishlistItems: [],
          cartItems: [],
          userId: user.uid,
        });
      }
      toast.success("User Registered Successfully!", {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="w-full h-screen flex-col bg-black  justify-center items-center overflow-hidden  flex">
      <div className="flex  flex-col p-20 max-md:p-10  justify-center">
        <span className="flex items-center justify-center gap-4 mb-8">
          <img src="./assets/favicon.png" width={50} alt="" />
          <h2 className="text-white capitalize">Spy World</h2>
        </span>
        <form
          onSubmit={handleRegister}
          className="w-full flex   flex-col max-w-[450px] mx-auto"
        >
          {/* header section with title and welcome message */}
          <div className="w-full flex flex-col  text-white">
            <h3 className="text-4xl font-bold mb-2">Sign Up</h3>
            <p className="text-md mb-4 ">
              Welcome! Please enter your information below to begin.
            </p>
          </div>

          {/* input fields for email and passowrd and confirm password */}
          <div className="w-full flex flex-col mb-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-white"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Re-Enter Password"
              className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {/* error message  */}
          {/* {error && <div className="text-red-500 mb-4">{error}</div>} */}

          {/* {Button to sign up with email and password} */}
          <div className="w-full flex flex-col mb-4">
            <button className="w-full hover:bg-red-600 hover:text-black bg-transparent border p-3 border-white text-white my-2 font-semibold rounded-md">
              Sign Up With Email and Password
            </button>
          </div>

          {/* divide with OR */}
          {/* <div className="w-full flex  items-center justify-center relative py-4">
            <div className="w-full h-[1px] bg-gray-500"></div>
            <p className="text-lg absolute text-gray-500 bg-btn_dark px-2">
              OR
            </p>
          </div> */}

          {/* singUp with google */}
          {/* <button
            // onClick={signUpWithGoogle}
            // disabled={authing}
            className="w-full bg-white mt-2 text-black font-semibold rounded-md p-3 text-center flex justify-center  items-center"
          >
            Sign Up With Google
          </button> */}
        </form>

        {/* Link to login page */}
        <div className="w-full flex items-center justify-center mt-5">
          <p className="text-sm font-normal text-gray-400">
            Already have an account ?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-white cursor-pointer"
            >
              SignIn
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
