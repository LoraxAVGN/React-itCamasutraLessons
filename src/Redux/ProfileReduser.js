const CHANGE_TEXTAREA_PROFILE = 'CHANGE_TEXTAREA_PROFILE';
const ADD_POST = 'ADD_POST';

const profileReduser = (state, action) =>{
    switch (action.type) {
        case ADD_POST:
            let postObj = {
                message: state.profilePage.textareaValue,
                count: 0
            }
            debugger;
            state.dialogPage.postMessages.push(postObj);
            state.profilePage.textareaValue = '';
            return state;
        case CHANGE_TEXTAREA_PROFILE:
            state.profilePage.textareaValue = action.text;
            return state;
        default: return state;
    }
}

export const changeTextareaProfileActionCreator = (text) => ({type: CHANGE_TEXTAREA_PROFILE, text: text});
export const addPostActionCreator = () => ({type:ADD_POST});

export default profileReduser;