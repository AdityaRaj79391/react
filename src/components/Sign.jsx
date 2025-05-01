import { Input } from "./input/Input";
import { Head } from "./head/Head";
import { Button } from "./button/Button";
import { useState } from "react";
import Card from "./card/Card";
import { TT } from "./TT/TT";

export const Sign =()=>{
    const[formdata,Setformdata]=useState({
        email : "",
        password : "",
        confirmpassword : ""
    });

    const handleChange =(e) =>{
        const{name,value} = e.target;
        Setformdata(prevState =>({
            ...prevState,
            [name]:value 
      }));
    } ;

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formdata);
    }




return(
    <Card onSubmit={handleSubmit}>
        <Head Head = "Signup Form"/>
        <TT/>
        <Input tp = "Text" ph="Username" name="email" onChange={handleChange}/>
        <Input tp = "Password" ph ="Password" name = "password" onChange={handleChange}/>
        <Input tp = "Password" ph ="Confirm Password" name = "confirmpassword" onChange={handleChange}/>
        <Button text = "Signup"/>
         


    </Card>

)
}
