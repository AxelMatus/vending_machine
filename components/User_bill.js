import { useEffect, useState } from 'react';
import {get_total_sum_of_products, get_total_amount} from '../logic/machine_calculations'

export default function User_bill (props) {
    const [userProductList, setUserProductList] = useState(get_total_sum_of_products(props.user_products));
    const [totalAmount, setTotalAmount] = useState (get_total_amount(userProductList));

    useEffect(()=>{
        setUserProductList(get_total_sum_of_products(props.user_products));
        setTotalAmount(get_total_amount(get_total_sum_of_products(props.user_products)));
    },[props.user_products]);

    return(
        <div className="mt-16 pl-12 w-1/2 text-white">
            <div className='h-36 content-end'>
            { userProductList.map((product) => {
                return (
                <div key={product.id} className="flex">
                    <p className='w-1/2'> {`${product.name} x ${product.quantity}`} </p>
                    <p className='w-1/2 text-right'> {product.price}</p>
                </div>
                )
            })}
            </div>
            <hr className='bg-white w-full my-2'/>
            <div className=' flex'>
                <p className='w-1/2'> Total: </p>
                <p className='w-1/2 text-right'> {totalAmount} </p>
            </div>
        </div>
    );
}