import React from 'react';
import Tareas from './Tareas';

const ListaTareas = ({tareas, settareas, completadas}) => {

    const Cambiarcheck = (id) => {
        settareas(tareas.map((tarea) => {
            if(tarea.id === id){
                return {...tarea, completada: !tarea.completada}
            }

            return tarea;
        }));
    }

    const editarTarea = (id, nueva) => {
        settareas(tareas.map((tarea) => {
            if(tarea.id === id){
                return {...tarea, texto: nueva}
            }
            
            return tarea;
        }));
    }

    const eliminarTarea = (id) => {
        settareas(tareas.filter((tarea) => {
            if(tarea.id !== id){
                return tarea;
            }
            
            return ;
        }));
    }

    return (
        <ul className="lista-tareas" style={{paddingLeft: "0px"}}>
            {
            tareas.length > 0 ? tareas.map((tarea) => {
               if(completadas){

                   return <Tareas 
                                key={tarea.id} 
                                tarea={tarea}
                                Cambiarcheck={Cambiarcheck}
                                editarTarea={editarTarea}
                                eliminarTarea={eliminarTarea}
                          />
               } else if(!tarea.completada){
                return <Tareas 
                            key={tarea.id} 
                            tarea={tarea}
                            Cambiarcheck={Cambiarcheck}
                            editarTarea={editarTarea}
                            eliminarTarea={eliminarTarea}
                        />
               }
               return; 
            })
            : <div className="lista-tareas__mensaje">No hay tareas agregadas</div>    
            }
        </ul>
    )
}

export default ListaTareas;
