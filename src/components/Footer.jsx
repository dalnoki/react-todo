import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext.jsx";
import Button from "./Button.jsx";
import clsx from "clsx";

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

  const footerContainerStyle = clsx({
    ["todo-footer--completed-container"]: true,
    ["todo--dark"]: darkMode,
    ["todo--light"]: !darkMode,
  });

  const clearButtonStyle = clsx({
    ["button--clear"]: true,
    ["button--clear--dark"]: darkMode,
    ["button--clear--light"]: !darkMode,
  });

  const footerButtons = clsx({
    ["todo-footer--buttons"]: true,
    ["todo--dark"]: darkMode,
    ["todo--light"]: !darkMode,
  });
  return (
    <>
      <ul className={footerContainerStyle}>
        <li className="todo-footer--completed">
          <p>
            {notCompletedItems} item{notCompletedItems === 1 ? `` : `s`} left
          </p>
          <Button className={"button--hidden"} onClick={showAll}>
            All
          </Button>
          <Button className={"button--hidden"} onClick={showActive}>
            Active
          </Button>
          <Button className={"button--hidden"} onClick={showCompleted}>
            Completed
          </Button>
          <Button className={clearButtonStyle} onClick={clearCompleted}>
            Clear Completed
          </Button>
        </li>
      </ul>
      <ul className="todo-footer--buttons-container">
        <li className={footerButtons}>
          <Button className={"button--footer"} onClick={showAll}>
            All
          </Button>
          <Button className={"button--footer"} onClick={showActive}>
            Active
          </Button>
          <Button className={"button--footer"} onClick={showCompleted}>
            Completed
          </Button>
        </li>
      </ul>
    </>
  );
}
