import React, {useState, useEffect} from 'react';
import './App.css';
import FormularioTarea from './Components/FormularioTarea';
import Header from './Components/Header';
import ListaTareas from './Components/ListaTareas';

function App() {
  const tareasGuardadas = localStorage.getItem("tareas") ? 
  JSON.parse(localStorage.getItem("tareas")) : [];


  const [tareas, settareas] = useState(tareasGuardadas);

  /*localStorage configuracion*/
  useEffect(()=>{
    localStorage.setItem("tareas", JSON.stringify(tareas));
  },[tareas]);

  let configMostrarCompletadas = "";
  if(localStorage.getItem("mostrarCompletadas" === null)){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem("mostrarCompletadas") === "true";
  }

  const [completadas, setcompletadas] = useState(configMostrarCompletadas);

  useEffect(()=>{
    localStorage.setItem("mostrarCompletadas", setcompletadas.toString());
  },[setcompletadas]);;

  return (
    <div className="contenedor">
      <Header completadas={completadas} setcompletadas={setcompletadas} />
      <FormularioTarea tareas={tareas} settareas={settareas} />
      <ListaTareas tareas={tareas} settareas={settareas} completadas ={completadas} />
    </div>
  );
}

export default App;