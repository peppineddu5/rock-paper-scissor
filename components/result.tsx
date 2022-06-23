import React, { FC, useState } from 'react';
import Image from 'next/image';
import styles from "../styles/Home.module.css"

const Result = ({ choise, select, setValue }: { choise: string, select: string, setValue: React.Dispatch<React.SetStateAction<number>> }) => {
    console.log(choise + "     " + select)


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