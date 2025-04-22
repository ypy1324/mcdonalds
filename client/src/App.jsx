import React from "react";
import Header from "./common/header/Header.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
