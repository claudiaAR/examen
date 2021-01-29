import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.scss";
// import Internship from "../Internship/Internship.js";

export default function NavBar() {
    
    return (
        <header>
            <div className={styles.flexWrapperNav}>
                <nav className={styles.menu}>
                    <NavLink to="/" exact className={styles.hover}>
                        Home
                    </NavLink>
                    <NavLink to="/work" className={styles.hover}>
                        Work
                    </NavLink>
                    <NavLink to="/design" className={styles.hover}>
                        Design
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}