const ADD_MES = 'ADD_MES';
const CHANGE_TEXTAREA_DIALOG = 'CHANGE_TEXTAREA_DIALOG';

const dialogReduser = (state, action) =>{
    switch (action.type) {
        case ADD_MES:
            let obj = {mes: action.newMes, who: true};
            state.dialogPage.allMessages[action.id - 1].usersMes.push(obj);
            state.dialogPage.dialogTextareaValue = '';
            return state;
        case CHANGE_TEXTAREA_DIALOG:
            state.dialogPage.dialogTextareaValue = action.text;
            return state;
        default: return state;
    }
}

export const addMesActionCreator = (text, id) => ({type: ADD_MES, newMes: text, id: id});
export const changeTextareaDialogActionCreator = (text) => ({type: CHANGE_TEXTAREA_DIALOG, text: text});

export default dialogReduser;