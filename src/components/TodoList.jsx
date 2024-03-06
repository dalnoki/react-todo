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
  return (
    <ul className="todo-list">
      {filteredTodos.map((currentTodo, index) => {
        console.log(currentTodo.id);
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
              allTodos={allTodos}
              setAllTodos={setAllTodos}
              setFilteredTodos={setFilteredTodos}
              id={currentTodo.id}
              isCompleted={currentTodo.isCompleted}
            />
          </li>
        );
      })}
    </ul>
  );
}
