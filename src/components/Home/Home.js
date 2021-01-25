import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./home.module.scss";
import Logo from "../Animation/Logo.js"
import Flower from "../Animation/Flower.js"
// import Bottom from "../Animation/Bottom";
// import Bottom from "../Animation/Bottom.js"
// import { useMousePosition } from "../Animation/useMousePosition"
// import post from "../../../portfolio/schemas/post.js";



export default function Home() {
    const location = useLocation()
    console.log(location)

    return (
        <div>
            <div className={styles.flexWrapper}>
                <div className={styles.absolute}>
                    <Logo />
               
            <Link to={'/work'} key="yes">
                <h1 className={styles.center}>WORK</h1>
            </Link>
                </div>
        </div>
   
        <div className={styles.test}>
            <Flower/>
        </div>
            
            </div>
    )
}