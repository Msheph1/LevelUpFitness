import { useState } from "react";

import "./App.css";
import Exercise from "./assets/Tile/Exercise";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Skill Tree</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div style={{ display: "flex" }}>
        <Exercise />
        <Exercise></Exercise>
      </div>
    </>
  );
}

export default App;
