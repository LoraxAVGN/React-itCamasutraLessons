import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";

let store = {
    _state:{
        profilePage: {
            postMessages: [{message: "It's beautiful!", count: '10'},
                {message: "I love this", count: '15'},
                {message: "It's amazing!!!", count: '20'}],
            profileTextareaValue: '',
        },

        dialogPage: {
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
        },
    },

    _renderAllTree(){},
    returnRenderAllTree(render){
        this._renderAllTree = render;
    },
    getState(){
        return this._state;
    },

    dispatch(action){
        this._state = profileReducer(this._state, action)
        this._state = dialogReducer(this._state, action)
        this._renderAllTree();
    }
}

export  default store;