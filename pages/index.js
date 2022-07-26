import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NumericKeyBoard from '../components/Numeric_keyboard'
import AmountKeyBoard from '../components/Money_amount_keyboard'

export default function Controller() {
  return (
    <div  className="flex">
      <div className="bg-main-gray h-screen w-2/3">
        <div className="bg-secundary-gray border-black  border-[24px] rounded-md m-10 h-5/6">
          <div className="bg-main-green rounded-md h-12 text-2xl font-bebasNeue text-white p-2" >
            MATUS VENDING MACHINE
          </div>
        </div>
      </div>
      <div className="bg-main-gray h-screen w-1/3">
        <NumericKeyBoard width={"w-40"} height={"h-40"} padding={"pt-20"}/>
        <AmountKeyBoard width={"w-40"} height={"h-40"} padding={"p-8"}/>
      </div>
    </div>
  )
}

