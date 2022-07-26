
const Button = (props) => {
    return(
        <button className={`${props.width} ${props.height} ${props.bg_color} ${props.text_color} ${props.text_size} rounded-md m-1 font-bebasNeue `} value={props.value} onClick={props.handleClick}>
            <div className={"pointer-events-none"}>
                {props.text}
            </div>
        </button>
    );
}

export default Button;