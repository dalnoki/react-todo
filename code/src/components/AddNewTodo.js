import React, { useState } from "react";
import "../scss/AddNewTodo.scss";
import "../images/icon-check.svg";

export default function AddNewTodo({
  allTodos,
  setAllTodos,
  setFilteredTodos,
}) {
  const [value, setValue] = useState("");

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
      <li draggable className="todo-item new-todo round">
        <input type="checkbox" className="checkbox" />
        <label disabled htmlFor="checkbox"></label>
        <input
          className="new-todo"
          placeholder="Create a new todo..."
          onChange={handleChange}
          value={value}
        />
      </li>
      <input type="submit" hidden value="Submit" onClick={handleSubmit} />
    </form>
  );
}
