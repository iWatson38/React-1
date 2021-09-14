import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css';

function DialogItem(props) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://yt3.ggpht.com/a/AATXAJzVPI2I0PGAFTwf4qDsA5bpLjyjQ7Ac-kBqMQ=s900-c-k-c0xffffffff-no-rj-mo" />
            <NavLink className={s.nickname} to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;