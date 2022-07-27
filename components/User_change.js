import { useState } from 'react';
import { calculate_change_detailed, calculate_change } from '../logic/machine_calculations'

export default function User_change (props) {

    const [userChangeList, setuserChangeList] = useState(calculate_change_detailed(props.user_balance, props.total_amount));
    const [userChange, setUserChange] = useState(calculate_change(props.user_balance, props.total_amount));

    return(
        <div className="mt-16 pl-12 w-1/2 text-white">
            <p> {`Su vuelto es de ${userChange} colones.`} </p>
            <p> Desglose: </p>
            { userChangeList.map((coin) => {
                return (
                (coin.quantity === 0) ? <></> :
                <div key={coin.id} className="flex">
                    <p> {`${coin.quantity} moneda de ${coin.value}`}</p>
                </div>
                )
            })}
        </div>
    );
}