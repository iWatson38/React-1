import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item + ' ' + s.friends}>
                <NavLink to='/settings' activeClassName={s.active}>Friends</NavLink>
                <img className={s.avatar} src="https://yt3.ggpht.com/a/AATXAJzVPI2I0PGAFTwf4qDsA5bpLjyjQ7Ac-kBqMQ=s900-c-k-c0xffffffff-no-rj-mo" />
                <img className={s.avatar} src="https://yt3.ggpht.com/a/AATXAJzVPI2I0PGAFTwf4qDsA5bpLjyjQ7Ac-kBqMQ=s900-c-k-c0xffffffff-no-rj-mo" />
                <img className={s.avatar} src="https://yt3.ggpht.com/a/AATXAJzVPI2I0PGAFTwf4qDsA5bpLjyjQ7Ac-kBqMQ=s900-c-k-c0xffffffff-no-rj-mo" />
            </div>
        </nav>
    );
}

export default Navbar;