import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NumericKeyBoard from '../components/Numeric_keyboard'
import AmountKeyBoard from '../components/Money_amount_keyboard'

export default function Home() {
  return (
    <div  className="flex">
      <div className="bg-main-gray h-screen w-2/3">

      </div>
      <div className="bg-main-gray h-screen w-1/3">
        <NumericKeyBoard width={"w-40"} height={"h-40"} padding={"pt-20"}/>
        <AmountKeyBoard width={"w-40"} height={"h-40"} padding={"p-8"}/>
      </div>
    </div>
  )
}

