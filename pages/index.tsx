import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Game } from '../components/game'
import { Navbar } from '../components/nav'
import { Result } from '../components/result'
import { Roles } from '../components/roles'
import { WaitResult } from '../components/waitResult'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <>

    <Navbar />
    {/*  <Result />  */}
   {/*  <WaitResult /> */}
     <Game />
     <Roles /> 
    </>
  )
}

export default Home
