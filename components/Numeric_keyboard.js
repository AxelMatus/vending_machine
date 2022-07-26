import Button from './Button'
import Image from 'next/image'

const create_buttons = (value, handleClick) => {
    const handleButtonClick = (event) => handleClick(event);

    return(
        <Button key={value.id} width={"w-12"} height={"h-12"} bg_color={"bg-white"} text_color={"text-black"} text={value.tag} value={value.value} text_size={"text-4xl font-bold"} handleClick={handleButtonClick}/>
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

export default function Numeric_keyboard (props) {
    const check = <Image className="pointer-events-none" width={24} height={24} src={`/check.svg`} alt="check_icon"/>
    const exit = <Image className="pointer-events-none" width={24} height={24} src={`/exit.svg`} alt="exit_icon"/>

    const handleUserInput = (event) => {
        event.preventDefault();
        props.setUserInput(props.userInput.concat(event.target.value))
    }

    const handleCheck = () => {
        console.log("check")
    }

    const handleCancel = () => {
        props.setUserInput("");
    }

    const firstRow_buttons = [
        { id: 1, value: "1", tag: "1", handleClick: handleUserInput},
        { id: 2, value: "2", tag: "2", handleClick: handleUserInput},
        { id: 3, value: "3", tag: "3", handleClick: handleUserInput},
    ]

    const secondRow_buttons = [
        { id: 4, value: "4", tag: "4", handleClick: handleUserInput},
        { id: 5, value: "5", tag: "5", handleClick: handleUserInput},
        { id: 6, value: "6", tag: "6", handleClick: handleUserInput},
    ]

    const thirdRow_buttons = [
        { id: 7, value: "7", tag: "7", handleClick: handleUserInput},
        { id: 8, value: "8", tag: "8", handleClick: handleUserInput},
        { id: 9, value: "9", tag: "9", handleClick: handleUserInput},
    ]

    const fourthdRow_buttons = [
        { id: 10, value: "check", tag: check, handleClick: handleCheck},
        { id: 11, value: "0", tag: "0", handleClick: handleUserInput},
        { id: 12, value: "exit", tag: exit, handleClick: handleCancel},
    ]
    
    return(
        <div className={`w-${props.width} h-${props.height} ${props.padding}`}>
                {create_rows(firstRow_buttons)}
                {create_rows(secondRow_buttons)}
                {create_rows(thirdRow_buttons)}
                {create_rows(fourthdRow_buttons)}
        </div>
    );
}


