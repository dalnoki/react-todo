import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext.jsx";

export default function Footer({ allTodos, setAllTodos, setFilteredTodos }) {
  const { darkMode } = useContext(DarkModeContext);

  const notCompletedItems = allTodos.filter(
    (todo) => todo.isCompleted === false
  ).length;

  const clearCompleted = () => {
    const filtered = allTodos.filter((todo) => todo.isCompleted === false);
    setAllTodos(filtered);
    setFilteredTodos(filtered);
  };

  const showAll = (e) => {
    setFilteredTodos(allTodos);
  };
  const showActive = (e) => {
    const filtered = allTodos.filter((todo) => todo.isCompleted === false);
    setFilteredTodos(filtered);
  };
  const showCompleted = (e) => {
    const filtered = allTodos.filter((todo) => todo.isCompleted === true);
    setFilteredTodos(filtered);
  };

  return (
    <>
      <ul
        className={`todo-footer--completed-container ${
          darkMode ? "todo--dark" : "todo--light"
        }`}
      >
        <li className="todo-footer--completed">
          <p>
            {notCompletedItems} item{notCompletedItems === 1 ? `` : `s`} left
          </p>
          <button className="button--hidden" onClick={showAll}>
            All
          </button>
          <button className="button--hidden" onClick={showActive}>
            Active
          </button>
          <button className="button--hidden" onClick={showCompleted}>
            Completed
          </button>
          <button
            className={`button--clear ${
              darkMode ? "button--clear--dark" : "button--clear--light"
            }`}
            onClick={clearCompleted}
          >
            Clear Completed
          </button>
        </li>
      </ul>
      <ul className="todo-footer--buttons-container">
        <li
          className={`todo-footer--buttons ${
            darkMode ? "todo--dark" : "todo--light"
          }`}
        >
          <button className="button--footer" onClick={showAll}>
            All
          </button>
          <button className="button--footer" onClick={showActive}>
            Active
          </button>
          <button className="button--footer" onClick={showCompleted}>
            Completed
          </button>
        </li>
      </ul>
    </>
  );
}
