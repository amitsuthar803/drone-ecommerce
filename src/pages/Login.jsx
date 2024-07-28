import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import toast from "react-hot-toast";

function Login() {
  // initialize Firebase authentication and navigation

  const navigate = useNavigate();

  // state Variables for managing state, email, password, and error message

  const [email, setEmail] = useState("amitsuthar@test.com");
  const [password, setPassword] = useState("123456");
  // const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged in succesfull");
      toast.success("User logged in succesfull", {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="w-full h-screen bg-black justify-center items-center  flex">
      <div className="w-full flex flex-col p-20 max-md:p-10 justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col max-w-[450px] mx-auto"
        >
          <div className="w-full flex flex-col mb-10 text-white">
            <h3 className="text-4xl font-bold mb-2">Login</h3>
            <p>Welcome Back! Please enter your details.</p>
          </div>
          {/* input */}
          <div className="w-full flex flex-col mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-white py-2 mb-2 bg-transparent border-b border-gray-500 focus:outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={123456}
              className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* button */}
          <div className="w-full flex flex-col mb-4">
            <button
              className="w-full bg-transparent border p-3 border-white text-white my-2 font-semibold rounded-md"
              // onClick={signInWithEmail}
              // disabled={authing}
            >
              Log In With Email and Password
            </button>
          </div>
          {/* error message */}
          {/* {error && <div className="text-red-500 mb-4">{error}</div>} */}

          {/* Divider with 'OR'  text*/}
          <div className="w-full flex items-center  justify-center relative py-4">
            <div className="w-full h-[1px] bg-trueGray-500"></div>
            <p className="text-lg absolute text-gray-500 bg-btn_dark px-2">
              OR
            </p>
          </div>

          {/* {button to login with google} */}
          {/* <button
            className="w-full bg-white justify-center mt-4 text-black font-semibold rounded-md p-3 text-center flex items-center"
            // onClick={signInWithGoogle}
            // disabled={authing}
          >
            Log In With Google
          </button> */}
        </form>
        {/* link to sign up page */}
        <div className="w-full flex items-center justify-center mt-5 ">
          <p className="text-sm font-normal text-gray-400">
            Don&apos;t have an account?
            <span
              onClick={() => navigate("/signup")}
              className="text-white cursor-pointer "
            >
              SignUp
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
