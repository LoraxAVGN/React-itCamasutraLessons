const ADD_MES = 'ADD_MES';
const CHANGE_TEXTAREA_DIALOG = 'CHANGE_TEXTAREA_DIALOG';

let stateInit = {
    usersInfo: [{name: 'Valera', id: '1'},
                {name: 'Slava', id: '2'},
                {name: 'Masha', id: '3'}],
    dialogTextareaValue: '',
    allMessages: [
        {
            id: '1',
            name: 'Masha',
            usersMes: [{mes: "Hi, Masha", who: true},
                {mes: "Hello;)", who: false},
                {mes: "How are you?", who: true}]
        },
        {
            id: '2',
            name: 'Slava',
            usersMes: [{mes: "Hi, Slava", who: true},
                {mes: "Hello;)", who: false},
                {mes: "How are you?", who: true}]
        },
        {
            id: '3',
            name: 'Valera',
            usersMes: [{mes: "Hi, Valera", who: true},
                {mes: "Hello;)", who: false},
                {mes: "How are you?", who: true}]
        }
    ],
};

const dialogReducer = (state = stateInit, action) =>{
    switch (action.type) {
        case ADD_MES:
            let obj = {mes: action.newMes, who: true};
            state.allMessages[action.id - 1].usersMes.push(obj);
            state.dialogTextareaValue = '';
            return state;
        case CHANGE_TEXTAREA_DIALOG:
            state.dialogTextareaValue = action.text;
            return state;
        default: return state;
    }
}

export const addMesActionCreator = (text, id) => ({type: ADD_MES, newMes: text, id: id});
export const changeTextareaDialogActionCreator = (text) => ({type: CHANGE_TEXTAREA_DIALOG, text: text});

export default dialogReducer;