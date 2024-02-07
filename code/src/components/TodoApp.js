import { useState, useRef } from "react";

import "../scss/TodoApp.scss";
import Todo from "../components/Todo";
import AddNewTodo from "./AddNewTodo";
import HeaderLight from "../images/bg-desktop-light.jpg";
import HeaderDark from "../images/bg-desktop-dark.jpg";

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
  const [currentTheme, setCurrentTheme] = useState("light");

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e) => {
    dragItem.current = e.target.id;
  };

  const dragEnter = (e) => {
    dragOverItem.current = e.currentTarget.id;
  };

  const drop = () => {
    const copyListItems = [...filteredTodos];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setFilteredTodos(filteredTodos);
  };

  const notCompletedItems = allTodos.filter(
    (todo) => todo.isCompleted === false
  ).length;

  const clearCompleted = () => {
    const filtered = allTodos.filter((todo) => todo.isCompleted === false);
    setAllTodos(filtered);
    setFilteredTodos(filtered);
  };

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  const handleDragStart = (e) => {
    dragStart(e);
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
    <div
      className={`todo-container ${
        currentTheme === "light"
          ? "todo-container--light"
          : "todo-container--dark"
      }`}
    >
      <header className="todo-header">
        <img
          src={currentTheme === "light" ? HeaderLight : HeaderDark}
          className="App-logo"
          alt="logo"
        />
        <div className="todo-title">
          <h1>TODO</h1>
          <button className="theme-change" onClick={handleThemeChange}>
            {currentTheme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
                />
              </svg>
            )}
          </button>
        </div>
      </header>
      <div className="todo-app">
        <AddNewTodo
          setAllTodos={setAllTodos}
          allTodos={allTodos}
          setFilteredTodos={setFilteredTodos}
        />
        <ul
          className="todo-list"
          onDragStart={handleDragStart}
          onDragEnter={(e) => dragEnter(e)}
          onDragEnd={drop}
        >
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
                filteredTodos={filteredTodos}
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
    </div>
  );
}
