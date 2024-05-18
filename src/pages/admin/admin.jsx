import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import { AuthContext } from "../../helpers/AuthContext";

export default function Admin() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="page_admin">
      <div className="contenedor_Cont_Med">
        <h1>PAGINA DE ADMINISTRACION </h1>
      </div>

      <div className="containerPrin8">
        <button onClick={logout}>Salir</button>
      </div>
    </div>
  );
}
