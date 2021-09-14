const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
}

const dialogsReduser = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return {type: SEND_MESSAGE, newMessageBody}
}

export default dialogsReduser;