import "./styles.css";
import HelloModal from "./HelloModal";

// const modalShemas = {
//   normal: (data) => ({content: data}),
//   mini: (data) => data,
//   hard: (url) => {
//     fetch(...)
//   }
// }

// DELETE
// const handler = (type: string) => {
//   contexActions[type]
// }

export default function App() {
  const modalContent = { content: <div>there is a body</div> };
  const anotherOneModalContent = <div>there is a body</div>;

  return (
    <div className="App">
      <HelloModal body={modalContent} />
      <HelloModal body={anotherOneModalContent} />
    </div>
  );
}
