import header from "./images/bg-desktop-light.jpg";
import "./scss/App.scss";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={header} className="App-logo" alt="logo" />
      </header>
      <TodoApp />
    </div>
  );
}

export default App;
