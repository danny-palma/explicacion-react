import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaUser } from "react-icons/fa";
import "./navbar.css";
import { AuthContext } from "../../helpers/AuthContext";

export default function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <h3>Talento Tech</h3>
      </div>
      <div className="navbar_links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to={isLoggedIn ? "/admin" : "/login"}>
          {isLoggedIn ? <FaUser /> : <FaUserPlus />}
        </Link>
      </div>
    </div>
  );
}
