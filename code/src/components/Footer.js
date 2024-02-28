export default function Footer({
  allTodos,
  setAllTodos,
  setFilteredTodos,
  currentTheme,
}) {
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
          currentTheme === "light" ? "todo--light" : "todo--dark"
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
              currentTheme === "light"
                ? "button--clear--light"
                : "button--clear--dark"
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
            currentTheme === "light" ? "todo--light" : "todo--dark"
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
