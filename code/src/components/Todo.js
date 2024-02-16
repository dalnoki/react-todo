import "../scss/temp.scss";

export default function Todo({
  todo,
  allTodos,
  setAllTodos,
  id,
  isCompleted,
  setFilteredTodos,
  filteredTodos,
}) {
  const handleClick = (event) => {
    const updatedArray = allTodos.map((currentTodo) => {
      if (currentTodo.id === id) {
        return {
          ...currentTodo,
          isCompleted: !isCompleted,
        };
      } else {
        return currentTodo;
      }
    });

    setAllTodos(updatedArray);
    setFilteredTodos(updatedArray);
  };

  const handleDelete = (event) => {
    const filtered = allTodos.filter((todo) => todo.id !== id);
    console.log(filtered);
    setAllTodos(filtered);
    setFilteredTodos(filtered);
  };

  return (
    <>
      <input type="checkbox" className="checkbox" />
      <label
        onClick={handleClick}
        htmlFor="checkbox"
        className={isCompleted ? "label-checked" : null}
      >
        <svg
          className="check"
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
        >
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </label>
      <span>{todo.description}</span>
      <svg
        className="cross"
        onClick={handleDelete}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
      >
        <path
          fill="#494C6B"
          fillRule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </>
  );
}
