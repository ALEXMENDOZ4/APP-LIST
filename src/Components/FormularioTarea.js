import React, {useState} from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const FormularioTarea = ({ tareas, settareas }) => {

  const [input, setinput] = useState("");  
  
  const handleInput = (e) => {
    setinput(e.target.value);
  }  

  const handlerSubmit = (e) => {
    e.preventDefault();
    settareas(
        [
            ...tareas,
            {
                id: Math.floor(Math.random() * 1000),
                texto: input,
                completada: false
            }
        ]  
    );
  };


  return (
    <div>
      <form className="formulario-tareas" onSubmit={handlerSubmit}>
        <input
          type="text"
          className="formulario-tareas__input"
          placeholder="Escribe una tarea"
          value={input}
          onChange={handleInput} 
        />
        <button type="submit" className="formulario-tareas__btn">
          <AiFillPlusCircle className="formulario-tareas__icono-btn" />
        </button>
      </form>
    </div>
  );
};

export default FormularioTarea;
