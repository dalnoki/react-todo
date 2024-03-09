import { useRef, useContext } from "react";

import Todo from "./Todo";

export default function TodoList({
  filteredTodos,
  allTodos,
  setAllTodos,
  setFilteredTodos,
}) {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (_, index) => {
    dragItem.current = index;
  };

  const dragEnter = (_, index) => {
    dragOverItem.current = index;
  };

  const drop = () => {
    const copyListItems = [...filteredTodos];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setFilteredTodos(copyListItems); // Update the state with the reordered list
  };

  const handleDelete = (id) => {
    const filtered = allTodos.filter((todo) => todo.id !== id);

    setAllTodos(filtered);
    setFilteredTodos(filtered);
  };

  const handleClick = (id) => {
    const updatedArray = allTodos.map((currentTodo) => {
      if (currentTodo.id === id) {
        return {
          ...currentTodo,
          isCompleted: !currentTodo.isCompleted,
        };
      }

      return currentTodo;
    });

    setAllTodos(updatedArray);
    setFilteredTodos(updatedArray);
  };

  return (
    <ul className="todo-list">
      {filteredTodos.map((currentTodo, index) => {
        return (
          <li
            key={currentTodo.id}
            draggable
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={drop}
          >
            <Todo
              todo={currentTodo}
              handleDelete={handleDelete}
              handleClick={handleClick}
              isCompleted={currentTodo.isCompleted}
            />
          </li>
        );
      })}
    </ul>
  );
}
