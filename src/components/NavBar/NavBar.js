import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.scss";
// import Internship from "../Internship/Internship.js";

export default function NavBar() {
    
    return (
        <header>
            <div className={styles.flexWrapperNav}>
                <nav className={styles.menu}>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                    <NavLink to="/work">
                        Work
                    </NavLink>
                    <NavLink to="/internship">
                        design
                        {/* <Internship /> */}
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}