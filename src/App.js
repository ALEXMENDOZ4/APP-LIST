import React, {useState} from 'react';
import './App.css';
import FormularioTarea from './Components/FormularioTarea';
import Header from './Components/Header';
import ListaTareas from './Components/ListaTareas';

function App() {

  const [tareas, settareas] = useState(
    [
      {
        id:1,
        texto: "hola",
        completada: false
      },
      {
        id:2,
        texto: "mundo",
        completada: true
      }
    ]
  );


  const [completadas, setcompletadas] = useState(false);

  /*console.log(tareas);*/

  return (
    <div className="contenedor">
      <Header completadas={completadas} setcompletadas={setcompletadas} />
      <FormularioTarea tareas={tareas} settareas={settareas} />
      <ListaTareas tareas={tareas} settareas={settareas} completadas ={completadas} />
    </div>
  );
}

export default App;