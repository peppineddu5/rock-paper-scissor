import React, {  useEffect } from 'react';

import styles from "../styles/Home.module.css"
import { useDispatch } from 'react-redux';
import { decrementa, incrementa } from '../action';

const Result = ({ choise, select, setValue }: { choise: string, select: string, setValue: React.Dispatch<React.SetStateAction<number>> }) => {
    const dispatch= useDispatch()
    let i=0
    useEffect(()=>{
        i++;
        if(i==1)
            if(select.startsWith("L")){
                dispatch(decrementa())
            }else if(select.startsWith("W")){
                dispatch(incrementa())
            }
    },[])

    return (<>
        <div className={styles.center}>
            <div className={`${styles.choise} ${choise == "rock" ? styles.rock : choise == "paper" ? styles.paper : styles.scissors}`} >{select.startsWith("W")?<div className={styles.win}></div>:<></>}</div>
            <div className={styles.result}>
                {
                    select.startsWith("W") ?

                        <h2>YOU WIN</h2>
                        :
                        select.startsWith("L") ?

                            <h2>YOU LOSE</h2>

                            :

                            <h2>PARITY</h2>

                }
                <button onClick={()=>setValue(0)}>PLAY AGAIN</button>
            </div>
            <div className={`${styles.choise} ${select.substr(1) == "rock" ? styles.rock : select.substr(1) == "paper" ? styles.paper : styles.scissors}`}>
            {select.startsWith("L")?<div className={styles.win}></div>:<></>}
            </div>
        </div>
        <div className={styles.result1}>
            <h2>YOU LOSE</h2>
            <button onClick={()=>setValue(0)}>PLAY AGAIN</button>
        </div>
    </>
    )
};
export { Result }