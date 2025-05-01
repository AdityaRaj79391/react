import { useEffect } from "react";
// import ReactDOM from "react-dom/client";
import { useState } from "react";

export function Count2 (){
    const[value,setValue] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
        setValue((value) => value +1);
    },1000)
  });

  return <h1>{value}</h1>
}