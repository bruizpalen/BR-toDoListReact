import React from "react";
import { useState } from "react";
const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [listTasks, setLisTasks] = useState([]);

  const handleAddTask = () => {
    if (inputValue !== "") {
      setLisTasks([...listTasks, inputValue]);
    }
  };

  return (
    <>
      <div className="containerCenter  d-flex flex-column justify-content-center align-items-center rounded">
        <p>{`ToDoList :)`} </p>
        <ul className="list-group">
          <li className="list-group-item d-inline-flex">
            <input
              className="form-control me-2"
              placeholder="New task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button className="btn btn-secondary" onClick={handleAddTask}>
              +
            </button>
            {console.log(listTasks)}
          </li>
          {listTasks.map((task, index) => {
            <li className="list-group-item d-inline-flex" key={index}>
              {task}
              <input
                className="form-control me-2"
                placeholder="New task"
                value={listTasks[index]}
                onChange={(e) => setInputValue(e.target.value)}
              ></input>
              {console.log(inputValue)}
              <button className="btn btn-secondary" onClick={handleAddTask}>
                +
              </button>
            </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
