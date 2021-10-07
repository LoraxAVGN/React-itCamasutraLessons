const CHANGE_TEXTAREA_PROFILE = 'CHANGE_TEXTAREA_PROFILE';
const ADD_POST = 'ADD_POST';

const profileReduser = (state, action) =>{
    switch (action.type) {
        case ADD_POST:
            let postObj = {
                message: state.profilePage.profileTextareaValue,
                count: 0
            }
            debugger;
            state.profilePage.postMessages.push(postObj);
            state.profilePage.profileTextareaValue = '';
            return state;
        case CHANGE_TEXTAREA_PROFILE:
            state.profilePage.profileTextareaValue = action.text;
            return state;
        default: return state;
    }
}

export const changeTextareaProfileActionCreator = (text) => ({type: CHANGE_TEXTAREA_PROFILE, text: text});
export const addPostActionCreator = () => ({type:ADD_POST});

export default profileReduser;