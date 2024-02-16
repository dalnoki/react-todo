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

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  const handleDragStart = (e) => {
    dragStart(e);
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
