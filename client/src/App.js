import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./common/header/Header";
import Main from "./pages/main/Main";
import OrderNow from "./pages/orderNow/OrderNow";
import Promotions from "./pages/promotions/Promotions";
import ContactUs from "./pages/contactUs/ContactUs";

const router = createBrowserRouter([
  { path: "/", element: <Main />, errorElement: <div>404</div> },
  { path: "/ordernow", element: <OrderNow />, errorElement: <div>404</div> },
  {
    path: "/promotions",
    element: <Promotions />,
    errorElement: <div>404</div>,
  },
  { path: "/contactus", element: <ContactUs />, errorElement: <div>404</div> },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
