import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./common/header/Header.jsx";
import Main from "./pages/main/Main.jsx";
import OrderNow from "./pages/orderNow/OrderNow.jsx";
import Promotions from "./pages/promotions/Promotions.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import SignIn from "./pages/signIn/SignIn.jsx";
import Register from "./pages/register/Register.jsx";
import RegisterSuccess from "./pages/register/RegisterSuccess.jsx";
import Profile from "./pages/profile/Profile.jsx";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <Main /> },
      {
        path: "/ordernow",
        element: <OrderNow />,
      },
      { path: "/promotions", element: <Promotions /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/signin", element: <SignIn /> },
      { path: "register", element: <Register /> },
      { path: "/register/success", element: <RegisterSuccess /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
