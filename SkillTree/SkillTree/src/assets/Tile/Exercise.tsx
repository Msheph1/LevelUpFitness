import { useState } from "react";

import "./Exercise.css";

function Exercise() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Name</h1>
      <p>
        Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Maxime voluptatem maiores id perferendis commodi? Tempore officia dolor
        dolore saepe debitis vero in eos? Sint, perspiciatis corrupti? Expedita
        repellendus adipisci voluptates.
      </p>
      <h1>image</h1>
      <p>Reps:</p>
      <p>5</p>
    </div>
  );
}

export default Exercise;
