import "./scss/main.scss";
import TodoApp from "./components/TodoApp";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
        <TodoApp />
      </DarkModeProvider>
    </div>
  );
}

export default App;
