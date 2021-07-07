import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__titulo">Lista de tareas</h1>
      <button className="header__boton">
        no mostrar completadas
        <AiFillEye className="header__icono" />
        <AiFillEyeInvisible className="header__icono" />
      </button>
    </div>
  );
};

export default Header;
