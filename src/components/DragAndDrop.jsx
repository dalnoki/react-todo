import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { useContext } from "react";
import clsx from "clsx";

export default function DragAndDrop() {
  const { darkMode } = useContext(DarkModeContext);

  const dadInputStyles = clsx({
    ["dad-info"]: true,
    ["dad-info--dark"]: darkMode,
    ["dad-info--light"]: !darkMode,
  });

  return <p className={dadInputStyles}>Drag and drop to reorder list</p>;
}
