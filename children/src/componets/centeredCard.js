import './style.css'
function CenteredCard({children}){
    return(
        <div className="father">
            <p>{children}</p>
        </div>
    )
}
export default CenteredCard;