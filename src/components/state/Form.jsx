import { useState } from "react";
export const MyForm2 = () =>{

    let[values,setvalues]= useState ('');


    const Change = (e) =>{
        setvalues(e.target.value);

    };

    const Submit = (e) => {
        event.preventDefault();
        console.log('Submitted value:',values);

        
    };
    return (
        <form onSubmit={Submit}>
          <label>
            Input:
            <input 
              type="text" 
              value={values} 
              onChange={Change} 
            />
          </label>
          <button type="submit">Submit</button>
        </form> 
    );


};