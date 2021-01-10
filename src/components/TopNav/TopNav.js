import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./topNav.modules.scss";
import Arrow from "../Animation/Arrow"


export default function TopNav() {
    return (
        <div>
            <nav className={styles.test}>
                <NavLink to="/" exact>
                    <Arrow />
                </NavLink>
                <NavLink to="/contacts">
                    Contact
                </NavLink>
            </nav>
        </div>
    )
}