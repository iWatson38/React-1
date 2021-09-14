import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            <img src="https://img3.goodfon.ru/wallpaper/nbig/3/51/avatar-neytiri-zoe-saldana-6192.jpg" />
            {props.message}
            <div>
                <span>{props.likes} likes</span>
            </div>
        </div>
    );
}

export default Post;