import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import s from './Header.module.css'

const linkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
}

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.wrap}>
                <p className={s.logo}>Rental<span className={s.logoSpan}>Car</span></p>
                <nav className={s.nav}>
                    <NavLink to="/" className={linkClass}>Home</NavLink>
                    <NavLink to="/catalog" className={linkClass}>Catalog</NavLink>
                    </nav>
                    </div>
            </div>
        </header>
    );
};

export default Header;