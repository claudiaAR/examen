import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to="/" exact>
                        Contact
                    </NavLink>
                    <NavLink to="/:slug">
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}