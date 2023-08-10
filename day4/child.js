"use client";

import { useState } from "react";

export default function Child({ title, version }) {
  let [power, setPower] = useState(0);
    return (
      <div>
        <h2>Child Component</h2>
        <h3>title : { title }</h3>
        <h3>version : { version * 2 }</h3>
        <h3>Power : {power }</h3>
        {/* <button onClick={()=> setPower(power + 1) }>Increase Power</button> */}

      </div>
    )
  }

  /* 
    set power from input type range 
    set power from input type number using the button 
  */
  
