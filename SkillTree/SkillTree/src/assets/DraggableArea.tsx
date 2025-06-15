import { useState } from "react";

import "../App.css";
import Exercise from "./Tile/Exercise";

function DraggableArea() {
  const [count, setCount] = useState(0);

  //logic for dragging screen
  const box = document.querySelector<HTMLElement>(".dragablearea");
  console.log(box);
  console.log("refresh");
  let isDown = false;
  let startX = 0;
  let startY = 0;
  let scrollLeft = 0;
  let scrollTop = 0;
  if (box) {
    box.addEventListener("mousedown", (e: MouseEvent) => {
      isDown = true;
      box.classList.add("active");
      startX = e.pageX - box.offsetLeft;
      startY = e.pageY - box.offsetTop;
      scrollLeft = box.scrollLeft;
      scrollTop = box.scrollTop;
      box.style.cursor = "grabbing";
    });

    box.addEventListener("mouseleave", () => {
      isDown = false;
      box.style.cursor = "grab";
    });

    box.addEventListener("mouseup", () => {
      isDown = false;
      box.style.cursor = "grab";
    });

    box.addEventListener("mousemove", (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - box.offsetLeft;
      const y = e.pageY - box.offsetTop;
      const walkX = x - startX;
      const walkY = y - startY;
      box.scrollLeft = scrollLeft - walkX;
      box.scrollTop = scrollTop - walkY;
    });
  }

  return (
    <>
      <div className="dragablearea">
        <div className="innerarea">
          <h1>Skill Tee</h1>
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
          <div>
            <Exercise />
            <Exercise />
            <Exercise />
            <Exercise />
            <Exercise />
            <Exercise />
          </div>
        </div>
      </div>
    </>
  );
}

export default DraggableArea;
