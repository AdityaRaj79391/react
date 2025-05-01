import { useState } from "react";
export const Count = () =>{

    let [value,setValue]= useState(0)
    return(
        <>
        <h1>
            Hello {value}
        </h1>
        <button onClick={()=> setValue(value+1)}>Increase</button>
        <button onClick={()=> setValue(value-1)}>Decrease</button>
        
 
        </>

    )


}