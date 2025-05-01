import "./button.css"
export const Button = (props) =>{

    return(
        <button id="Button" type ="submit">

         <p>{props.text}</p>   
        </button>


    )
}