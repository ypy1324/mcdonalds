import React from "react";
import Category from "./Category";
import { Outlet } from "react-router-dom";
import "./OrderNow.css";

function OrderNow() {
  return (
    <div>
      <Category />
      <Outlet />
    </div>
  );
}

export default OrderNow;
