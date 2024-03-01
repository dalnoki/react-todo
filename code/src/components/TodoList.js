import { useRef } from "react";

import Todo from "./Todo";

export default function TodoList({
  filteredTodos,
  currentTheme,
  allTodos,
  setAllTodos,
  setFilteredTodos,
}) {
  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, index) => {
    dragItem.current = index;
  };

  const dragEnter = (e, index) => {
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
        return (
          <li
            key={currentTodo.id}
            draggable
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={drop}
            className={`${
              currentTodo.isCompleted === true ? "todo-item--completed" : null
            } todo-item ${
              currentTheme === "light" ? "todo-item--light" : "todo-item--dark"
            } ${
              currentTodo.isCompleted && currentTheme === "light"
                ? "todo-item--completed--light"
                : ""
            } 
              
              ${
                currentTodo.isCompleted && currentTheme === "dark"
                  ? "todo-item--completed--dark"
                  : ""
              } round`}
          >
            <Todo
              todo={currentTodo}
              currentTheme={currentTheme}
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
