import React, {  useEffect } from 'react';
import styles from "../styles/Home.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { paper, rock, scissors } from '../action';


const WaitResult = ({ choise }: { choise: string }) => {
    const dispatch = useDispatch()
    
    
    
    useEffect(() => {
        
       
            for (let i = 0; i < 1000; i++) {
                dispatch(choise == "rock" ? rock() : choise == "paper" ? paper() : scissors())
            }
         
        return () => {
            
        }
    }, [])


        return (<>
            <div className={styles.space_be}>
                <div className={styles.player}>
                    <h3>YOU PICKED</h3>
                    <div className={`${styles.choise} ${choise == "rock" ? styles.rock : choise == "paper" ? styles.paper : styles.scissors}`} ></div>
                </div>
                <div className={styles.player}>

                    <h3>THE HOUSE PICKED</h3>

                    <div className={`${styles.choise} ${styles.void}`}></div>

                </div>
            </div>

        </>
        )
};
export { WaitResult }