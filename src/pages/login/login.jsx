import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../../helpers/AuthContext";

const adminUser = "admin";
const adminPassword = "admin";
export default function Login() {
  const [nombre_usuario, changeNombre_usuario] = useState("");
  const [password_usuario, changePassword_usuario] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  function handle_login() {
    if (nombre_usuario === adminUser && password_usuario === adminPassword) {
      alert("login correcto");
      login();
      navigate("/admin");
    } else {
      alert("Usuario o Contraseña incorrecta");
    }
  }
  return (
    <div className="page_login">
      <h1>Login</h1>
      <form action="#" onSubmit={(ev) => ev.preventDefault()}>
        <input
          type="text"
          name="nombre_usuario"
          id="input_nombre_usuario"
          onChange={(ev) => changeNombre_usuario(ev.target.value)}
          autoComplete="false"
          placeholder="Usuario"
        />
        <input
          type="password"
          name="password_usuario"
          id="input_password_usuario"
          onChange={(ev) => changePassword_usuario(ev.target.value)}
          autoComplete="false"
          placeholder="Contraseña"
        />
        <button onClick={() => handle_login()}>Entrar</button>
      </form>
    </div>
  );
}
