import React, { useState, useRef } from "react";
import "../scss/temp.scss";
import "../images/icon-check.svg";

export default function AddNewTodo({
  allTodos,
  setAllTodos,
  setFilteredTodos,
  currentTheme,
}) {
  const [value, setValue] = useState("");

  const searchInput = useRef(null);

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
        id: Date.now(),
      },
    ]);
    setFilteredTodos([
      ...allTodos,
      {
        description: `${value}`,
        isCompleted: false,
        id: Date.now(),
      },
    ]);
    setValue("");
  };

  return (
    <form>
      <li
        draggable
        className={`todo-new round ${
          currentTheme === "light" ? "todo--light" : "todo--dark"
        }`}
      >
        <input type="checkbox" className="checkbox" />
        <label
          disabled
          htmlFor="checkbox"
          class={`checkbox-label ${
            currentTheme === "light"
              ? "checkbox-label--light"
              : "checkbox-label--dark"
          }`}
        ></label>
        <input
          className={`new-todo ${
            currentTheme === "light" ? "todo--light" : "todo--dark"
          }`}
          placeholder="Create a new todo..."
          onChange={handleChange}
          ref={searchInput}
          value={value}
        />
      </li>
      <input type="submit" hidden value="Submit" onClick={handleSubmit} />
    </form>
  );
}
