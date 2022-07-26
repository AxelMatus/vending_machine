import { useState, useEffect } from 'react';
import { calculate_change_detailed, calculate_change } from '../logic/machine_calculations'

export default function User_change (props) {

    const [userChangeList, setUserChangeList] = useState(calculate_change_detailed( props.total_amount, props.user_balance,));
    const [userChange, setUserChange] = useState(calculate_change(props.total_amount, props.user_balance,));

    useEffect (()=>{
        if(props.user_balance >= props.total_amount){
            setUserChangeList(calculate_change_detailed(props.user_balance, props.total_amount));
            setUserChange(calculate_change(props.user_balance, props.total_amount));
        }
    },[props.user_balance, props.total_amount]);

    return(
        <div className="mt-16 pl-12 w-1/2 text-white">
            <p> {`Su vuelto es de ${userChange} colones.`} </p>
            <p> Desglose: </p>
            { userChangeList.map((coin) => {
                if(coin.quantity !== 0){
                return (
                    <div key={coin.id} className="flex">
                        <p> {`${coin.quantity} moneda de ${coin.value}`}</p>
                    </div>
                )}}
            )}
        </div>
    );
}