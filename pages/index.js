import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';

import NumericKeyBoard from '../components/Numeric_keyboard'
import AmountKeyBoard from '../components/Money_amount_keyboard'
import ProductRow from '../components/Product_row'
import UserBill from '../components/User_bill'
import UserChange from '../components/User_change'

import { products } from '../data/products';
import {get_total_sum_of_products, get_total_amount} from '../logic/machine_calculations'

export default function Vending_Machine() {

  const machineScreenHeader = "MATUS VENDING MACHINE";
  const [userInput, setUserInput] = useState("");
  const [userCash, setUserCash] = useState(0);
  const [userCheck, setUserCheck] = useState(false);
  const [userCancel, setUserCancel] = useState(false);
  const [machineMessage, setMachineMessage] = useState("Por favor, ingrese el código del producto que desea.");
  const [userProductList, setUserProductList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const [productPicked, setProductPicked] = useState({ id: 0, name: '', price: 0 });
  const [productToBePicked, setProductToBePicked] = useState(true);
  const [quantityToBePicked, setQuantityToBePicked] = useState(false);
  const [readyToPay, setReadyToPay] = useState(false);
  const [moneyInserted, setMoneyInserted] = useState(0);

  if(productToBePicked && userCheck) {
    if( products.find(element => element.code === userInput) ){
      setProductPicked(products.find(element => element.code === userInput));
      setMachineMessage("¡Excelente! Ahora por favor, ingrese la cantidad deseada.");
      setUserInput("");
      setProductToBePicked(false);
      setQuantityToBePicked(true);
      setUserCheck(false);
    }
  }

  if(quantityToBePicked && userCheck) {
    let new_product = { id: productPicked.id, name: productPicked.name, quantity: 1, price: productPicked.price };
    for(let index = 1; index < parseInt(userInput); index++){
      new_product.quantity += 1;
    }
    const product_index = products.findIndex(element => element.id === new_product.id);
    products[product_index].quantity -= new_product.quantity;

    setUserProductList([...userProductList, new_product]);
    setUserInput("");
    setQuantityToBePicked(false);
    setUserCheck(false);
    setMachineMessage("Artículo agregado ¿Desea algún otro producto?");
  }

  if(!productToBePicked && !quantityToBePicked && userCheck ) {
    setMachineMessage("Por favor, ingrese el código del producto que desea.");
    setProductToBePicked(true);
    setQuantityToBePicked(false);
    setUserCheck(false);
  }

  if(!productToBePicked && !quantityToBePicked && userCancel ) {
    setMachineMessage("Por favor, ingrese el dinero y pulse el check para continuar.");
    setUserCancel(false);
    setReadyToPay(true);
  }

  if(readyToPay && userCheck){
    const userList = (get_total_sum_of_products(userProductList));
    const total_amount = get_total_amount(userList);
    setMoneyInserted(userCash);
    setTotalAmount(total_amount);
    if(userCash < total_amount){
      setMachineMessage("Debe ingresar la cantidad requerida o más.");
    } else {
      setMachineMessage("Muchas gracias por su compra! Disfrute su producto.");
    }
    setUserCheck(false);
  }

  const handleUserCheck = () => {
    setUserCheck(true);
    setUserCancel(false);
  }

  const handleUserCancel = () => {
    setUserCancel(true);
    setUserCheck(false);
  }


  return (
    <div  className="flex">
      <div className="bg-main-gray h-screen w-2/3">
        <div className="bg-secundary-gray border-black  border-[24px] rounded-md m-4 h-[95vh]">
          <div className="bg-main-green rounded-md h-12 text-2xl font-bebasNeue text-white p-2" >
            {machineScreenHeader}
          </div>
          <ProductRow products={products}/>
          <li className='text-white font-roboto px-8 pb-4 list-disc text-base'> {machineMessage} </li>
          <div className='flex px-12'>
            <Image width={24} height={24} src={`/polygon_1.svg`} alt="triangle_icon"/>
            <p className='px-4 text-white'> {readyToPay ? userCash : userInput} </p>
          </div>
          <div className='flex'>    
            <UserBill user_products={userProductList}/>
            <UserChange user_balance={moneyInserted} total_amount={totalAmount}/>
          </div>
        </div>
      </div>
      <div className="bg-main-gray h-screen w-1/3">
        <NumericKeyBoard width={"w-40"} height={"h-40"} padding={"pt-20"} userInput={userInput} setUserInput={setUserInput} handleCheck={handleUserCheck} handleCancel={handleUserCancel}/>
        <AmountKeyBoard width={"w-40"} height={"h-40"} padding={"p-8"} userCash={userCash} setUserCash={setUserCash}/>
      </div>
    </div>
  )
}

