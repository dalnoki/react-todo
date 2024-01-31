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
  };

  return (
    <form>
      <input
        className="new-todo"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Create new todo..."
      />
      <div className="circle"></div>
      <input type="submit" hidden value="Submit" onClick={handleSubmit} />
    </form>
  );
}
