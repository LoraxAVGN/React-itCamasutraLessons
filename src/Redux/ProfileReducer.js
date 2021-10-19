const CHANGE_TEXTAREA_PROFILE = 'CHANGE_TEXTAREA_PROFILE';
const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let stateInit = {
    postMessages: [{message: "It's beautiful!", count: '10'},
        {message: "I love this", count: '15'}],
    profileTextareaValue: '',
    profile: null,
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
        case SET_USERS_PROFILE:
            return { ...state, profile: action.profile }
        default: return state;
    }
}

export const changeTextareaProfileActionCreator = (text) => ({type: CHANGE_TEXTAREA_PROFILE, text: text});
export const addPostActionCreator = () => ({type:ADD_POST});
export const setUserProfile = (profile) => ({type:SET_USERS_PROFILE, profile});

export default profileReducer;