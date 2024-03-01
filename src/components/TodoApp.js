import { useState } from "react";

import "../scss/main.scss";
import AddNewTodo from "./AddNewTodo";
import Header from "./Header";
import Footer from "./Footer";
import TodoList from "./TodoList";
import DragAndDrop from "./DragAndDrop";

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
        <TodoList
          filteredTodos={filteredTodos}
          currentTheme={currentTheme}
          allTodos={allTodos}
          setAllTodos={setAllTodos}
          setFilteredTodos={setFilteredTodos}
        />
        <Footer
          allTodos={allTodos}
          setAllTodos={setAllTodos}
          setFilteredTodos={setFilteredTodos}
          currentTheme={currentTheme}
        />
        <DragAndDrop currentTheme={currentTheme} />
      </div>
    </div>
  );
}
