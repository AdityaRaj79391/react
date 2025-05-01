import "./input.css"

export const Input = (props) => <div id="Input">
    <input 
    
        type= {props.tp} 
        placeholder={props.ph} 
        name= {props.name}
        value={props.value}
        onChange={props.onChange}
    />



</div>