export default function Footer({ allTodos, setAllTodos, setFilteredTodos }) {
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
      <ul>
        <li className="todo-footer todo-footer--light">
          <p>
            {notCompletedItems} item{notCompletedItems === 1 ? `` : `s`} left
          </p>
          <button className="button--footer" onClick={clearCompleted}>
            Clear Completed
          </button>
        </li>
      </ul>
      <ul>
        <li className="todo-footer">
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
