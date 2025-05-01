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
import Address from "./pages/profile/Address.jsx";
import Success from "./common/success/Success.jsx";
import MyCart from "./pages/myCart/MyCart.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";

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
        element: (
          <Success
            message1="Congratulations!"
            message2="Your account has been successfully created!"
          />
        ),
      },
      { path: "/profile", element: <Profile /> },
      { path: "/profile/address", element: <Address /> },
      {
        path: "/profile/address/success",
        element: (
          <Success message1="Your address had been successfully changed!" />
        ),
      },
      { path: "/mycart", element: <MyCart /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
