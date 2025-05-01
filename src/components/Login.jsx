import { Input } from "./input/Input";
import { Head } from "./head/Head";
import { Button } from "./button/Button";
import { Forget } from "./forget/forget";
import { Last } from "./LL/LL";
import { useState } from "react";
import Card from "./card/Card";
import { TT } from "./TT/TT";

export function Login (){
    const [formdata,Setformdata]= useState ({
        email : "",
        password : "",
        
    });

    const handleChange = (e)=>{
        const{name,value} = e.target;
        Setformdata(prevState =>({
            ...prevState,
            [name]:value
        }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formdata);
    }
        
return (
    <Card onSubmit ={handleSubmit}>
        <Head Head = "Login Form"/>
         <TT/>
        <Input tp = "Text" ph="Username"  name ="email"  onChange ={handleChange}/>
        <Input tp = "Password" ph ="Password" name="password" onChange ={handleChange}/>
         < Forget/>      
         <Button text = "Login" type ="submit"/>
         <Last/>

    </Card>
)
}
