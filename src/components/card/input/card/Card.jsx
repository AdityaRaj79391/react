import "./Card.css";
import {Input} from "../input/Input";

const Card = ()=>{
    return(
        <div id="head">
            <h2>Login Form </h2>
            
            <Input type="username"/><br /><br />
            <Input type="password"/>
        </div>
    )


}
export default Card