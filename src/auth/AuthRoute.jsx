import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoading(false);
        console.log("unauthorized");
        setLoading(false);
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [auth, navigate]);

  if (loading) return <p>Loading...</p>;

  return <div>{children}</div>;
};

export default AuthRoute;
