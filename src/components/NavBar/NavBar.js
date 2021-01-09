import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        All projects
                    </NavLink>
                    <NavLink to="/:slug">
                        School project
                    </NavLink>
                    <NavLink to="/:slug">
                        Internship
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}