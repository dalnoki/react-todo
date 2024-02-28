import { useState, useRef } from "react";

import "../scss/main.scss";
import Todo from "../components/Todo";
import AddNewTodo from "./AddNewTodo";
import Header from "./Header";
import Footer from "./Footer";

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

  const dragStart = (e, index) => {
    dragItem.current = index;
  };

  const dragEnter = (e, index) => {
    dragOverItem.current = index;
  };

  const drop = () => {
    const copyListItems = [...filteredTodos];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setFilteredTodos(copyListItems); // Update the state with the reordered list
  };

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`todo-container ${
        currentTheme === "light"
          ? "todo-background--light"
          : "todo-background--dark"
      }`}
    >
      <Header
        currentTheme={currentTheme}
        handleThemeChange={handleThemeChange}
      />
      <div className="todo-app">
        <AddNewTodo
          setAllTodos={setAllTodos}
          allTodos={allTodos}
          setFilteredTodos={setFilteredTodos}
          currentTheme={currentTheme}
        />
        <ul className="todo-list">
          {filteredTodos.map((currentTodo, index) => {
            return (
              <li
                key={currentTodo.id}
                draggable
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={drop}
                className={`${
                  currentTodo.isCompleted === true
                    ? "todo-item--completed"
                    : null
                } todo-item ${
                  currentTheme === "light"
                    ? "todo-item--light"
                    : "todo-item--dark"
                } ${
                  currentTodo.isCompleted && currentTheme === "light"
                    ? "todo-item--completed--light"
                    : ""
                } 
                
                ${
                  currentTodo.isCompleted && currentTheme === "dark"
                    ? "todo-item--completed--dark"
                    : ""
                } round`}
              >
                <Todo
                  todo={currentTodo}
                  currentTheme={currentTheme}
                  allTodos={allTodos}
                  setAllTodos={setAllTodos}
                  setFilteredTodos={setFilteredTodos}
                  id={currentTodo.id}
                  isCompleted={currentTodo.isCompleted}
                />
              </li>
            );
          })}
        </ul>
        <Footer
          allTodos={allTodos}
          setAllTodos={setAllTodos}
          setFilteredTodos={setFilteredTodos}
          currentTheme={currentTheme}
        />
        <p
          className={`dad-info ${
            currentTheme === "light" ? "dad-info--light" : "dad-info--dark"
          }`}
        >
          Drag and drop to reorder list
        </p>
      </div>
    </div>
  );
}
