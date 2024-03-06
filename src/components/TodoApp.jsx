import { useState } from "react";

import "../scss/main.scss";
import AddNewTodo from "./AddNewTodo.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import TodoList from "./TodoList.jsx";
import DragAndDrop from "./DragAndDrop.jsx";
import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { useContext } from "react";
import clsx from "clsx";

const demoArray = [
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
];

export default function TodoApp() {
  const [allTodos, setAllTodos] = useState(demoArray);
  const [filteredTodos, setFilteredTodos] = useState(demoArray);

  const { darkMode } = useContext(DarkModeContext);

  const appStyles = clsx({
    ["todo-container"]: true,
    ["todo-background--dark"]: darkMode,
    ["todo-background--light"]: !darkMode,
  });

  return (
    <div className={appStyles}>
      <Header currentTheme={darkMode} />
      <div className="todo-app">
        <AddNewTodo
          setAllTodos={setAllTodos}
          allTodos={allTodos}
          setFilteredTodos={setFilteredTodos}
        />
        <TodoList
          filteredTodos={filteredTodos}
          isDarkMode={darkMode}
          allTodos={allTodos}
          setAllTodos={setAllTodos}
          setFilteredTodos={setFilteredTodos}
        />
        <Footer
          allTodos={allTodos}
          setAllTodos={setAllTodos}
          setFilteredTodos={setFilteredTodos}
        />
        <DragAndDrop />
      </div>
    </div>
  );
}
