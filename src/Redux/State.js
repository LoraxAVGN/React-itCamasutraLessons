const CHANGE_TEXTAREA_PROFILE = 'CHANGE_TEXTAREA_PROFILE';
const ADD_POST = 'ADD_POST';
const ADD_MES = 'ADD_MES';
const CHANGE_TEXTAREA_DIALOG = 'CHANGE_TEXTAREA_DIALOG';

let store = {
    _state:{
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
    _renderAllTree(){},
    returnRenderAllTree(render){
        this._renderAllTree = render;
    },
    getState(){
        return this._state;
    },
    dispatch(action){
        if(action.type === 'ADD_POST'){
            let postObj = {
                message: this._state.profilePage.textareaValue,
                count: 0
            }
            this._state.dialogPage.postMessages.push(postObj);
            this._renderAllTree();
            this._state.profilePage.textareaValue = '';
        }
        else if(action.type === 'CHANGE_TEXTAREA_PROFILE'){
            this._state.profilePage.textareaValue = action.text;
            this._renderAllTree();
        }
        else if(action.type === 'ADD_MES'){
            let obj = {mes: action.newMes, who: true};
            this._state.allMessages[action.id - 1].usersMes.push(obj);
            this._renderAllTree();
            this._state.dialogPage.dialogTextareaValue = '';
        }
        else if(action.type === 'CHANGE_TEXTAREA_DIALOG'){
            this._state.dialogPage.dialogTextareaValue = action.text;
            this._renderAllTree();
        }
    }
}

export const changeTextareaProfileActionCreator = (text) =>
    ({type: CHANGE_TEXTAREA_PROFILE, text: text});
export const addPostActionCreator = () => ({type:ADD_POST});
export const addMesActionCreator = (text, id) => ({type: ADD_MES, newMes: text, id: id});
export const changeTextareaDialogActionCreator = (text) => ({type: 'CHANGE_TEXTAREA_DIALOG', text: text});


// {type: 'CHANGE_TEXTAREA_DIALOG', text: textareaMes.current.value}

export  default store;