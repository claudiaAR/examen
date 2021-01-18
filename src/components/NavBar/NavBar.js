import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.scss";
// import Internship from "../Internship/Internship.js";

export default function NavBar() {
    return (
        <header>
            <div className={styles.flexWrapper}>
                <nav className={styles.menu}>
                    <NavLink to="/" exact>
                        All projects
                    </NavLink>
                    <NavLink to="/projects">
                        School project
                    </NavLink>
                    <NavLink to="/schoolProject">
                        this is School project 
                    </NavLink>
                    <NavLink to="/internship">
                        Internship
                        {/* <Internship /> */}
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}