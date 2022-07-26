import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NumericKeyBoard from '../components/Numeric_keyboard'

export default function Home() {
  return (
    <div  className="flex">
    <div className="bg-main-gray h-screen w-2/3">

    </div>
    <div className="bg-main-gray h-screen w-1/3">
      <NumericKeyBoard width={"40"} height={"40"} padding={"p-20"}/>
    </div>
    </div>
  )
}

