import { products } from '../data/products';
import { coins } from '../data/money'

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

export function calculate_change_detailed (user_balance, amount_to_pay) {
    let change = [];
    let coins_sum = 0;
    if(user_balance===amount_to_pay){
        return change;
    }
    coins.map((coin) => {

        let change_coin = {
            id: coin.id,
            value: coin.value,
            quantity: 0
        }
        
        let can_add_another_coin = coins_sum + coin.value <= amount_to_pay;
        while(can_add_another_coin && coins_sum < amount_to_pay && coin.quantity > 0){

            coins_sum += coin.value;
            coin.quantity -= 1;
            change_coin.quantity += 1;
            if(coins_sum + coin.value > amount_to_pay){
                can_add_another_coin = false; 
            }
        }
        change.push(change_coin);
    })
    return change;
}

export function calculate_change (user_balance, amount_to_pay) {
    return user_balance - amount_to_pay;
}
