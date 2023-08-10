"use client";

import { useState, useRef } from "react";

function Hero() {
    let [herolist, setHeroes] = useState(["Batman","Superman"]);
    let heroip = useRef()
    let clickHandler = ()=>{
        setHeroes([...herolist,heroip.current.value])
    }
    return (
      <article>
        <h1>Welcome to the Hero Page </h1>
        <input ref={heroip} type="text"/>
        <button onClick={clickHandler}>Add New Hero</button>
        <hr/>
        <ol>{
            herolist.map((val,idx)=>{
                return <li key={idx}>{ val }</li>
            })
            }</ol>
      </article>
    )
  }
export default Hero;
