import {renderAllTree} from "../index";

let state = {
    dialogPage: {
        postMessages: [{message: "It's beautiful!", count: '10'},
            {message: "I love this", count: '15'},
            {message: "It's amazing!!!", count: '20'}],
        dialogTextareaValue: '',
    },
    profilePage: {
        usersInfo: [{name: 'Valera', id: '1'},
            {name: 'Slava', id: '2'},
            {name: 'Masha', id: '3'}],
        textareaValue: '',
    },
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

    addPost: () => {
        let postObj = {
            message: state.profilePage.textareaValue,
            count: 0
        }
        state.dialogPage.postMessages.push(postObj);
        renderAllTree();
        state.profilePage.textareaValue = '';
    },

    addMes: (newMes, id) => {
        let obj = {mes: newMes, who: true};
        state.allMessages[id - 1].usersMes.push(obj);
        renderAllTree();
        state.dialogPage.dialogTextareaValue = '';

    },

    changeTextareaProfile: (text) => {
        state.profilePage.textareaValue = text;
        renderAllTree();
    },

    changeTextareaDialog: (text) => {
        debugger;
        state.dialogPage.dialogTextareaValue = text;
        renderAllTree();
    }
}

export  default state;