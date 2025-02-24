import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="nav-bar">
                <NavLink to="/">Homepage</NavLink>
                <NavLink to="/chisiamo">Chi Siamo</NavLink>
                <NavLink to="/listpost">Lista dei post</NavLink>

            </div>
        </header>
    )
}

