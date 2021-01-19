import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./topNav.module.scss";
import Arrow from "../Animation/Arrow"
import Paint from "../Animation/Paint"


export default function TopNav() {
    return (
        <div>
            <div className={styles.animationWrapper}>
                <Paint className={styles.animation}color="#FFF490"/>
            </div>
        <div className={styles.navWrapper}>
            <nav className={styles.topMenu}>
                <NavLink to="/" exact>
                    <Arrow className={styles.arrow}/>
                </NavLink>
                <NavLink to="/contacts">
                    Contact
                </NavLink>
            </nav>
        </div>
        </div>
    )
}