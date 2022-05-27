import React from "react";
import styles from './Card.module.css'

export default function Card({ name, img, diets}) {
return (   
    <div className={styles.container}>
    <div className={styles.card}>
        <img className={styles.img} src={img} alt='NOT FOUND IMG' width='200px' height='250px'/>
        <h2 className={styles.title}> {name} </h2>
        <hr className={styles.hr}/>
        <p> {diets} </p>
    </div>
    </div>
    )
}