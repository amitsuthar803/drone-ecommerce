import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import CheckoutPage from "./pages/CheckoutPage";
import AddressPage from "./pages/AddressPage";
import PaymentPage from "./pages/PaymentPage";
import WishlistPage from "./pages/WishlistPage";
import UserPage from "./pages/UserPage";
import ScrollToTop from "./ui/ScrollToTop";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthRoute from "./auth/AuthRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            element={
              <AuthRoute>
                <AppLayout />
              </AuthRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="cart" element={<Cart />}>
              <Route index element={<CheckoutPage />} />
              <Route path="address" element={<AddressPage />} />
              <Route path="payment" element={<PaymentPage />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 1000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </>
  );
}

export default App;
