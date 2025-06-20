import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/assets/images/avatar-icon.png"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
                <nav>
                    <NavLink to="/host" className={({isActive}) => isActive ? activeStyles : null} >Host</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? activeStyles : null} >About</NavLink>
                    <NavLink to="/vans" className={({isActive}) => isActive ? activeStyles : null} >Vans</NavLink>
                    <Link to="login" className="login-link">
                    <img src={imageUrl} className="login-icon" /></Link>
                </nav>
            </header>
    )
}