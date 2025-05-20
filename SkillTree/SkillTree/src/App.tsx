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

      <div className="dragablearea">
        <div className="innerarea">
          <h1>title blah</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et id,
            consequatur doloribus dicta temporibus facilis culpa. Neque
            necessitatibus reprehenderit adipisci quae explicabo dolores
            perspiciatis alias. Provident fuga debitis nihil quo.
          </p>
          <button>buton 1</button>
          <button>button 2</button>
          <p>morestaetsa seal;krejfsapokfjdsapoifjdsapoifjds</p>
        </div>
      </div>
    </>
  );
}

export default App;
