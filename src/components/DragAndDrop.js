export default function DragAndDrop({ currentTheme }) {
  return (
    <p
      className={`dad-info ${
        currentTheme === "light" ? "dad-info--light" : "dad-info--dark"
      }`}
    >
      Drag and drop to reorder list
    </p>
  );
}
