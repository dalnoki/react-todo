import { useState, useRef } from "react";

import "../scss/temp.scss";
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
          ? "todo-container--light"
          : "todo-container--dark"
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
                } todo-item round`}
              >
                <Todo
                  todo={currentTodo}
                  allTodos={allTodos}
                  setAllTodos={setAllTodos}
                  setFilteredTodos={setFilteredTodos}
                  id={currentTodo.id}
                  key={currentTodo.id}
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
        />
      </div>
    </div>
  );
}
