import {renderAllTree} from "../index";

let store = {
    state:{
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
    },

    addPost() {
        let postObj = {
            message: this.state.profilePage.textareaValue,
            count: 0
        }
        this.state.dialogPage.postMessages.push(postObj);
        renderAllTree();
        this.state.profilePage.textareaValue = '';
    },

    addMes(newMes, id) {
        let obj = {mes: newMes, who: true};
        this.state.allMessages[id - 1].usersMes.push(obj);
        renderAllTree();
        this.state.dialogPage.dialogTextareaValue = '';
    },

    changeTextareaProfile(text) {
        this.state.profilePage.textareaValue = text;
        renderAllTree();
    },

    changeTextareaDialog(text) {
        this.state.dialogPage.dialogTextareaValue = text;
        renderAllTree();
    }
}

export  default store;