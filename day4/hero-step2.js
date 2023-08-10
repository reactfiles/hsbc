"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import wonder from "../../../public/wonderwomen-400-400-150.jpg";

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
        {/* <Image quality="100" width="100" height="100" alt="Batman poster"  src="/superman-400-400-150.jpg"/> */}
        <Image width={200} alt="Wonder Women poster"  src={ wonder }/>
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
