import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header(props) {
    return (
        <header className={s.header}>
            <img src='https://w7.pngwing.com/pngs/107/464/png-transparent-white-airplane-illustration-statue-of-liberty-air-travel-airplane-travel-flat-aircraft-world-travel-template-blue-presentation.png' />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;