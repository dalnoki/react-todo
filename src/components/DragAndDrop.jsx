import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { useContext } from "react";

export default function DragAndDrop() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <p
      className={`dad-info ${darkMode ? "dad-info--dark" : "dad-info--light"}`}
    >
      Drag and drop to reorder list
    </p>
  );
}
