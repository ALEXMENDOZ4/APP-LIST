import React, {useState} from 'react';
import { AiOutlineBorder,AiFillCheckSquare,AiFillEdit,AiFillDelete } from "react-icons/ai";

const Tareas = ({tarea,Cambiarcheck,editarTarea,eliminarTarea}) => {

    const [editando, seteditando] = useState(false);
    const [nueva, setnueva] = useState(tarea.texto);

    const Cambiarboolean = () => {
        seteditando(!editando);
    }

    const cambiarNuevaTarea = (e) => {
        setnueva(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nueva );
        seteditando(false);
    }

    return (
        <li className="lista-tareas__tarea">
            {tarea.completada ? <AiFillCheckSquare className="lista-tareas__icono lista-tareas__icono-check" onClick={() => Cambiarcheck(tarea.id)} /> : <AiOutlineBorder className="lista-tareas__icono lista-tareas__icono-check" onClick={() => Cambiarcheck(tarea.id)} />}
            <div className="lista-tareas__texto">
                { editando ? 
                    <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                        <input type="text" className="formulario-editar-tarea__input" value={nueva} onChange={cambiarNuevaTarea}/>
                        <button type="submit" className="formulario-editar-tarea__btn">Actualizar</button>
                    </form>
                  : 
                  tarea.texto  
                }
            </div>
            <div className="lista-tareas__contenedor-botones">
                <AiFillEdit className="lista-tareas__icono lista-tareas__icono-accion" onClick={Cambiarboolean}/>
                <AiFillDelete className="lista-tareas__icono lista-tareas__icono-accion" onClick={() => eliminarTarea(tarea.id)}/>
            </div>
        </li>      
    )
}

export default Tareas;
