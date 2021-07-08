import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Header = ({completadas, setcompletadas}) => {

  const toggleCompletadas = () => {
    setcompletadas(!completadas);
  }

  return (
    <div className="header">
      <h1 className="header__titulo">Lista de tareas</h1>
      {setcompletadas  ?

      <button className="header__boton"
      onClick={() => toggleCompletadas()}
        
      >
         No mostrar completadas
        <AiFillEyeInvisible className="header__icono-boton" className="ms-2 mt-1"/>
      </button>
      :
      <button className="header__boton"
      onClick={() => toggleCompletadas()}
      >
        Mostrar completadas
        <AiFillEye className="header__icono-boton" className="ms-2 mt-1" />
      </button>
      }
    </div>
  );
};

export default Header;
