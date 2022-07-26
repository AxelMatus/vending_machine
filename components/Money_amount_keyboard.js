import Button from './Button'

const create_buttons = (value, handleClick) => {
    const handleButtonClick = (event) => handleClick(event);

    return(
        <Button key={value.id} width={value.width} height={value.height} bg_color={"bg-white"} text_color={"text-black"} text={value.tag} value={value.value} text_size={"text-2xl font-bold"} handleClick={handleButtonClick}/>
    )
}

const create_rows = (values) => {
    return (
        <div className='flex justify-center'>
            { values.map((value) => {
                return create_buttons(value, value.handleClick);
            })}
        </div>
);}

export default function Money_amount_keyboard (props) {

    const handleUserInput = (event) => {
        event.preventDefault();
        props.setUserCash(props.userCash + parseInt(event.target.value));
    }

    const firstRow_buttons = [
        { id: 1, value: "1000", tag: "₡1.000", width: "w-40", height:"h-12", handleClick: handleUserInput},
    ]

    const secondRow_buttons = [
        { id: 2, value: "500", tag: "₡500", width: "w-20", height:"h-12", handleClick: handleUserInput},
        { id: 3, value: "100", tag: "₡100", width: "w-20", height:"h-12", handleClick: handleUserInput},
    ]

    const thirdRow_buttons = [
        { id: 4, value: "50", tag: "₡50", width: "w-20", height:"h-12", handleClick: handleUserInput},
        { id: 5, value: "25", tag: "₡25", width: "w-20", height:"h-12", handleClick: handleUserInput},
    ]

    return(
        <div className={`w-${props.width} h-${props.height} ${props.padding}`}>
                {create_rows(firstRow_buttons)}
                {create_rows(secondRow_buttons)}
                {create_rows(thirdRow_buttons)}
        </div>
    );
}
