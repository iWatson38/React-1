import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: 'It\'s my first post!', likesCount: 10}
            ],
            newPostText: 'project-1'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Borov'},
                {id: 3, name: 'Penis'},
                {id: 4, name: 'Detrov'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'I\'m fine and you?'}
            ],
            newMessageBody: ""
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State chenged');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
}

export default store;
window.store = store;