import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./topNav.module.scss";
import Arrow from "../Animation/Arrow"


export default function TopNav() {
    return (
        <div className={styles.flex}>
            <nav className={styles.topMenu}>
                <NavLink to="/" exact>
                    <Arrow className={styles.arrow}/>
                </NavLink>
                <NavLink to="/contacts">
                    Contact
                </NavLink>
            </nav>
        </div>
    )
}