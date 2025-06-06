import React, { useEffect } from "react";
import Header from "./common/header/Header.jsx";
import { Outlet } from "react-router-dom";
import CartButton from "./pages/cartButton/CartButton.jsx";
import { useDispatch } from "react-redux";
import { loginUser, clearUser } from "./reducer/userSlice.jsx";
import firebase from "./firebase.jsx";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <CartButton />
    </div>
  );
}

export default App;
