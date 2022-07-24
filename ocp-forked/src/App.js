import "./styles.css";
import BoardProxy from "./BoardProxy";

export default function App() {
  const user = {
    name: "Petr",
    surname: "Ivanov",
    type: "admin"
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <BoardProxy user={user} />
    </div>
  );
}
