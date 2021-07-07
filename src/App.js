import React, {useState} from 'react';
import './App.css';
import FormularioTarea from './Components/FormularioTarea';
import Header from './Components/Header';

function App() {

  const [tareas, settareas] = useState(
    [
      {
        id: Math.floor(Math.random() * 1000),
        texto: "caminar",
        completada: false
      },
      {
        id: Math.floor(Math.random() * 1000),
        texto: "buscar",
        completada: false
      }
    ]
  );

  console.log(tareas);

  return (
    <div className="contenedor">
      <Header />
      <FormularioTarea tareas={tareas} settareas={settareas} />
    </div>
  );
}

export default App;