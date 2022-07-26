import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import { products } from '../data/products';
import NumericKeyBoard from '../components/Numeric_keyboard'
import AmountKeyBoard from '../components/Money_amount_keyboard'
import ProductRow from '../components/Product_row'

export default function Controller() {
  const [userInput, setUserInput] = useState("");
  const [userCash, setUserCash] = useState(0);

  return (
    <div  className="flex">
      <div className="bg-main-gray h-screen w-2/3">
        <div className="bg-secundary-gray border-black  border-[24px] rounded-md m-4 h-[95vh]">
          <div className="bg-main-green rounded-md h-12 text-2xl font-bebasNeue text-white p-2" >
            MATUS VENDING MACHINE
          </div>
          <ProductRow products={products}/>
        </div>
      </div>
      <div className="bg-main-gray h-screen w-1/3">
        <NumericKeyBoard width={"w-40"} height={"h-40"} padding={"pt-20"} userInput={userInput} setUserInput={setUserInput}/>
        <AmountKeyBoard width={"w-40"} height={"h-40"} padding={"p-8"} userCash={userCash} setUserCash={setUserCash}/>
      </div>
    </div>
  )
}

