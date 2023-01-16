import React, { Component, useState } from "react";

/// Modifica el componente para que se puedan agregar tareas

//Forma Funcional
function App() {
  const [tasks, SetTasks] = useState([
    "Sacar la ropa",
    "Hacer la cama",
    "Leer un rato",
  ]);
  const [task, SetTask] = useState("");

  const handlerChangeValue = (event) => {
    SetTask(event.target.value);
  };

  const addNewValue = (event) => {
    event.preventDefault();
    SetTasks([...tasks, task]);
    SetTask("");
  };
  return (
    <div className="wrapper">
      <div className="list">
        <h3>Por hacer:</h3>
        <ul className="todo">
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <form onSubmit={addNewValue}>
          <input
            type="text"
            id="new-task"
            value={task}
            placeholder="Ingresa una tarea y oprime Enter"
            onChange={handlerChangeValue}
          />
        </form>
      </div>
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="wrapper">
//         <div className="list">
//           <h3>Por hacer:</h3>
//           <ul className="todo">
//             <li>Sacar la ropa</li>
//             <li>Hacer la cama</li>
//             <li>Leer un rato</li>
//           </ul>
//            <form>
//              <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" />
//            </form>
//         </div>
//       </div>
//     )
//   }
// }

export default App;
