import React from "react";
import Header from "./common/header/Header.jsx";
import { Outlet } from "react-router-dom";
import CartButton from "./pages/cartButton/CartButton.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <CartButton />
    </div>
  );
}

export default App;
