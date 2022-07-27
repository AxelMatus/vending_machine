import { useState } from 'react';
import {get_total_sum_of_products, get_total_amount} from '../logic/machine_calculations'

export default function User_bill (props) {
    let user_product_list = get_total_sum_of_products(props.user_products);
    let total_amount = get_total_amount(user_product_list);

    return(
        <div className="mt-16 pl-12 w-1/2 text-white">
            { user_product_list.map((product) => {
                return (
                <div key={product.id} className="flex">
                    <p className='w-1/2'> {`${product.name} x ${product.quantity}`} </p>
                    <p className='w-1/2 text-right'> {product.price}</p>
                </div>
                )
            })}
            <hr className='bg-white w-full my-2'/>
            <div className='flex'>
                <p className='w-1/2'> Total: </p>
                <p className='w-1/2 text-right'> {total_amount} </p>
            </div>
        </div>
    );
}