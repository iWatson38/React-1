import profileReduser, { addPostActionCreater, deletePost } from "./profile-reducer";
//import reactDom from "react-dom";
//import App from "../App";
//import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post!', likesCount: 10}
    ]
};

test('length of posts should be incremented', () => {
    // 1. Test data;
    let action = addPostActionCreater("ABOBA");
    // 2. Action;
    let newState = profileReduser(state, action);
    // 3. Expectation.
    expect(newState.posts.length).toBe(3);
});
