import React, { FC } from 'react';
import styles from "../styles/Home.module.css"
import { useSelector } from 'react-redux';
const Navbar: FC = () => {
    const counter =useSelector((state:any)=>state.counter)
    console.log("ciao")
    return (
        <div className={styles.conteinerNav}>
            <div className={styles.navbar}>
                <h1>ROCK<br />PAPER<br />SCISSOR</h1>
                <div>
                    <h3>SCORE</h3>
                    <span>{counter}</span>
                </div>
            </div>
        </div>
    )
};
export { Navbar }