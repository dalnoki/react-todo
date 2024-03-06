import { useState, useRef } from "react";
import "../scss/main.scss";
import "../images/icon-check.svg";
import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";

export default function AddNewTodo({
  allTodos,
  setAllTodos,
  setFilteredTodos,
}) {
  const id = uuidv4();

  const [value, setValue] = useState("");

  const { darkMode } = useContext(DarkModeContext);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTodos([
      ...allTodos,
      {
        description: `${value}`,
        isCompleted: false,
        id: `${id}`,
      },
    ]);
    setFilteredTodos([
      ...allTodos,
      {
        description: `${value}`,
        isCompleted: false,
        id: id,
      },
    ]);
    setValue("");
  };

  const newTodoStyles = clsx({
    ["todo-new"]: true,
    ["round"]: true,
    ["todo--dark"]: darkMode,
    ["todo--light"]: !darkMode,
  });

  const newTodoLabelStyle = clsx({
    ["checkbox-label"]: true,
    ["checkbox-label--dark"]: darkMode,
    ["checkbox-label--light"]: !darkMode,
  });

  const newTodoInputStyles = clsx({
    ["new-todo"]: true,
    ["todo--dark"]: darkMode,
    ["todo--light"]: !darkMode,
  });

  return (
    <form>
      <li draggable className={newTodoStyles}>
        <input type="checkbox" className="checkbox" />
        <label
          disabled
          htmlFor="checkbox"
          className={newTodoLabelStyle}
        ></label>
        <input
          className={newTodoInputStyles}
          placeholder="Create a new todo..."
          onChange={handleChange}
          value={value}
        />
      </li>
      <input type="submit" hidden value="Submit" onClick={handleSubmit} />
    </form>
  );
}
