import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Home from "./pages/home/Home.jsx";
import OrderNow from "./pages/orderNow/OrderNow.jsx";
import Menu from "./pages/orderNow/Menu.jsx";
import Promotions from "./pages/promotions/Promotions.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import SignIn from "./pages/signIn/SignIn.jsx";
import Register from "./pages/register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import ChangeAddress from "./pages/profile/ChangeAddress.jsx";
import MyCart from "./pages/myCart/MyCart.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess.jsx";
import RegisterSuccess from "./pages/register/RegisterSuccess.jsx";
import ChangeAddressSuccess from "./pages/profile/ChangeAddressSuccess.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/ordernow",
        element: <OrderNow />,
        children: [{ path: "/ordernow/:category", element: <Menu /> }],
      },
      { path: "/promotions", element: <Promotions /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/signin", element: <SignIn /> },
      { path: "register", element: <Register /> },
      {
        path: "/register/success",
        element: <RegisterSuccess />,
      },
      { path: "/profile", element: <Profile /> },
      { path: "/profile/changeAddress", element: <ChangeAddress /> },
      {
        path: "/profile/changeAddress/success",
        element: <ChangeAddressSuccess />,
      },
      { path: "/mycart", element: <MyCart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/checkout/success", element: <CheckoutSuccess /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
