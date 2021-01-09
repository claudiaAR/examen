import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.scss";

export default function NavBar() {
    return (
        <header>
            <div className={styles.flex}>
                <nav className={styles.menu}>
                    <NavLink to="/" exact>
                        All projects
                    </NavLink>
                    <NavLink to="/projects">
                        School project
                    </NavLink>
                    <NavLink to="/internship">
                        Internship
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}