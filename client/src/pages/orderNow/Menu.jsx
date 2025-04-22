import React from "react";
import { useParams } from "react-router-dom";

function Menu() {
  const params = useParams();

  return <div>{params.category}</div>;
}

export default Menu;
