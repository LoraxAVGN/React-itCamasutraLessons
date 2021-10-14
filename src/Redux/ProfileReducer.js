const CHANGE_TEXTAREA_PROFILE = 'CHANGE_TEXTAREA_PROFILE';
const ADD_POST = 'ADD_POST';

let stateInit = {
    postMessages: [{message: "It's beautiful!", count: '10'},
        {message: "I love this", count: '15'}],
    profileTextareaValue: '',
};

const profileReducer = (state = stateInit, action) =>{
    switch (action.type) {
        case ADD_POST:
            let postObj = {
                message: state.profileTextareaValue,
                count: 0
            }
            state.postMessages.push(postObj);
            state.profileTextareaValue = '';
            return state;
        case CHANGE_TEXTAREA_PROFILE:
            state.profileTextareaValue = action.text;
            return state;
        default: return state;
    }
}

export const changeTextareaProfileActionCreator = (text) => ({type: CHANGE_TEXTAREA_PROFILE, text: text});
export const addPostActionCreator = () => ({type:ADD_POST});

export default profileReducer;