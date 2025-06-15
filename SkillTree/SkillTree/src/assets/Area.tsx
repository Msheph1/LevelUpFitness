import { useState } from "react";

import "../App.css";
import Exercise from "./Tile/Exercise";

function Area() {

  return (
    <>
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
    </>
  );
}

export default Area;
