import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import clsx from "clsx";
import { SlBasket } from "react-icons/sl";

const activeLink = ({ isActive}) => {
    return clsx(css.link, isActive && css.isActive);
}
export default function Navigation() {
    return (
        <nav className={css.nav}>
        <NavLink to="/" className={activeLink}>home</NavLink>
        <NavLink to="/about-brand" className={activeLink}>about brand</NavLink>
        <NavLink to="/favorite" className={activeLink}>favorite</NavLink>
        <NavLink to="/contacts" className={activeLink}>contacts</NavLink>
        <NavLink to="/shopping-cart" className={activeLink}><SlBasket /></NavLink>
        </nav>
    )
}