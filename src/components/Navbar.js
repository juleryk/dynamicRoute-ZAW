import { Link, NavLink } from "react-router-dom"
export const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Main</NavLink>
            <NavLink to='/help'>Help</NavLink>
            <NavLink to='/form'>Form</NavLink>
        </nav>
    )
}