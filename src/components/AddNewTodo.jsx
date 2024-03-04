import { useState, useRef } from "react";
import "../scss/main.scss";
import "../images/icon-check.svg";
import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddNewTodo({
  allTodos,
  setAllTodos,
  setFilteredTodos,
}) {
  const id = uuidv4();

  const [value, setValue] = useState("");

  const { darkMode } = useContext(DarkModeContext);

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
  return (
    <form>
      <li
        draggable
        className={`todo-new round ${darkMode ? "todo--dark" : "todo--light"}`}
      >
        <input type="checkbox" className="checkbox" />
        <label
          disabled
          htmlFor="checkbox"
          className={`checkbox-label ${
            darkMode ? "checkbox-label--dark" : "checkbox-label--light"
          }`}
        ></label>
        <input
          className={`new-todo ${darkMode ? "todo--dark" : "todo--light"}`}
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
