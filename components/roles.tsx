import React, { FC, useState } from 'react';
import Image from 'next/image';
import styles from "../styles/Home.module.css"
import { Role } from './Role';
const Roles: FC = () => {
    const [active, setActive] = useState(false)


    return (
        <>
            <button onClick={() => setActive(!active)} className={styles.button}>
                RULES
            </button>
            <Role active={active} setActive={setActive} />
        </>
    )
};
export { Roles }