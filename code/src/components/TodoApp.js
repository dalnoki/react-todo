import { useState } from "react";

import "../scss/TodoApp.scss";
import Todo from "../components/Todo";
import AddNewTodo from "./AddNewTodo";

export default function TodoApp() {
  const [allTodos, setAllTodos] = useState([
    {
      description: "Jog in the park",
      isCompleted: false,
      id: 1,
    },
    {
      description: "Walk the dog",
      isCompleted: false,
      id: 2,
    },
    {
      description: "Walk the dog",
      isCompleted: false,
      id: 3,
    },
  ]);
  const [filteredTodos, setFilteredTodos] = useState([
    {
      description: "Jog in the park",
      isCompleted: false,
      id: 1,
    },
    {
      description: "Walk the dog",
      isCompleted: false,
      id: 2,
    },
    {
      description: "Walk the dog",
      isCompleted: false,
      id: 3,
    },
  ]);

  const notCompletedItems = allTodos.filter(
    (todo) => todo.isCompleted === false
  ).length;

  const clearCompleted = () => {
    const filtered = allTodos.filter((todo) => todo.isCompleted === false);
    setAllTodos(filtered);
    setFilteredTodos(filtered);
  };

  const showAll = (e) => {
    setFilteredTodos(allTodos);
  };
  const showActive = (e) => {
    const filtered = allTodos.filter((todo) => todo.isCompleted === false);
    setFilteredTodos(filtered);
  };
  const showCompleted = (e) => {
    const filtered = allTodos.filter((todo) => todo.isCompleted === true);
    setFilteredTodos(filtered);
  };

  return (
    <div className="todo-app">
      <AddNewTodo
        setAllTodos={setAllTodos}
        allTodos={allTodos}
        setFilteredTodos={setFilteredTodos}
      />
      <ul className="todo-list">
        {filteredTodos.map((currentTodo) => {
          return (
            <Todo
              todo={currentTodo}
              allTodos={allTodos}
              setAllTodos={setAllTodos}
              setFilteredTodos={setFilteredTodos}
              id={currentTodo.id}
              key={currentTodo.id}
              isCompleted={currentTodo.isCompleted}
            />
          );
        })}

        <li className="todo-footer--light">
          <p>
            {notCompletedItems} item{notCompletedItems === 1 ? `` : `s`} left
          </p>
          <div>
            <button className="footer-button" onClick={showAll}>
              All
            </button>
            <button className="footer-button" onClick={showActive}>
              Active
            </button>
            <button className="footer-button" onClick={showCompleted}>
              Completed
            </button>
          </div>
          <button className="footer-button" onClick={clearCompleted}>
            Clear Completed
          </button>
        </li>
      </ul>
    </div>
  );
}
