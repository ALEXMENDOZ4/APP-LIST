import React, {useState} from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

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
                id: uuidv4(),
                texto: input,
                completada: false
            }
        ],
    );
        
    setinput("");
  
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
