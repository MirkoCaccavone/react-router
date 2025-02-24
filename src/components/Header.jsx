// Import di Link e NavLink dalla libreria react-router-dom per la navigazione
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="nav-bar">
                {/* NavLink per la navigazione alle pagine */}
                <NavLink to="/">Homepage</NavLink>
                <NavLink to="/chisiamo">Chi Siamo</NavLink>
                <NavLink to="/listpost">Lista dei post</NavLink>

            </div>
        </header>
    )
}

