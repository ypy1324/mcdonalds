import React, { useEffect } from "react";
import Header from "./common/header/Header.jsx";
import { Outlet } from "react-router-dom";
import CartButton from "./common/cartButton/CartButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearUser } from "./reducer/userSlice.jsx";
import firebase from "./firebase.jsx";
import axios from "axios";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        let body = { firebaseUid: userInfo.uid };
        axios
          .post("/api/user/getUserByUid", body)
          .then((res) => {
            if (res.data.success) {
              const userData = res.data.user;
              dispatch(
                loginUser({
                  uid: userData._id,
                  displayName: userData.displayName,
                  email: userData.email,
                  rewardPoints: userData.rewardPoints,
                  address: userData.address,
                })
              );
            } else {
              console.log("Failed to fetch user data");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      {user.uid && <CartButton />}
    </div>
  );
}

export default App;
