import "../scss/Todo.scss";
import { useRef } from "react";

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

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e) => {
    dragItem.current = id;
  };

  const dragEnter = (e) => {
    dragOverItem.current = id;
  };

  const drop = () => {
    const copyListItems = [...filteredTodos];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    console.log(copyListItems);
    setFilteredTodos(copyListItems);
  };

  const handleDrop = () => {
    const draggedIndex = dragItem.current;
    const draggedTodo = filteredTodos[draggedIndex];
    const filtered = filteredTodos.filter((_, index) => index !== draggedIndex);
    const droppedIndex = dragOverItem.current;
    const updatedTodos = [
      ...filtered.slice(0, droppedIndex),
      draggedTodo,
      ...filtered.slice(droppedIndex),
    ];
    setFilteredTodos(updatedTodos);
  };

  const handleDragStart = (e) => {
    dragStart(e);
  };

  return (
    <li
      draggable
      className="todo-item round"
      onDragStart={handleDragStart}
      onDragEnter={(e) => dragEnter(e)}
      onDrop={drop}
    >
      <input type="checkbox" className="checkbox" />
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
    </li>
  );
}
