import "./card.css"
const Card = ({children,onSubmit})=>{
    return(
        <form id="card" onSubmit={onSubmit}>
            {children}
        </form>

    )
}
export default Card