import { useState } from "react";

import "./App.css";
import Exercise from "./assets/Tile/Exercise";
import DraggableArea from "./assets/DraggableArea";
import Area from "./assets/Area";


function App() {
  const [count, setCount] = useState(0);
  const [showDraggable, setShowDraggable] = useState(true);

  const handleToggle = () =>  {
    setShowDraggable((prev) => !prev);
  };


  return (
    <>
    <button onClick={handleToggle}>Toggle Area</button>
    {
      showDraggable ? <DraggableArea /> : <Area />
    }
    </>
  );
}

export default App;
