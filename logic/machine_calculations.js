import { products } from '../data/products';

export function get_total_sum_of_products (product_list) {
    let user_product_list = []
    product_list.map((product) =>{
        const product_found = user_product_list.find(element => element.name === product.name);
        const product_information = products.find(element => element.name === product.name);

        if(product_found){
            product_found.quantity += 1;
            product.price += product_information.price;
        } else {
            const new_user_product = {
                id: product.id,
                name: product.name,
                quantity: product.quantity,
                price: product.price,
            }
            user_product_list.push(new_user_product);
        }
    })
    return user_product_list;
}

export function get_total_amount (product_list) {
    let total_amount = 0;
    product_list.map((product) =>{
        total_amount += product.price;
    })
    return total_amount;
}