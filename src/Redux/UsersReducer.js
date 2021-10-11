const FOLLOW_UNFOLLOW = 'FOLLOW_UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [],
}

const UsersReducer = (state=initialState, action) =>{
    switch(action.type){
        case FOLLOW_UNFOLLOW: 
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.id) return {...u, subscribed:!u.subscribed}
                    return u;
                })
            };
            case SET_USERS:
                return{
                    ...state,
                    users: action.users,
                }
        default: return state;
    }
}

export const followAC = (id) => ({type: FOLLOW_UNFOLLOW, id: id});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default UsersReducer;