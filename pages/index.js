import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';

import NumericKeyBoard from '../components/Numeric_keyboard'
import AmountKeyBoard from '../components/Money_amount_keyboard'
import ProductRow from '../components/Product_row'
import UserBill from '../components/User_bill'
import UserChange from '../components/User_change'

import { products } from '../data/products';

export default function Vending_Machine() {
  const machineScreenHeader = "MATUS VENDING MACHINE";
  const [userInput, setUserInput] = useState("");
  const [userCash, setUserCash] = useState(0);
  const [machineMessage, setMachineMessage] = useState("Algo aqui");

  // if(userInput === "0123"){
  //   console.log("funciona");
  // }

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
            <p className='px-4 text-white'> {userInput} </p>
          </div>
          <div className='flex'>    
            <UserBill user_products={products}/>
            <UserChange user_balance={500} total_amount={500}/>
          </div>
        </div>
      </div>
      <div className="bg-main-gray h-screen w-1/3">
        <NumericKeyBoard width={"w-40"} height={"h-40"} padding={"pt-20"} userInput={userInput} setUserInput={setUserInput}/>
        <AmountKeyBoard width={"w-40"} height={"h-40"} padding={"p-8"} userCash={userCash} setUserCash={setUserCash}/>
      </div>
    </div>
  )
}

