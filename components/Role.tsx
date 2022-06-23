import React, { FC, useState } from 'react';
import Image from 'next/image';
import styles from "../styles/Home.module.css"

const Role = ({active,setActive}: { active: boolean,setActive: React.Dispatch<React.SetStateAction<boolean>> }) => {



    return (
       <div className={active?"role active":"role"}>
            <div className={styles.close}>
                <h3>RULES</h3>
                <div style={{width: '30px', height: '30px', position: 'relative', margin:"20px",cursor:"pointer"}} onClick={()=>setActive(!active)}>
                    <Image src="/icon-close.svg" layout='fill'  />
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100%", height:"100%"}}>
            <img src="/image-rules.svg" />
            </div>
       </div >
    )
};
export { Role }