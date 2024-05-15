import React from "react";
import { Link } from "react-router-dom";
import { tooglebanner } from "../../helpers/tooglebanner";

export default function Navbar() {
  return (
    <div className="navbar">
      <button onClick={tooglebanner}>ocultar banner</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
