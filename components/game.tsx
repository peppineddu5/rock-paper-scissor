import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from "../styles/Home.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { paper, rock, scissors } from '../action';
import { WaitResult } from './waitResult';
import { Result } from './result';

const Game = () => {
    const select =useSelector((state:{select:string}) =>state.select)
    const [value,setValue] =useState(0)
    const [choise,setChoise]=useState("")
    const dispatch= useDispatch()
    useEffect(()=>{
        setTimeout(() => {
           if (value!=0)
        setValue(2) 
        }, 1000);
        
    },[select])
    if(value==0)
        return (
            <div className={styles.center}>
                <div className={styles.parent}>
                    <div className={`${styles.choise} ${styles.paper}`} onClick={()=>{setChoise("paper");setValue(1);dispatch(paper())}}></div>
                    <div className={`${styles.choise} ${styles.scissors}`} onClick={()=>{setChoise("scissors");setValue(1);dispatch(scissors())}}></div>
                    <div className={`${styles.choise} ${styles.rock}`} onClick={()=>{setChoise("rock");setValue(1);dispatch(rock())}} ></div>
                </div>
            </div>
        )
    if(value==1)
            return <WaitResult choise={choise} />
    return <Result choise={choise} select={select} setValue={setValue}/>
};
export { Game }