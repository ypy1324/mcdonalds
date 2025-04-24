import React from "react";
import { useParams } from "react-router-dom";

function Menu() {
  const params = useParams();

  return <div className="menu-wrapper">{params.category}</div>;
}

export default Menu;
